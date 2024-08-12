import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import  socialIcons  from './../../../assets/data/pages/social-items.json';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
    templateUrl: './login-1.component.html'
})

export class Login1Component implements OnInit{

  constructor(private fb: FormBuilder, private router: Router, private location: Location, public authService: AuthService) {}
  loginForm: FormGroup;
  isLoading = false;
  error = false;
  socialMediaButtons = socialIcons.socialMediaButtons;

  validateForm!: UntypedFormGroup;

  passwordVisible = false;
  password?: string;

  submitForm(): void {
    if (this.validateForm.valid) {
        this.authService.login(this.validateForm.value).subscribe({
        next: () => {
          this.router.navigate(['/apps/projects/project-list']).then(() => {
            window.location.reload();
          });
        },
        error: () => {
          window.alert('Wrong username or password! Please try again!');
          Object.values(this.validateForm.controls).forEach((control) => {
            if (control.invalid) {
              control.markAsDirty();
              control.updateValueAndValidity({ onlySelf: true });
            }
          });
        },
      });
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() =>
      this.validateForm.controls.checkPassword.updateValueAndValidity()
    );
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      remember: [true],
    });
  }
}

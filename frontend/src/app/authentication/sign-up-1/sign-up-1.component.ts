import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';
import  socialIcons  from './../../../assets/data/pages/social-items.json';


@Component({
    templateUrl: './sign-up-1.component.html'
})

export class SignUp1Component {
    socialMediaButtons = socialIcons.socialMediaButtons;
    signUpForm: FormGroup;
    isLoading = false;
    error = false;
    submitForm(): void {
        for (const i in this.signUpForm.controls) {
            this.signUpForm.controls[ i ].markAsDirty();
            this.signUpForm.controls[ i ].updateValueAndValidity();
        }
    }

    updateConfirmValidator(): void {
        Promise.resolve().then(() => this.signUpForm.controls.checkPassword.updateValueAndValidity());
    }

    confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
            return { required: true };
        } else if (control.value !== this.signUpForm.controls.password.value) {
            return { confirm: true, error: true };
        }
    }

    constructor(private fb: FormBuilder) {
    }

    passwordVisible = false;
    password?: string;
    ngOnInit(): void {
        this.signUpForm = this.fb.group({
            name         : [ null, [ Validators.required ] ],
            userName         : [ null, [ Validators.required ] ],
            email            : [ null, [ Validators.required ] ],
            password         : [ null, [ Validators.required ] ],
            checkPassword    : [ null, [ Validators.required, this.confirmationValidator ] ],
            agree            : [ false ]
        });
    }
}

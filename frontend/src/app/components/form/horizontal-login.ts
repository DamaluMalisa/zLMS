import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nz-demo-form-horizontal-login',
  template: `
    <form nz-form [nzLayout]="'inline'" [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-control nzErrorTip="Please input your username!">
          <nz-input-group class="before:hidden w-full rounded-4 border-normal border-1 dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none flex items-center gap-[10px]" nzPrefixIcon="user">
            <input class="placeholder:text-[#A0A0A0] text-[15px] text-theme-gray bg-transparent dark:text-white/60 focus:bg-transparent" formControlName="userName" nz-input placeholder="Username" />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control nzErrorTip="Please input your Password!">
          <nz-input-group class="before:hidden w-full rounded-4 border-normal border-1 dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none flex items-center gap-[10px]" nzPrefixIcon="lock">
            <input class="placeholder:text-[#A0A0A0] text-[15px] text-theme-gray bg-transparent dark:text-white/60" formControlName="password" nz-input type="password" placeholder="Password" />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control>
          <button nz-button class="bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] duration-300" [disabled]="!validateForm.valid">Log in</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
  styles: [`
    :host ::ng-deep nz-input-group .ant-input-prefix .anticon{
      @apply text-dark dark:text-white/[.87];
    }
  `]
})
export class NzDemoFormHorizontalLoginComponent implements OnInit {
  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}

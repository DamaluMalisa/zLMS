import { Component, OnInit, Directive } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nz-demo-form-normal-login',
  template: `
    <div nz-row nzGutter="25" class="justify-center">
      <div nz-col nzSm="14" nzXs="24">
      <form nz-form [formGroup]="validateForm" class="login-form" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-control nzErrorTip="Please input your username!">
          <nz-input-group class="before:hidden rounded-4 border-normal border-1 dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none inline-flex items-center gap-[10px]" nzPrefixIcon="user">
            <input class="placeholder:text-[#A0A0A0] text-[15px] text-theme-gray bg-transparent dark:text-white/60 focus:bg-transparent" type="text" nz-input formControlName="userName" placeholder="Username" />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control nzErrorTip="Please input your Password!">
          <nz-input-group class="before:hidden rounded-4 border-normal border-1 dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none inline-flex items-center gap-[10px]" nzPrefixIcon="lock">
            <input class="placeholder:text-[#A0A0A0] text-[15px] text-theme-gray bg-transparent dark:text-white/60 focus:bg-transparent" type="password" nz-input formControlName="password" placeholder="Password" />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <div class="flex items-center justify-between flex-wrap gap-3 mb-[20px]">
        <label nz-checkbox formControlName="remember">
          <span class=" text-dark dark:text-white/[.87]">Remember me</span>
        </label>
        <a class=" text-dark dark:text-white/[.87] hover:text-primary dark:hover:text-primary">Forgot password</a>
      </div>
      <div class="flex items-center justify-center gap-[20px] flex-col">
        <button nz-button class="bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] w-full flex items-center justify-center rounded-[4px] px-[20px] h-[44px] duration-300" [nzType]="'primary'">Log in</button>
        <a class="block text-dark dark:text-white/[.87] hover:text-primary dark:hover:text-primary capitalize"> register now! </a>
      </div>
    </form>
      </div>
    </div>
  `,
  styles: [`
    :host ::ng-deep nz-input-group .ant-input-prefix .anticon{
      @apply text-dark dark:text-white/[.87];
    }
  `]
})
export class NzDemoFormNormalLoginComponent implements OnInit {
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

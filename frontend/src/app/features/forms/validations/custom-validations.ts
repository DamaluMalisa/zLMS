import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { NzFormTooltipIcon } from 'ng-zorro-antd/form';

@Component({
  selector: 'form-register',
  template: `
    <form class="max-w-full" nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <nz-form-item nzGutter="25" class="mb-0">
        <nz-form-control nxMd="8" nzXs="24" class="mb-[10px]" nzErrorTip="The input is not valid First Name!">
          <nz-form-label class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 mb-[10px] p-0 text-[15px] capitalize" nzRequired nzFor="name">First Name</nz-form-label>
          <input class="w-full rounded-6 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60" nz-input formControlName="name" id="name" placeholder="First Name" />
        </nz-form-control>
        <nz-form-control nxMd="8" nzXs="24" class="mb-[10px]" nzErrorTip="Please input your Last Name!">
          <nz-form-label
            class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 mb-[10px] p-0 text-[15px] capitalize"
            nzFor="lastName"
            nzRequired
          >
            Last Name
          </nz-form-label>
            <input class="w-full rounded-6 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60" nz-input id="lastName" formControlName="lastName" placeholder="Last Name" />
        </nz-form-control>
        <nz-form-control nxMd="8" nzXs="24" class="mb-[10px]" nzErrorTip="The input is not valid Username!">
          <nz-form-label class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 mb-[10px] p-0 text-[15px] capitalize" nzRequired nzFor="username">Username</nz-form-label>
          <input class="w-full rounded-6 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60" nz-input formControlName="username" id="username" placeholder="Username" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item nzGutter="25" class="mb-0">
        <nz-form-control nxMd="8" nzXs="24" class="mb-[10px]" nzErrorTip="The input is not valid City!">
          <nz-form-label class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 mb-[10px] p-0 text-[15px] capitalize" nzRequired nzFor="city">City</nz-form-label>
          <input class="w-full rounded-6 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60" nz-input formControlName="city" id="city" placeholder="City" />
        </nz-form-control>
        <nz-form-control nxMd="8" nzXs="24" class="mb-[10px]" nzErrorTip="Please input your State!">
          <nz-form-label
            class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 mb-[10px] p-0 text-[15px] capitalize"
            nzFor="state"
            nzRequired
          >
            State
          </nz-form-label>
            <input class="w-full rounded-6 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60" nz-input id="state" formControlName="state" Placeholder="State" />
        </nz-form-control>
        <nz-form-control nxMd="8" nzXs="24" class="mb-[10px]" nzErrorTip="The input is not valid Zip!">
          <nz-form-label class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 mb-[10px] p-0 text-[15px] capitalize" nzRequired nzFor="zip">Zip</nz-form-label>
          <input class="w-full rounded-6 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60" nz-input formControlName="zip" id="zip" Placeholder="Zip" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item nz-row class="register-area" class="mt-[15px]">
        <nz-form-control>
          <label class="text-light dark:text-white/60 text-[15px] capitalize" nz-checkbox formControlName="agree">
          Agree to terms and conditions
          </label>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item nz-row class="register-area" class="mb-0">
        <nz-form-control>
          <button class="bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[30px] h-[44px]" nz-button nzType="primary">Submit form</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
})
export class FormRegisterComponent implements OnInit {
  validateForm!: UntypedFormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      username: [null, [Validators.required]],
      city: [null, [Validators.required]],
      state: [null, [Validators.required]],
      zip: [null, [Validators.required]],
      agree: [false]
    });
  }
}

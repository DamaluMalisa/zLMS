import {
  Component
} from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators
} from '@angular/forms';

import {
  NzFormTooltipIcon
} from 'ng-zorro-antd/form';

@Component({
  selector: 'shipping-address',
  template: `
<div>
  <h4 class="text-[20px] font-medium mb-[20px] text-dark dark:text-white/[.87]">2. Please Setup Your Profile</h4>
  <form class="max-w-full" nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
    <nz-form-control class="mb-[20px]">
      <nz-form-label
        class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 p-0 [&>label]:text-[16px] capitalize" nzFor="name">Contact Name</nz-form-label>
      <input
        class="w-full rounded-6 border-regular border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60"
        nz-input formControlName="name" id="name" placeholder="Ibn Adam" />
    </nz-form-control>
    <nz-form-control class="mb-[20px]">
      <nz-form-label
        class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 p-0 [&>label]:text-[16px] capitalize" nzFor="cmName">Company Name (Optional)</nz-form-label>
      <input
        class="w-full rounded-6 border-regular border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60"
        nz-input formControlName="cmName" id="cmName" placeholder="Adam" />
    </nz-form-control>
    <nz-form-control class="mb-[20px]">
      <nz-form-label
        class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 p-0 [&>label]:text-[16px] capitalize"
        nzFor="email">
        Email
      </nz-form-label>
      <input
        class="w-full rounded-6 border-regular border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60"
        nz-input id="email" formControlName="email" placeholder="Email" />
    </nz-form-control>
    <nz-form-control class="mb-[20px]">
      <nz-form-label
        class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 p-0 [&>label]:text-[16px] capitalize" nzFor="number">Phone Number</nz-form-label>
      <input
        class="w-full rounded-6 border-regular border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60"
        nz-input formControlName="phoneNumberPrefix" id="number" placeholder="+880" />
    </nz-form-control>
    <nz-form-control class="mb-[20px]">
      <nz-form-label
        class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 p-0 [&>label]:text-[16px] capitalize" nzFor="lucy">Country/Region</nz-form-label>
        <nz-select class="w-full capitalize [&>nz-select-top-control]:border-regular dark:[&>nz-select-top-control]:border-white/10 [&>nz-select-top-control]:bg-white [&>nz-select-top-control]:dark:bg-white/10 [&>nz-select-top-control]:shadow-none [&>nz-select-top-control]:text-dark [&>nz-select-top-control]:dark:text-white/60 [&>nz-select-top-control]:h-[50px] [&>nz-select-top-control]:flex [&>nz-select-top-control]:items-center [&>nz-select-top-control]:rounded-[6px] [&>nz-select-top-control]:px-[20px] [&>.ant-select-arrow]:text-theme-gray dark:[&>.ant-select-arrow]:text-white/60" name="lucy" formControlName="lucy" [nzOptions]="listOfOption"></nz-select>
    </nz-form-control>
    <nz-form-control class="mb-[20px]">
      <nz-form-label
        class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 p-0 [&>label]:text-[16px] capitalize" nzFor="house">Street Address</nz-form-label>
      <input
        class="w-full rounded-6 border-regular border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60 mb-[15px]"
        nz-input formControlName="house" id="house" placeholder="House Number and Street Name" />
        <input
        class="w-full rounded-6 border-regular border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60"
        nz-input formControlName="apartment" id="apartment" placeholder="Apartment, Suite, Unit etc." />
    </nz-form-control>
    <nz-form-control class="mb-[20px]">
      <nz-form-label
        class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 p-0 [&>label]:text-[16px] capitalize" nzFor="city">City</nz-form-label>
      <input
        class="w-full rounded-6 border-regular border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60 mb-[15px]"
        nz-input formControlName="city" id="city" placeholder="Enter City" />
    </nz-form-control>
    <nz-form-control>
      <nz-form-label
        class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 p-0 [&>label]:text-[16px] capitalize" nzFor="zip">Zip/Postal Code</nz-form-label>
      <input
        class="w-full rounded-6 border-regular border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60 mb-[15px]"
        nz-input formControlName="zip" id="zip" placeholder="Enter Zip" />
    </nz-form-control>
  </form>
</div>
`,
})
export class PaymentMethodComponent {

  passwordVisible = false;
  password?: string;

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
          control.updateValueAndValidity({
            onlySelf: true
          });
        }
      });
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: UntypedFormControl): {
    [s: string]: boolean
  } => {
    if (!control.value) {
      return {
        required: true
      };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return {
        confirm: true,
        error: true
      };
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
      email: [null, [Validators.email, Validators.required]],
      phoneNumberPrefix: ['+86'],
      phoneNumber: [null, [Validators.required]],
      city: [null, [Validators.required]],
      house: [null, [Validators.required]],
      zip: [null, [Validators.required]],
      cmName: [null, [Validators.required]],
      apartment: [null, [Validators.required]],
      lucy: [null, [Validators.required]],
    });
  }

  listOfOption = [
    { label: 'Jack', value: 'jack' },
    { label: 'Lucy', value: 'lucy' },
    { label: 'disabled', value: 'disabled', disabled: true }
  ];
}

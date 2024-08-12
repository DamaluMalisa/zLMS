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
  selector: 'create-account',
  template: `
<div>
  <h4 class="text-[20px] font-medium mb-[20px] text-dark dark:text-white/[.87]">1. Please Create Your Account</h4>
  <form class="max-w-full" [formGroup]="validateForm" (ngSubmit)="submitForm()">
    <nz-form-control class="mb-[20px]">
      <nz-form-label
        class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 p-0 [&>label]:text-[16px] capitalize"
        nzFor="username">Username</nz-form-label>
      <input
        class="w-full rounded-6 border-regular border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60"
        nz-input formControlName="username" id="username" placeholder="Username" />
    </nz-form-control>
    <nz-form-control class="mb-[20px]">
      <nz-form-label
        class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 p-0 [&>label]:text-[16px] capitalize"
        nzFor="password" nzRequired>
        Password
      </nz-form-label>
      <nz-input-group class="flex items-center shadow-none py-[10px] px-[20px] h-[50px] border-1 border-regular dark:border-white/10 w-full text-[14px] font-normal leading-[1.5] dark:bg-white/10 rounded-6" [nzSuffix]="suffixTemplate">
        <input class="w-full text-[15px] placeholder:text-[#A0A0A0] dark:bg-transparent bg-transparent dark:text-white/60 outline-none autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,0,0)] text-theme-gray"
          [type]="passwordVisible ? 'text' : 'password'"
          nz-input
          placeholder="Password"
          id="password"
          formControlName="password"
          (ngModelChange)="updateConfirmValidator()"
        />
        <ng-template #suffixTemplate>
          <span class="cursor-pointer text-light-extra dark:text-white/60 w-[15px] h-[15px]"
            nz-icon
            [nzType]="passwordVisible ? 'eye' : 'eye-invisible'"
            (click)="passwordVisible = !passwordVisible"
          ></span>
        </ng-template>
      </nz-input-group>
    </nz-form-control>
    <nz-form-control>
      <nz-form-label
        class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 p-0 [&>label]:text-[16px] capitalize"
        nzFor="checkPassword" nzRequired>
        Confirm Password
      </nz-form-label>
      <input class="w-full rounded-6 border-regular border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60"
          [type]="passwordVisible ? 'text' : 'password'"
          nz-input
          placeholder="Confirm Password"
          formControlName="checkPassword"
          id="checkPassword"
        />
    </nz-form-control>
  </form>

</div>
`,
})
export class CreateAccountComponent {
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
      username: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
    });
  }
}

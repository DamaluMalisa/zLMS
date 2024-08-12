import {
  Component
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'account-settings',
  template: `
<form class="max-w-full" nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
  <div class="mb-[26px] pb-[30px] border-b border-regular dark:border-white/10">
      <div nz-row nzJustify="center">
        <div nz-col nzXXl="12" nzLg="16" nzXs="24">
          <nz-form-control class="mb-[20px]">
            <nz-form-label
              class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 p-0 [&>label]:text-[15px] mb-[5px] capitalize"
              nzFor="username">Username</nz-form-label>
            <input
              class="w-full rounded-6 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60"
              nz-input formControlName="username" id="username" placeholder="Andrew Malisa" />
            <p class="mt-[14px] text-light dark:text-white/60">Your Dashboard URL: http://zahara.com/<span
                class="text-dark dark:text-white/[.87]">malisa</span></p>
          </nz-form-control>
          <nz-form-control class="mb-[20px]">
            <nz-form-label
              class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 p-0 [&>label]:text-[15px] mb-[5px] capitalize"
              nzFor="email">Email</nz-form-label>
            <input
              class="w-full rounded-6 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60"
              nz-input formControlName="email" id="email" placeholder="contact@example.com" />
          </nz-form-control>
        </div>
      </div>
  </div>
  <div class="account-form-bottom">
    <div nz-row nzJustify="center">
        <div nz-col nzXXl="12" nzLg="16" nzXs="24">
<!--          <div class="flex items-center flex-wrap justify-between gap-[15px]">-->
<!--            <div>-->
<!--            <h1 class="text-base font-semibold text-dark dark:text-white/[.87]">Close Account</h1>-->
<!--            <p class="mb-0 text-body dark:text-white/60">Delete Your Account and Account data</p>-->
<!--            </div>-->
<!--            <div>-->
<!--              <button-->
<!--                  class="bg-danger hover:bg-danger-hbr inline-flex items-center outline-none shadow-none duration-300 text-white capitalize px-[15px] text-[15px] border-danger font-semibold hover:border-danger-hbr rounded-[5px] gap-[8px] h-[40px]"-->
<!--                  nz-button nzType="primary">-->
<!--                  <span>Close account</span>-->
<!--                </button>-->
<!--            </div>-->
<!--          </div>-->
          <div class="inline-flex items-center gap-[13px] pt-[48px]">
                <button
                  class="bg-primary hover:bg-primary-hbr inline-flex items-center outline-none shadow-none w-fit duration-300 text-white capitalize px-[20px] text-[15px] border-primary font-semibold hover:border-primary-hbr rounded-[5px] gap-[8px] h-[46px]"
                  nz-button nzType="primary">
                  <span>update Profile</span>
                </button>
                <button
                  class="bg-normalBG border-normal dark:bg-white/10 dark:border-white/10 inline-flex items-center outline-none shadow-none w-fit duration-300 text-theme-gray dark:text-white/60 font-semibold capitalize px-[20px] text-[15px rounded-[5px] gap-[8px] h-[46px]"
                  nz-button nzType="primary">
                  <span>Cancel</span>
                </button>
              </div>
          </div>
    </div>
  </div>
</form>
`,
})
export class AccountSettingComponent {
  isFormSubmitted = false;
  validateForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  submitForm(): void {
    this.isFormSubmitted = true;
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      this.validateForm.markAllAsTouched();
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): {
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


  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
    });
  }

}

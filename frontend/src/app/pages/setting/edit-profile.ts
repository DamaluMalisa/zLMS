import {
  Component
} from '@angular/core';
import {
  FormBuilder,
  FormControl ,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'edit-profiles',
  template: `
    <form class="max-w-full" nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <nz-form-control class="mb-[20px]">
        <nz-form-label
          class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 p-0 [&>label]:text-[15px] mb-[5px] capitalize" nzFor="name">Name</nz-form-label>
        <input
          class="w-full rounded-6 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60"
          nz-input formControlName="name" id="name" placeholder="Enter name" />
      </nz-form-control>
      <nz-form-control class="mb-[20px]">
        <nz-form-label
          class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 p-0 [&>label]:text-[15px] mb-[5px] capitalize" nzFor="number">Phone Number</nz-form-label>
        <input
          class="w-full rounded-6 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60"
          nz-input formControlName="phoneNumberPrefix" id="number" placeholder="+255" />
      </nz-form-control>
      <nz-form-control class="mb-[20px]">
        <nz-form-label
          class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 p-0 [&>label]:text-[15px] mb-[5px] capitalize" nzFor="lucy">Country</nz-form-label>
          <nz-select ngModel="1" formControlName="country" class="w-full capitalize [&>nz-select-top-control]:border-normal dark:[&>nz-select-top-control]:border-white/10 [&>nz-select-top-control]:bg-white [&>nz-select-top-control]:dark:bg-white/10 [&>nz-select-top-control]:shadow-none [&>nz-select-top-control]:text-dark [&>nz-select-top-control]:dark:text-white/60 [&>nz-select-top-control]:h-[50px] [&>nz-select-top-control]:flex [&>nz-select-top-control]:items-center [&>nz-select-top-control]:rounded-[6px] [&>nz-select-top-control]:px-[20px] [&>.ant-select-arrow]:text-theme-gray dark:[&>.ant-select-arrow]:text-white/60" name="country" [nzOptions]="listOfOption"></nz-select>
      </nz-form-control>
      <nz-form-control class="mb-[20px]">
        <nz-form-label
          class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 p-0 [&>label]:text-[15px] mb-[5px] capitalize" nzFor="city">City</nz-form-label>
        <input
          class="w-full rounded-6 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60 mb-[15px]"
          nz-input formControlName="city" id="city" placeholder="Enter City" />
      </nz-form-control>
      <nz-form-control class="mb-[20px]">
      <nz-form-label
        class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 p-0 [&>label]:text-[15px] mb-[5px] capitalize" nzFor="cmName">Company Name</nz-form-label>
      <input
        class="w-full rounded-6 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60"
        nz-input formControlName="cmName" id="cmName" placeholder="Example"/>
    </nz-form-control>
    <nz-form-control class="mb-[20px]">
      <nz-form-label
        class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 p-0 [&>label]:text-[15px] mb-[5px] capitalize" nzFor="website">Website</nz-form-label>
      <input
        class="w-full rounded-6 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60"
        nz-input formControlName="website" id="website" placeholder="www.example.com" />
    </nz-form-control>
    <nz-form-control>
      <nz-form-label
        class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 p-0 [&>label]:text-[15px] mb-[5px] capitalize" nzFor="zip">User Bio</nz-form-label>
        <textarea class="w-full rounded-6 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60 mb-[15px] h-[98px] resize-none" nz-input placeholder="Autosize height based on content lines"></textarea>
    </nz-form-control>
    <nz-form-control>
        <nz-form-label
          class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 p-0 [&>label]:text-[15px] mb-[5px] capitalize" nzFor="zip">Skills</nz-form-label>
          <textarea class="w-full rounded-6 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60 mb-[15px] h-[98px] resize-none" nz-input placeholder="Autosize height based on content lines"></textarea>
      </nz-form-control>
      <nz-form-control class="mt-[25px]">
        <div class="inline-flex items-center gap-[13px]">
          <button
            class="bg-primary hover:bg-primary-hbr inline-flex items-center outline-none shadow-none w-fit duration-300 text-white capitalize px-[20px] text-[15px] border-primary font-semibold hover:border-primary-hbr rounded-[5px] gap-[8px] h-[46px]"
            nz-button
            nzType="primary"
            >
            <span>update Profile</span>
            </button>
            <button
            class="bg-normalBG border-normal dark:bg-white/10 dark:border-white/10 inline-flex items-center outline-none shadow-none w-fit duration-300 text-theme-gray dark:text-white/60 font-semibold capitalize px-[20px] text-[15px rounded-[5px] gap-[8px] h-[46px]"
            nz-button
            nzType="primary"
            >
            <span>Cancel</span>
          </button>
        </div>
      </nz-form-control>
  </form>
  `,
})
export class EditProfileComponent {

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

  confirmationValidator = (control: FormControl ): {
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
      name: [null, [Validators.required]],
      country: [null, [Validators.required]],
      phoneNumberPrefix: ['+255'],
      phoneNumber: [null, [Validators.required]],
      city: [null, [Validators.required]],
      cmName: [null, [Validators.required]],
      website: [null, [Validators.required]],
      zip: [null, [Validators.required]],
    });
  }

  listOfOption = [
    { label: 'Tanzanina', value: '1' },
    { label: 'Kenya', value: '2' },
    { label: 'Uganda', value: '3' },
    { label: 'Rwanda', value: '4' },
    { label: 'Burundi', value: '5' },
    { label: 'Somalia', value: '6' },
  ];
}

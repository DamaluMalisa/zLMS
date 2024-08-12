import {
  Component
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'password-settings',
  template: `
    <form class="max-w-full" nz-form [formGroup]="myGroup">
      <nz-form-control class="mb-[20px]">
        <nz-form-label
          class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 p-0 [&>label]:text-[15px] mb-[5px] capitalize" nzFor="name">Old password</nz-form-label>
        <input
          class="w-full rounded-6 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60"
          nz-input formControlName="password" id="name" placeholder="Old Password" />
      </nz-form-control>
      <nz-form-control class="mb-[20px]">
        <nz-form-label
            class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 p-0 [&>label]:text-[15px] mb-[5px] capitalize" nzFor="newPassword">New password</nz-form-label>
        <nz-input-group
          class="flex items-center shadow-none py-[10px] px-[20px] h-[50px] border-1 border-normal dark:border-white/10 w-full text-[14px] font-normal leading-[1.5] dark:bg-white/10 rounded-4"
          [nzSuffix]="suffixTemplate">
          <input id="newPassword"
            class="w-full text-[15px] placeholder:text-[#A0A0A0] dark:bg-transparent bg-transparent dark:text-white/60 outline-none autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,0,0)]  text-theme-gray"
            [type]="passwordVisible ? 'text' : 'password'" nz-input placeholder="Input password" />
          <ng-template #suffixTemplate>
            <span class="cursor-pointer text-light-extra dark:text-white/60 w-[15px] h-[15px]" nz-icon
              [nzType]="passwordVisible ? 'eye' : 'eye-invisible'"
              (click)="passwordVisible = !passwordVisible"></span>
          </ng-template>
        </nz-input-group>
        <p class="mt-[14px] text-light dark:text-white/60 text-[13px]">Minimum 6 characters</p>
      </nz-form-control>
      <nz-form-control class="mb-[20px]">
        <nz-form-label
          class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 p-0 [&>label]:text-[15px] mb-[5px] capitalize" nzFor="newPassword">Confirm password</nz-form-label>
        <nz-input-group
          class="flex items-center shadow-none py-[10px] px-[20px] h-[50px] border-1 border-normal dark:border-white/10 w-full text-[14px] font-normal leading-[1.5] dark:bg-white/10 rounded-4"
          [nzSuffix]="suffixTemplate">
          <input id="newPassword"
                 class="w-full text-[15px] placeholder:text-[#A0A0A0] dark:bg-transparent bg-transparent dark:text-white/60 outline-none autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,0,0)]  text-theme-gray"
                 [type]="passwordVisible ? 'text' : 'password'" nz-input placeholder="Input password" />
          <ng-template #suffixTemplate>
            <span class="cursor-pointer text-light-extra dark:text-white/60 w-[15px] h-[15px]" nz-icon
                  [nzType]="passwordVisible ? 'eye' : 'eye-invisible'"
                  (click)="passwordVisible = !passwordVisible"></span>
          </ng-template>
        </nz-input-group>
      </nz-form-control>

      <nz-form-control class="mt-[25px]">
        <div class="inline-flex items-center gap-[13px]">
          <button
            class="bg-primary hover:bg-primary-hbr inline-flex items-center outline-none shadow-none w-fit duration-300 text-white capitalize px-[20px] text-[15px] border-primary font-semibold hover:border-primary-hbr rounded-[5px] gap-[8px] h-[46px]"
            nz-button
            nzType="primary"
            >
            <span>Change password</span>
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
export class PasswordSettingComponent {
  myGroup: FormGroup;
  passwordVisible = false;
  password?: string;

  ngOnInit() {
    // Initialize the form group
    this.myGroup = new FormGroup({
      password: new FormControl(),
      newPassword: new FormControl(),
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nz-demo-form-register',
  template: `
    <form nz-form class="max-w-[600px]" [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-label class="flex items-center font-medium dark:text-white/60" [nzSm]="6" [nzXs]="24" nzRequired nzFor="email">E-mail</nz-form-label>
        <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="The input is not valid E-mail!">
          <input class="{{inputClass}}" nz-input formControlName="email" id="email" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label class="flex items-center font-medium dark:text-white/60" [nzSm]="6" [nzXs]="24" nzFor="password" nzRequired>Password</nz-form-label>
        <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="Please input your password!">
          <input class="{{inputClass}}" nz-input type="password" id="password" formControlName="password" (ngModelChange)="updateConfirmValidator()" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label class="flex items-center font-medium dark:text-white/60" [nzSm]="6" [nzXs]="24" nzFor="checkPassword" nzRequired>Confirm Password</nz-form-label>
        <nz-form-control [nzSm]="14" [nzXs]="24" [nzErrorTip]="errorTpl">
          <input class="{{inputClass}}" nz-input type="password" formControlName="checkPassword" id="checkPassword" />
          <ng-template #errorTpl let-control>
            <ng-container *ngIf="control.hasError('required')">
              Please confirm your password!
            </ng-container>
            <ng-container *ngIf="control.hasError('confirm')">
              Two passwords that you enter is inconsistent!
            </ng-container>
          </ng-template>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label class="flex items-center font-medium dark:text-white/60" [nzSm]="6" [nzXs]="24" nzFor="nickname" nzRequired>
          <span>
            Nickname
            <i nz-icon nz-tooltip nzTooltipTitle="What do you want other to call you" nzType="question-circle" nzTheme="outline"></i>
          </span>
        </nz-form-label>
        <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="Please input your nickname!">
          <input class="{{inputClass}}" nz-input id="nickname" formControlName="nickname" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label class="flex items-center font-medium dark:text-white/60" [nzSm]="6" [nzXs]="24" nzFor="phoneNumber" nzRequired>Phone Number</nz-form-label>
        <nz-form-control
          [nzSm]="14"
          [nzXs]="24"
          [nzValidateStatus]="validateForm.controls['phoneNumber']"
          nzErrorTip="Please input your phone number!"
        >
          <nz-input-group [nzAddOnBefore]="addOnBeforeTemplate">
            <ng-template #addOnBeforeTemplate>
              <nz-select formControlName="phoneNumberPrefix" class="phone-select text-dark dark:text-white/[.87] w-[70px]">
                <nz-option nzLabel="+86" nzValue="+86"></nz-option>
                <nz-option nzLabel="+87" nzValue="+87"></nz-option>
              </nz-select>
            </ng-template>
            <input class="w-full rounded-e-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60" formControlName="phoneNumber" id="'phoneNumber'" nz-input />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label class="flex items-center font-medium dark:text-white/60" [nzSm]="6" [nzXs]="24" nzFor="website" nzRequired>Website</nz-form-label>
        <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="Please input website!">
          <input class="{{inputClass}}" nz-input id="website" formControlName="website" placeholder="website" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label class="flex items-center font-medium dark:text-white/60" [nzSm]="6" [nzXs]="24" nzFor="captcha" nzRequired>Captcha</nz-form-label>
        <nz-form-control
          [nzSm]="14"
          [nzXs]="24"
          nzErrorTip="Please input the captcha you got!"
          nzExtra="We must make sure that your are a human."
        >
          <div nz-row [nzGutter]="8">
            <div nz-col [nzSpan]="14">
              <input class="{{inputClass}}" nz-input formControlName="captcha" id="captcha" />
            </div>
            <div nz-col [nzSpan]="10">
              <button class="bg-normal dark:bg-white/30 border-solid border-1 border-normal dark:border-white/10 text-dark dark:text-white/[.87] text-[14px] font-semibold leading-[22px] w-full flex items-center justify-center rounded-[4px] px-[20px] h-[50px] duration-300 " nz-button (click)="getCaptcha($event)">Get captcha</button>
            </div>
          </div>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item class="flex items-center font-medium dark:text-white/60" nz-row class="mb-[20px]">
        <nz-form-control [nzSpan]="14" [nzOffset]="6">
          <label nz-checkbox formControlName="agree">
            <span class="text-theme-gray dark:text-white/60">I have read the <a class="text-primary">agreement</a></span>
          </label>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item class="flex items-center font-medium dark:text-white/60" nz-row class="mb-[20px]">
        <nz-form-control [nzSpan]="14" [nzOffset]="6">
          <button nz-button class="bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] w-full flex items-center justify-center rounded-[4px] px-[20px] h-[44px] duration-300">Register</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
  styles: [`
    :host ::ng-deep nz-select nz-select-top-control {
      @apply border-none shadow-none #{!important};
    }
    :host ::ng-deep .ant-form-item-extra{
      @apply text-dark dark:text-white/[.87];
    }
  `]
})
export class NzDemoFormRegisterComponent implements OnInit {
  validateForm: FormGroup;
  inputClass = 'w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60'

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [null, [Validators.required]],
      phoneNumberPrefix: ['+86'],
      phoneNumber: [null, [Validators.required]],
      website: [null, [Validators.required]],
      captcha: [null, [Validators.required]],
      agree: [false]
    });
  }
}

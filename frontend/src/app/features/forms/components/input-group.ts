
import { Component } from '@angular/core';

@Component({
  selector: 'input-groups',
  template:`
  <nz-row nzGutter="25">
    <nz-col nzMd="12" nzXs="24" class="mb-[25px]">
      <nz-input-group class="before:hidden w-full rounded-4 border-normal border-1  dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none flex items-center gap-[10px] [&>span]:flex [&>span>span]:flex [&>span]:items-center" [nzPrefix]="prefixTemplateUser">
        <input class="placeholder:text-[#A0A0A0] text-[15px] text-theme-gray bg-transparent dark:text-white/60" nz-input nz-input name="name" type="text" placeholder="Name" />
      </nz-input-group>
      <ng-template #prefixTemplateUser><span class="text-light dark:text-white/60 text-15" nz-icon nzType="user"></span></ng-template>
    </nz-col>
    <nz-col nzMd="12" nzXs="24" class="mb-[25px]">
      <nz-input-group class="before:hidden w-full rounded-4 border-normal border-1  dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none flex items-center gap-[10px]" [nzPrefix]="prefixTemplateEnvelope">
        <input class="placeholder:text-[#A0A0A0] text-[15px] text-theme-gray bg-transparent dark:text-white/60" nz-input nz-input name="name" type="email" placeholder="Email" />
      </nz-input-group>
      <ng-template #prefixTemplateEnvelope>
        <span class="text-light dark:text-white/60">
          <svg-icon class="[&>svg]:w-[18px] [&>svg]:h-[18px] text-current dark:text-current text-18" src="assets/images/svg/unicons-line/envelope.svg"></svg-icon>
        </span>
      </ng-template>
    </nz-col>
    <nz-col nzMd="12" nzXs="24" class="mb-[25px]">
      <nz-input-group class="before:hidden w-full rounded-4 border-normal border-1  dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none flex items-center gap-[10px]" [nzPrefix]="prefixTemplateLocation">
        <input class="placeholder:text-[#A0A0A0] text-[15px] text-theme-gray bg-transparent dark:text-white/60" nz-input nz-input name="name" type="text" placeholder="Location" />
      </nz-input-group>
      <ng-template #prefixTemplateLocation>
        <span class="text-light dark:text-white/60">
          <svg-icon class="[&>svg]:w-[18px] [&>svg]:h-[18px] text-current dark:text-current text-18" src="assets/images/svg/unicons-line/location-point.svg"></svg-icon>
        </span>
      </ng-template>
    </nz-col>
    <nz-col nzMd="12" nzXs="24" class="mb-[25px]">
      <nz-input-group class="before:hidden flex items-center shadow-none py-[10px] px-[20px] h-[50px] border-1 border-normal dark:border-white/10 w-full text-[14px] font-normal leading-[1.5] dark:bg-white/10 rounded-4 gap-[10px]" [nzPrefix]="prefixTemplatePassword" [nzSuffix]="suffixTemplate">
        <input class="w-full text-[15px] placeholder:text-[#A0A0A0] dark:bg-transparent bg-transparent dark:text-white/60 outline-none autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,0,0)]  text-theme-gray"
          [type]="passwordVisible ? 'text' : 'password'"
          nz-input
          placeholder="Input password"
        />
        <ng-template #suffixTemplate>
          <span
          class="cursor-pointer text-light dark:text-white/60 w-[18px] h-[18px]"
            nz-icon
            [nzType]="passwordVisible ? 'eye' : 'eye-invisible'"
            (click)="passwordVisible = !passwordVisible"
          ></span>
        </ng-template>
        <ng-template #prefixTemplatePassword>
          <span class="text-light dark:text-white/60">
            <svg-icon class="[&>svg]:w-[18px] [&>svg]:h-[18px] text-current dark:text-current" src="assets/images/svg/unicons-line/lock.svg"></svg-icon>
          </span>
        </ng-template>
      </nz-input-group>
    </nz-col>
    <nz-col nzMd="12" nzXs="24" class="mb-[25px]">
      <nz-input-group class="before:hidden w-full rounded-4 border-normal border-1  dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none flex items-center gap-[10px]" [nzPrefix]="prefixTemplatePayment">
        <input class="placeholder:text-[#A0A0A0] text-[15px] text-theme-gray bg-transparent dark:text-white/60" nz-input nz-input name="name" type="text" placeholder="Payment Method" />
      </nz-input-group>
      <ng-template #prefixTemplatePayment>
        <span class="text-light dark:text-white/60">
          <svg-icon class="[&>svg]:w-[18px] [&>svg]:h-[18px] text-current dark:text-current text-18" src="assets/images/svg/unicons-line/credit-card.svg"></svg-icon>
        </span>
      </ng-template>
    </nz-col>
    <nz-col nzMd="12" nzXs="24" class="mb-[25px]">
      <nz-input-group class="before:hidden w-full rounded-4 border-normal border-1  dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none flex items-center gap-[10px]" [nzPrefix]="prefixTemplatePhone">
        <input class="placeholder:text-[#A0A0A0] text-[15px] text-theme-gray bg-transparent dark:text-white/60" nz-input nz-input name="name" type="text" placeholder="Phone" />
      </nz-input-group>
      <ng-template #prefixTemplatePhone>
        <span class="text-light dark:text-white/60">
          <svg-icon class="[&>svg]:w-[18px] [&>svg]:h-[18px] text-current dark:text-current text-18" src="assets/images/svg/unicons-line/phone.svg"></svg-icon>
        </span>
      </ng-template>
    </nz-col>
  </nz-row>
  `,
})

export class InputGroupComponent{
  passwordVisible = false;
  password?: string;
}

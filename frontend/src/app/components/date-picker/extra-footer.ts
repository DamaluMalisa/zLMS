import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-date-picker-extra-footer',
  template: `
    <nz-date-picker class="inline-flex items-center rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[8px] h-[38px] outline-none placeholder:text-light placeholder:font-normal text-theme-gray dark:text-white/60 w-full mb-[15px]" [nzRenderExtraFooter]="footerRender"></nz-date-picker>
    <nz-date-picker class="inline-flex items-center rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[8px] h-[38px] outline-none placeholder:text-light placeholder:font-normal text-theme-gray dark:text-white/60 w-full mb-[15px]" [nzRenderExtraFooter]="plainFooter" nzShowTime></nz-date-picker>
    <nz-range-picker class="inline-flex items-center rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[8px] h-[38px] outline-none placeholder:text-light placeholder:font-normal text-theme-gray dark:text-white/60 w-full mb-[15px]" [nzRenderExtraFooter]="footerRender"></nz-range-picker>
    <nz-range-picker class="inline-flex items-center rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[8px] h-[38px] outline-none placeholder:text-light placeholder:font-normal text-theme-gray dark:text-white/60 w-full mb-[15px]" [nzRenderExtraFooter]="plainFooter" nzShowTime></nz-range-picker>
    <nz-month-picker class="inline-flex items-center rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[8px] h-[38px] outline-none placeholder:text-light placeholder:font-normal text-theme-gray dark:text-white/60 w-full mb-[15px]" [nzRenderExtraFooter]="footerRender" nzPlaceHolder="Select month"></nz-month-picker>
  `,
  styles: [
    `
      :host ::ng-deep .ant-picker-separator{
        @apply text-dark dark:text-white/[.87]
      }
    `
  ]
})
export class NzDemoDatePickerExtraFooterComponent {
  plainFooter = 'plain extra footer';
  footerRender = () => 'extra footer';
}

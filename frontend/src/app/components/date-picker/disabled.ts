import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-date-picker-disabled',
  template: `
    <nz-date-picker class="inline-flex items-center rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[8px] h-[38px] outline-none placeholder:text-light placeholder:font-normal text-theme-gray dark:text-white/60 w-full mb-[15px]" nzDisabled></nz-date-picker>
    <br />
    <nz-month-picker class="inline-flex items-center rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[8px] h-[38px] outline-none placeholder:text-light placeholder:font-normal text-theme-gray dark:text-white/60 w-full mb-[15px]" nzDisabled></nz-month-picker>
    <br />
    <nz-range-picker class="inline-flex items-center rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[8px] h-[38px] outline-none placeholder:text-light placeholder:font-normal text-theme-gray dark:text-white/60 w-full mb-[15px]" nzDisabled></nz-range-picker>
  `,
  styles: [
    `
      :host ::ng-deep .ant-picker-separator{
        @apply text-dark dark:text-white/[.87]
      }
      :host ::ng-deep .ant-picker.ant-picker-disabled .ant-picker-suffix{
        @apply text-dark dark:text-white/[.87] opacity-[.4]
      }
    `
  ]
})
export class NzDemoDatePickerDisabledComponent {}

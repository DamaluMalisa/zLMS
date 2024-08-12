import { Component } from '@angular/core';
import endOfMonth from 'date-fns/endOfMonth';

@Component({
  selector: 'nz-demo-date-picker-presetted-ranges',
  template: `
    <nz-range-picker class="inline-flex items-center rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[8px] h-[38px] outline-none placeholder:text-light placeholder:font-normal text-theme-gray dark:text-white/60 w-full mb-[15px]" [nzRanges]="ranges1" ngModel (ngModelChange)="onChange($event)"></nz-range-picker>
    <br />
    <nz-range-picker
    class="inline-flex items-center rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[8px] h-[38px] outline-none placeholder:text-light placeholder:font-normal text-theme-gray dark:text-white/60 w-full mb-[15px]"
      [nzRanges]="ranges1"
      nzShowTime
      nzFormat="yyyy/MM/dd HH:mm:ss"
      ngModel
      (ngModelChange)="onChange($event)"
    ></nz-range-picker>
  `,
  styles: [
    `
      :host ::ng-deep .ant-picker-separator{
        @apply text-dark dark:text-white/[.87]
      }
    `
  ]
})
export class NzDemoDatePickerPresettedRangesComponent {
  ranges1 = { Today: [new Date(), new Date()], 'This Month': [new Date(), endOfMonth(new Date())] };
  ranges2 = { Today: [new Date(), new Date()], 'This Month': [new Date(), endOfMonth(new Date())] };

  onChange(result: Date[]): void {
    console.log('From: ', result[0], ', to: ', result[1]);
  }
}

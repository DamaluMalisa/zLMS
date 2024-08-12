import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-date-picker-start-end',
  template: `
    <nz-date-picker
      class="inline-flex items-center rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[8px] h-[38px] outline-none placeholder:text-light placeholder:font-normal text-theme-gray dark:text-white/60 w-full mb-[15px]"
      [nzDisabledDate]="disabledStartDate"
      nzShowTime
      nzFormat="yyyy-MM-dd HH:mm:ss"
      [(ngModel)]="startValue"
      nzPlaceHolder="Start"
      (ngModelChange)="onStartChange($event)"
      (nzOnOpenChange)="handleStartOpenChange($event)"
    >
    </nz-date-picker>
    <nz-date-picker
      class="inline-flex items-center rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[8px] h-[38px] outline-none placeholder:text-light placeholder:font-normal text-theme-gray dark:text-white/60 w-full mb-[15px]"
      [nzDisabledDate]="disabledEndDate"
      nzShowTime
      nzFormat="yyyy-MM-dd HH:mm:ss"
      [(ngModel)]="endValue"
      nzPlaceHolder="End"
      [nzOpen]="endOpen"
      (ngModelChange)="onEndChange($event)"
      (nzOnOpenChange)="handleEndOpenChange($event)"
    >
    </nz-date-picker>
  `,
  styles: [
    `
      :host ::ng-deep .ant-picker-separator{
        @apply text-dark dark:text-white/[.87]
      }
    `
  ]
})
export class NzDemoDatePickerStartEndComponent {
  startValue: Date | null = null;
  endValue: Date | null = null;
  endOpen = false;

  disabledStartDate = (startValue: Date): boolean => {
    if (!startValue || !this.endValue) {
      return false;
    }
    return startValue.getTime() > this.endValue.getTime();
  };

  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.startValue) {
      return false;
    }
    return endValue.getTime() <= this.startValue.getTime();
  };

  onStartChange(date: Date): void {
    this.startValue = date;
  }

  onEndChange(date: Date): void {
    this.endValue = date;
  }

  handleStartOpenChange(open: boolean): void {
    if (!open) {
      this.endOpen = true;
    }
    console.log('handleStartOpenChange', open, this.endOpen);
  }

  handleEndOpenChange(open: boolean): void {
    console.log(open);
    this.endOpen = open;
  }
}

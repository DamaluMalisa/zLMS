import { Component } from '@angular/core';
import getISOWeek from 'date-fns/getISOWeek';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'nz-demo-date-picker-basic',
  template: `
    <nz-date-picker class="inline-flex items-center rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[8px] h-[38px] outline-none placeholder:text-light placeholder:font-normal text-theme-gray dark:text-white/60 w-full mb-[15px]" [(ngModel)]="date" (ngModelChange)="onChange($event)"></nz-date-picker>
    <br />
    <nz-month-picker class="inline-flex items-center rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[8px] h-[38px] outline-none placeholder:text-light placeholder:font-normal text-theme-gray dark:text-white/60 w-full mb-[15px]" [(ngModel)]="date" (ngModelChange)="onChange($event)" nzPlaceHolder="Select month"></nz-month-picker>
    <br />
    <nz-year-picker class="inline-flex items-center rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[8px] h-[38px] outline-none placeholder:text-light placeholder:font-normal text-theme-gray dark:text-white/60 w-full mb-[15px]" [(ngModel)]="date" (ngModelChange)="onChange($event)" nzPlaceHolder="Select year"></nz-year-picker>
    <br />
    <nz-range-picker class="inline-flex items-center rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[8px] h-[38px] outline-none placeholder:text-light placeholder:font-normal text-theme-gray dark:text-white/60 w-full mb-[15px]" [(ngModel)]="dateRange" (ngModelChange)="onChange($event)"></nz-range-picker>
    <br />
    <nz-week-picker class="inline-flex items-center rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[8px] h-[38px] outline-none placeholder:text-light placeholder:font-normal text-theme-gray dark:text-white/60 w-full mb-[15px]" [(ngModel)]="date" (ngModelChange)="getWeek($event)" nzPlaceHolder="Select week"></nz-week-picker>
    <br />
    <button class="bg-primary border-primary hover:bg-primary-hbr rounded-4 text-white px-[20px] h-[40px] inline-flex items-center justify-center text-[15px]" nz-button nzType="default" (click)="changeLanguage()">Switch language for all pickers</button>
  `,
  styles: [
    `
      :host ::ng-deep .ant-picker-separator{
        @apply text-dark dark:text-white/[.87]
      }
    `
  ]
})
export class NzDemoDatePickerBasicComponent {
  date = null;
  dateRange = [];
  isEnglish = false;

  constructor(private i18n: NzI18nService) {}

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date): void {
    console.log('week: ', getISOWeek(result));
  }

  changeLanguage(): void {
    this.i18n.setLocale(this.isEnglish ? zh_CN : en_US);
    this.isEnglish = !this.isEnglish;
  }
}

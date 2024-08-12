import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-input-basic',
  template: `
    <input nz-input class=" w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] h-[46px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60
    " placeholder="Basic usage" [(ngModel)]="value" />
    <br />
    <br />
    <input nz-input class=" w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] h-[46px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60
    " placeholder="Basic usage" [(ngModel)]="value" [disabled]="true" />
  `
})
export class NzDemoInputBasicComponent {
  value: string;
}

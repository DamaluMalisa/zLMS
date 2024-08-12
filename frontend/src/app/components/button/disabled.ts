import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-button-disabled',
  template: `
    <button class="capitalize bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button nzType="primary">Primary</button>
    <button class="capitalize bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button nzType="primary" disabled>Primary(disabled)</button>
    <br>
    <button class="text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn gap-[8px] dark:text-white/[.87] dark:hover:text-primary dark:bg-transparent" nz-button nzType="default">Default</button>
    <button class="text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn gap-[8px] dark:text-white/[.87] dark:hover:text-primary dark:bg-transparent" nz-button nzType="default" disabled>Default(disabled)</button>

  `,
  styles: [
    `
      [nz-button] {
        margin-right: 8px;
        margin-bottom: 12px;
      }
    `
  ]
})
export class NzDemoButtonDisabledComponent {}

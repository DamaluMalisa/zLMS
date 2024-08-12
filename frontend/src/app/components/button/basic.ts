import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-button-basic',
  template: `
    <div class="inline-flex flex-wrap gap-[10px] items-center">
    <button nz-button class="capitalize bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">Primary</button>
    <button nz-button class="capitalize bg-secondary hover:bg-primary-hbr border-solid border-1 border-secondary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">secondary</button>
    <button nz-button class="capitalize bg-success hover:bg-primary-hbr border-solid border-1 border-success text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">success</button>
    <button nz-button class="capitalize bg-info hover:bg-primary-hbr border-solid border-1 border-info text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">info</button>
    <button nz-button class="capitalize bg-warning hover:bg-primary-hbr border-solid border-1 border-warning text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">warning</button>
    <button nz-button class="capitalize bg-danger hover:bg-primary-hbr border-solid border-1 border-danger text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">danger</button>
    <button nz-button class="capitalize bg-dark hover:bg-primary-hbr border-solid border-1 border-dark text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">dark</button>
    <button nz-button class="capitalize bg-theme-gray hover:bg-gray-hbr border-solid border-1 border-theme-gray text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">gray</button>
    <button nz-button class="capitalize bg-light hover:bg-light-hbr border-solid border-1 border-light text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">light</button>
    <button nz-button class="capitalize bg-light-extra hover:bg-light-hbr-extra border-solid border-1 border-light-extra text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">Extra Light</button>
    </div>
  `,
  styles: [
    `
    `
  ]
})
export class NzDemoButtonBasicComponent {}

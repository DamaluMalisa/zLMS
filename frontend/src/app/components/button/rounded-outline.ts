import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-button-rounded-outline',
  template: `
<div class="inline-flex flex-wrap gap-[10px] items-center">
  <button nz-button
    class="capitalize hover:bg-primary-hbr border-solid border-1 border-primary text-primary bg-transparent hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">Primary</button>
  <button nz-button
    class="capitalize hover:bg-secondary-hbr border-solid border-1 border-secondary text-secondary bg-transparent hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">secondary</button>
  <button nz-button
    class="capitalize hover:bg-success-hbr border-solid border-1 border-success text-success bg-transparent hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">success</button>
  <button nz-button
    class="capitalize hover:bg-info-hbr border-solid border-1 border-info text-info bg-transparent hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">info</button>
  <button nz-button
    class="capitalize hover:bg-warning-hbr border-solid border-1 border-warning text-warning bg-transparent hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">warning</button>
  <button nz-button
    class="capitalize hover:bg-danger-hbr border-solid border-1 border-danger text-danger bg-transparent hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">danger</button>
  <button nz-button
    class="capitalize hover:bg-dark-hbr border-solid border-1 border-dark text-dark bg-transparent hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">dark</button>
  <button nz-button
    class="capitalize hover:bg-theme-gray/90 border-solid border-1 border-theme-gray text-theme-gray bg-transparent hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">gray</button>
  <button nz-button
    class="capitalize hover:bg-light-hbr border-solid border-1 border-light text-light bg-transparent hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">light</button>
  <button nz-button
    class="capitalize hover:bg-light-extra/90 border-solid border-1 border-light-extra text-light-extra bg-transparent hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">Extra
    Light</button>
  <button nz-button
    class="capitalize border-dashed border-1 border-light-extra text-[14px] text-dark bg-transparent dark:hover:bg-white  dark:text-white/[.87] dark:hover:text-dark dark:hover:border-white/10 hover:text-dark font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">Dashed</button>
</div>
  `,
  styles: [
    `
    `
  ]
})
export class NzDemoButtonRoundedOutlineComponent {}

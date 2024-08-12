import { Component } from '@angular/core';

@Component({
selector: 'nz-demo-button-light',
template: `
<div class="inline-flex flex-wrap gap-[10px] items-center">
  <button nz-button
    class="capitalize bg-primary/10 hover:bg-primary-hbr border-none text-primary hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">Primary</button>
  <button nz-button
    class="capitalize bg-secondary/10 hover:bg-secondary-hbr border-none text-secondary hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">secondary</button>
  <button nz-button
    class="capitalize bg-success/10 hover:bg-success-hbr border-none text-success hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">success</button>
  <button nz-button
    class="capitalize bg-info/10 hover:bg-info-hbr border-none text-info hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">info</button>
  <button nz-button
    class="capitalize bg-warning/10 hover:bg-warning-hbr border-none text-warning hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">warning</button>
  <button nz-button
    class="capitalize bg-danger/10 hover:bg-danger-hbr border-none text-danger hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">danger</button>
  <button nz-button
    class="capitalize bg-dark/10 hover:bg-dark-hbr border-none text-dark hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">dark</button>
  <button nz-button
    class="capitalize bg-theme-gray/10 hover:bg-theme-gray border-none text-theme-gray hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">gray</button>
  <button nz-button
    class="capitalize bg-light/10 hover:bg-light-hbr border-none text-light hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">light</button>
  <button nz-button
    class="capitalize bg-light-extra/10 hover:bg-light-extra border-none text-light-extra hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">Extra
    Light</button>
</div>

`
})
export class NzDemoButtonLightComponent {}

import { Component } from '@angular/core';

@Component({
selector: 'nz-demo-button-size',
template: `
<div class="flex flex-wrap items-center gap-x-[10px] max-md:gap-y-[40px] gap-y-[20px] w-full">
  <button
    class="bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[32px] shadow-btn">
    Extra Small
  </button>
  <button
    class="bg-secondary hover:bg-secondary-hbr border-solid border-1 border-secondary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[38px] shadow-btn"
    raised>
    Small
  </button>
  <button
    class="bg-success hover:bg-success-hbr border-solid border-1 border-success text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn"
    raised>
    Normal
  </button>
  <button
    class="bg-info hover:bg-info-hbr border-solid border-1 border-info text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[50px] shadow-btn"
    raised>
    Large button
  </button>
</div>
`
})
export class NzDemoButtonSizeComponent {
size = 'large';
}

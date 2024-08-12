import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-button-ghost',
  template: `
    <div class="flex flex-wrap gap-x-[10px] gap-y-[10px] bg-gradient-to-r from-primary to-secondary p-[25px] rounded-b-[10px]" >
      <button class="hover:bg-white/40 text-white dark:text-white/[.87] hover:border-white/40 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button nzGhost>Primary</button>
      <button class="hover:bg-white/40 text-white dark:text-white/[.87] hover:border-white/40 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button nzGhost>Default</button>
      <button class="hover:bg-white/40 text-white dark:text-white/[.87] hover:border-white/40 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button nzGhost>Dashed</button>
    </div>
  `
})
export class NzDemoButtonGhostComponent {}

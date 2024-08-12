import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-badge-link',
  template: `
    <a>
      <nz-badge [nzCount]="5">
        <a class="w-[42px] h-[42px] rounded-4 bg-[#f4f5f7] dark:bg-white/10 inline-block align-middle"></a>
      </nz-badge>
    </a>
  `
})
export class NzDemoBadgeLinkComponent {}

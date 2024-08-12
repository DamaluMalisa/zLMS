import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-badge-basic',
  template: `
    <nz-badge [nzCount]="5">
      <a class="w-[42px] h-[42px] rounded-4 bg-[#f4f5f7] dark:bg-white/10 inline-block align-middle"></a>
    </nz-badge>
    <nz-badge [nzCount]="0" nzShowZero>
      <a class="w-[42px] h-[42px] rounded-4 bg-[#f4f5f7] dark:bg-white/10 inline-block align-middle"></a>
    </nz-badge>
    <nz-badge [nzCount]="iconTemplate">
      <a class="w-[42px] h-[42px] rounded-4 bg-[#f4f5f7] dark:bg-white/10 inline-block align-middle"></a>
    </nz-badge>
    <ng-template #iconTemplate>
      <i nz-icon nzType="clock-circle" class="ant-scroll-number-custom-component" style="color: #f5222d"></i>
    </ng-template>
  `,
  styles: [
    `
    nz-badge {
      @apply ltr:mr-[20px] rtl:ml-[20px];
    }
    `
  ]
})
export class NzDemoBadgeBasicComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-progress-line-mini',
  template: `
    <div style="width: 170px;">
      <nz-progress class="text-primary" [nzPercent]="30" nzSize="small"></nz-progress>
      <nz-progress class="text-primary" [nzPercent]="50" nzSize="small" nzStatus="active"></nz-progress>
      <nz-progress class="text-danger" [nzPercent]="70" nzSize="small" nzStatus="exception"></nz-progress>
      <nz-progress class="text-success" [nzPercent]="100" nzSize="small"></nz-progress>
      <nz-progress class="text-primary" [nzPercent]="50" nzSize="small" [nzShowInfo]="false"></nz-progress>
    </div>
  `,
   styles: [`
   :host ::ng-deep nz-progress .ant-progress{
     @apply text-current;
   }
   :host ::ng-deep nz-progress .ant-progress-bg{
     @apply bg-current;
   }
 `]
})
export class NzDemoProgressLineMiniComponent {}

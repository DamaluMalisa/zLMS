import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-progress-circle',
  template: `
    <nz-progress class="text-primary" [nzPercent]="75" nzType="circle"></nz-progress>
    <nz-progress class="text-danger" [nzPercent]="70" nzType="circle" nzStatus="exception"></nz-progress>
    <nz-progress class="text-success" [nzPercent]="100" nzType="circle"></nz-progress>
  `,
  styles: [
    `
      nz-progress {
        @apply mr-auto me-[8px] mb-[8px] inline-block;
      }
      :host ::ng-deep nz-progress .ant-progress{
        @apply text-current;
      }
      :host ::ng-deep nz-progress .ant-progress-bg{
        @apply bg-current;
      }
    `
  ]
})
export class NzDemoProgressCircleComponent {}

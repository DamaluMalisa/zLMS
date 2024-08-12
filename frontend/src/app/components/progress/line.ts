import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-progress-line',
  template: `
    <nz-progress class="mb-[15px] flex items-center text-primary" [nzPercent]="30"></nz-progress>
    <nz-progress class="mb-[15px] flex items-center text-primary" [nzPercent]="50" nzStatus="active"></nz-progress>
    <nz-progress class="mb-[15px] flex items-center text-danger" [nzPercent]="70" nzStatus="exception"></nz-progress>
    <nz-progress class="mb-[15px] flex items-center text-success" [nzPercent]="100"></nz-progress>
    <nz-progress class="text-primary" [nzPercent]="50" [nzShowInfo]="false"></nz-progress>
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
export class NzDemoProgressLineComponent {}

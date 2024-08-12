import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nz-demo-progress-gradient',
  template: `
    <nz-progress [nzPercent]="99.9" [nzStrokeColor]="{ '0%': '#108ee9', '100%': '#87d068' }"></nz-progress>
    <nz-progress [nzPercent]="99.9" [nzStrokeColor]="{ '0%': '#108ee9', '100%': '#87d068' }" nzStatus="active"></nz-progress>
    <nz-progress nzType="circle" [nzPercent]="90" [nzStrokeColor]="{ '0%': '#108ee9', '50%': '#2db7f5', '100%': '#87d068' }"></nz-progress>
    <nz-progress nzType="dashboard" [nzPercent]="100" [nzStrokeColor]="{ '0%': '#108ee9', '100%': '#87d068' }"></nz-progress>
  `,
  styles: [
    `
      .ant-progress {
        @apply mr-auto me-[8px] mb-[8px] inline-block;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class NzDemoProgressGradientComponent {}

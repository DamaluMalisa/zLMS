import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-progress-format',
  template: `
    <nz-progress [nzPercent]="75" nzType="circle" [nzFormat]="formatOne"></nz-progress>
    <nz-progress [nzPercent]="100" nzType="circle" [nzFormat]="formatTwo"></nz-progress>
  `,
  styles: [
    `
      nz-progress {
        @apply mr-auto me-[8px] mb-[8px] inline-block;
      }
    `
  ]
})
export class NzDemoProgressFormatComponent {
  formatOne = (percent: number) => `${percent} Days`;
  formatTwo = () => `Done`;
}

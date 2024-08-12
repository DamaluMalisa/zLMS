import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-card-grid-card',
  template: `
    <nz-card class="dark:bg-white/10 dark:text-white/[.87] dark:border-white/10" nzTitle="Cart Title">
      <div nz-card-grid [ngStyle]="gridStyle">Content</div>
      <div nz-card-grid [ngStyle]="gridStyle">Content</div>
      <div nz-card-grid [ngStyle]="gridStyle">Content</div>
      <div nz-card-grid [ngStyle]="gridStyle">Content</div>
      <div nz-card-grid [ngStyle]="gridStyle">Content</div>
      <div nz-card-grid [ngStyle]="gridStyle">Content</div>
      <div nz-card-grid [ngStyle]="gridStyle">Content</div>
    </nz-card>
  `,
  styles: [
    `
    :host ::ng-deep .ant-card{
      @apply rounded-6;
    }
    :host ::ng-deep .ant-card .ant-card-head{
      @apply dark:text-white/[.87] dark:border-white/10 px-[25px] rounded-t-6;
    }
    :host ::ng-deep .ant-card .ant-card-extra{
      @apply  dark:text-white/[.87] ;
    }
   `
  ]
})
export class NzDemoCardGridCardComponent {
  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };
}

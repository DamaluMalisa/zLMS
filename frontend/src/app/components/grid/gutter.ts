import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-grid-gutter',
  template: `
    <nz-divider nzOrientation="left" nzText="Horizontal"></nz-divider>
    <div nz-row [nzGutter]="16">
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
    </div>
    <nz-divider nzOrientation="left" nzText="Responsive"></nz-divider>
    <div nz-row [nzGutter]="{ xs: 8, sm: 16, md: 24, lg: 32 }">
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
    </div>
    <nz-divider nzOrientation="left" nzText="Vertical"></nz-divider>
    <div nz-row [nzGutter]="[16, 24]">
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
    </div>
  `,
  styles: [
    `
    .inner-box {
        @apply bg-primary dark:bg-primary h-[50px] leading-[50px] text-center text-white;
    }
    :host ::ng-deep .ant-divider-inner-text{
      @apply text-dark dark:text-white/[.87];
    }
    :host ::ng-deep .ant-divider-horizontal:after,
    :host ::ng-deep .ant-divider-horizontal:before{
      @apply border-regular dark:border-white/[.12];
    }

    `
  ]
})
export class NzDemoGridGutterComponent {}

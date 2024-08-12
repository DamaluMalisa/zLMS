import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-grid-flex',
  template: `
    <div>
      <nz-divider nzOrientation="left" nzText="sub-element align left"></nz-divider>
      <div nz-row nzJustify="start">
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
      </div>
      <nz-divider nzOrientation="left" nzText="sub-element align center"></nz-divider>
      <div nz-row nzJustify="center">
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
      </div>
      <nz-divider nzOrientation="left" nzText="sub-element align right"></nz-divider>
      <div nz-row nzJustify="end">
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
      </div>
      <p></p>
      <nz-divider nzOrientation="left" nzText="sub-element monospaced arrangement"></nz-divider>
      <div nz-row nzJustify="space-between">
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
      </div>
      <nz-divider nzOrientation="left" nzText="sub-element align full"></nz-divider>
      <div nz-row nzJustify="space-around">
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
      </div>
    </div>
  `,
  styles: [`
  :host ::ng-deep .ant-row>div:not(.gutter-row), .ant-row>div:not(.gutter-row){
    @apply bg-primary/80 h-[50px] leading-[50px] text-center text-dark;
  }
  :host ::ng-deep .ant-row>div:not(.gutter-row):nth-child(2n + 1),
  :host ::ng-deep .ant-row>div:not(.gutter-row):nth-child(2n + 1){
    @apply bg-primary dark:bg-primary h-[50px] leading-[50px] text-center text-white;
  }
  :host ::ng-deep .ant-divider-inner-text{
    @apply text-dark dark:text-white/[.87] capitalize;
  }
  :host ::ng-deep .ant-divider-horizontal:after,
  :host ::ng-deep .ant-divider-horizontal:before{
    @apply border-regular dark:border-white/[.12];
  }
`]
})
export class NzDemoGridFlexComponent {}

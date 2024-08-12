import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-grid-basic',
  template: `
    <div nz-row class="mb-[25px]">
      <div nz-col nzSpan="12">col-12</div>
      <div nz-col nzSpan="12">col-12</div>
    </div>
    <div nz-row class="mb-[25px]">
      <div nz-col nzSpan="8">col-8</div>
      <div nz-col nzSpan="8">col-8</div>
      <div nz-col nzSpan="8">col-8</div>
    </div>
    <div nz-row class="mb-[25px]">
      <div nz-col nzSpan="6">col-6</div>
      <div nz-col nzSpan="6">col-6</div>
      <div nz-col nzSpan="6">col-6</div>
      <div nz-col nzSpan="6">col-6</div>
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
  `]
})
export class NzDemoGridBasicComponent {}

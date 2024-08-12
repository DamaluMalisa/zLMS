import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-grid-sort',
  template: `
    <div nz-row>
      <div nz-col [nzSpan]="18" [nzPush]="6">
        col-18 col-push-6
      </div>
      <div nz-col [nzSpan]="6" [nzPull]="18">
        col-6 col-pull-18
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
 `]
})
export class NzDemoGridSortComponent {}

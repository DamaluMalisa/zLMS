import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-card-in-column',
  template: `
    <div class="p-[30px] bg-normal dark:bg-white/10">
      <div nz-row [nzGutter]="8">
        <div nz-col [nzSpan]="8">
          <nz-card class="dark:bg-white/10 dark:text-white/[.87] dark:border-white/10" nzTitle="Card title">
            <p class="dark:text-white/60 text-theme-gray">Card content</p>
          </nz-card>
        </div>
        <div nz-col [nzSpan]="8">
          <nz-card class="dark:bg-white/10 dark:text-white/[.87] dark:border-white/10" nzTitle="Card title">
            <p class="dark:text-white/60 text-theme-gray">Card content</p>
          </nz-card>
        </div>
        <div nz-col [nzSpan]="8">
          <nz-card class="dark:bg-white/10 dark:text-white/[.87] dark:border-white/10" nzTitle="Card title">
            <p class="dark:text-white/60 text-theme-gray">Card content</p>
          </nz-card>
        </div>
      </div>
    </div>
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
export class NzDemoCardInColumnComponent {}

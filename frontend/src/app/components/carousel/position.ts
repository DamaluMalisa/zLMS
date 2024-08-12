import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-carousel-position',
  template: `
    <nz-radio-group class="mb-[15px]" [(ngModel)]="dotPosition">
      <label class="px-[20px] py-[5px] h-auto ltr:rounded-l-6 rtl:rounded-r-6" nz-radio-button nzValue="bottom">Bottom</label>
      <label class="px-[20px] py-[5px] h-auto" nz-radio-button nzValue="top">Top</label>
      <label class="px-[20px] py-[5px] h-auto" nz-radio-button nzValue="left">Left</label>
      <label class="px-[20px] py-[5px] h-auto ltr:rounded-r-6 rtl:rounded-l-6 rtl:before:hidden" nz-radio-button nzValue="right">Right</label>
    </nz-radio-group>
    <nz-carousel [nzDotPosition]="dotPosition">
      <div class="text-center h-[160px] leading-[160px] bg-[#747474] dark:bg-white/10 text-white overflow-hidden rounded-4" nz-carousel-content *ngFor="let index of array">
        <h3 class="text-white dark:text-white/[.87] mb-0">{{ index }}</h3>
      </div>
    </nz-carousel>
  `,
  styles: [`
    :host ::ng-deep nz-radio-group label{
      @apply dark:bg-white/10 dark:border-white/10 dark:text-white/[.87];
    }
    :host ::ng-deep nz-radio-group label.ant-radio-button-wrapper-checked{
      @apply dark:bg-primary dark:border-primary dark:text-white;
    }
  `]
})
export class NzDemoCarouselPositionComponent {
  array = [1, 2, 3, 4];
  dotPosition = 'bottom';
}

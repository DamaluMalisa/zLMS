import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-carousel-fade',
  template: `
    <nz-carousel [nzEffect]="'fade'">
      <div nz-carousel-content class="text-center h-[160px] leading-[160px] bg-[#747474] dark:bg-white/10 text-white overflow-hidden rounded-4" *ngFor="let index of array">
        <h3  class="text-white dark:text-white/[.87] mb-0">{{ index }}</h3>
      </div>
    </nz-carousel>
  `,
})
export class NzDemoCarouselFadeComponent {
  array = [1, 2, 3, 4];
}

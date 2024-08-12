import { Component } from '@angular/core';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'swiper-banner',
  template:`
    <!-- skeleton -->
    <ng-template #loadingSkeleton>
      <nz-skeleton class="bg-white dark:bg-white/10 rounded-6 p-[30px] pt-[15px]" [nzShape]="circle" [nzAvatar]="true"  [nzActive]="true"
        [nzParagraph]="{ rows: 4 }"></nz-skeleton>
    </ng-template>
  <!-- skeleton -->
  <ng-container *ngIf="showContent; else loadingSkeleton">
    <div class="relative pb-16 bg-primary pt-14 rounded-10" dir="ltr">
      <swiper-container thumbs-swiper=".banner-swiper" slidesPerView="1" speed="500" loop="true" cssMode="true" pagination="true" allowTouchMove="true" grabCursor="true">
        <swiper-slide>
          <div class="flex flex-col items-center justify-center">
            <div class="banner-single__img">
              <img src="../../../assets/images/banners/slider-one.png" alt="slider-one">
            </div>
            <div class="text-center mt-7">
              <h3 class="mb-2 text-2xl font-semibold text-white dark:text-white/[.87]">Achievements 1</h3>
              <p class="mb-10 font-normal text-white dark:text-white/[.87] text-15">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex flex-col items-center justify-center">
            <div class="banner-single__img">
              <img src="../../../assets/images/banners/slider-one.png" alt="slider-one">
            </div>
            <div class="text-center mt-7">
              <h3 class="mb-2 text-2xl font-semibold text-white dark:text-white/[.87]">Achievements 2</h3>
              <p class="mb-10 font-normal text-white dark:text-white/[.87] text-15">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex flex-col items-center justify-center">
            <div class="banner-single__img">
              <img src="../../../assets/images/banners/slider-one.png" alt="slider-one">
            </div>
            <div class="text-center mt-7">
              <h3 class="mb-2 text-2xl font-semibold text-white dark:text-white/[.87]">Achievements 3</h3>
              <p class="mb-10 font-normal text-white dark:text-white/[.87] text-15">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </ng-container>
  `,
})

export class SliderBannerComponent {
  isLoading = true;
  showContent = false;

  ngOnInit() {
    // Simulate loading time
    this.loadData();
  }

  loadData() {
    // Simulate an asynchronous data loading operation
    setTimeout(() => {
      this.isLoading = false;
      this.showContent = true;
    }, 500);
  }
}

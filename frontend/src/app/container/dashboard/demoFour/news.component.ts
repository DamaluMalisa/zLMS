import { Component } from '@angular/core';

@Component({
  selector: 'nz-news',
  template: `
    <div nz-row nzGutter="25">
      <div nz-col nzXs="12" class="mb-[25px]">
        <div class="py-[22px] text-center rounded-10 bg-white dark:bg-white/10">
          <div class="inline-flex flex-col items-center justify-center">
            <div class="bg-primary/10 text-primary w-[60px] h-[60px] rounded-10 flex items-center justify-center">
            <svg-icon class="w-[30px] h-[30px] [&>svg]:w-full [&>svg]:h-full" src="../../../../assets/images/svg/unicons-line/suitcase.svg"></svg-icon>
            </div>
            <div class="flex items-center flex-wrap">
              <div>
                <p class="mt-[11px] font-[15px] text-theme-gray dark:text-white/60 mb-[4px]">Total Products </p>
                <h1 class="text-dark dark:text-white/[.87] text-[30px] font-semibold">21K</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div nz-col nzXs="12" class="mb-[25px]">
        <div class="py-[22px] text-center rounded-10 bg-white dark:bg-white/10">
            <div class="inline-flex flex-col items-center justify-center">
              <div class="bg-info/10 text-info w-[60px] h-[60px] rounded-10 flex items-center justify-center">
              <svg-icon class="w-[30px] h-[30px] [&>svg]:w-full [&>svg]:h-full" src="../../../../assets/images/svg/unicons-line/award.svg"></svg-icon>
              </div>
              <div class="flex items-center flex-wrap">
                <div>
                  <p class="mt-[11px] font-[15px] text-theme-gray dark:text-white/60 mb-[4px]">Total Awards</p>
                  <h1 class="text-dark dark:text-white/[.87] text-[30px] font-semibold">15K</h1>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div nz-col nzXs="24">
      <div class="md:min-h-[260] md:max-h-full bg-white dark:bg-white/10 relative rounded-10">
          <div class="flex justify-between">
            <div class=" py-[25px] ps-[30px]">
              <h4 class="text-[20px] font-semibold text-dark dark:text-white/[.87]">Subscribe to our newsletter</h4>
              <p class="text-[16px] leading-[1.6875] font-normal mt-[5px] text-theme-gray dark:text-white/60">We notify you once any post is published</p>
              <button nz-button class="h-[38px] text-[14px] font-medium rounded-6 inline-flex items-center justify-center duration-200 transition-all hover:bg-primary-hbr bg-primary px-[20px] border-primary text-white mt-[15px]">Subscribe</button>
            </div>
            <div class="h-full flex items-center justify-center">
              <img src="assets/images/3d-message.png" alt="img">
            </div>
          </div>
      </div>
      </div>
    </div>
  `
})

export class NewsComponent  {
}

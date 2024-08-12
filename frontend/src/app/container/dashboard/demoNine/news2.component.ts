import { Component } from '@angular/core';

@Component({
  selector: 'nz-news2',
  template: `
    <div nz-row nzGutter="25">
      <div nz-col nzXs="12" class="mb-[25px]">
        <div class="py-[22px] text-center rounded-10 bg-white dark:bg-white/10">
          <div class="inline-flex flex-col items-center justify-center">
            <div class="bg-primary/10 text-primary w-[60px] h-[60px] rounded-10 flex items-center justify-center">
            <svg-icon class="w-[30px] h-[30px] [&>svg]:w-full [&>svg]:h-full" src="assets/images/svg/unicons-line/suitcase.svg"></svg-icon>
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
              <svg-icon class="w-[30px] h-[30px] [&>svg]:w-full [&>svg]:h-full" src="assets/images/svg/unicons-line/award.svg"></svg-icon>
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
        <div class="px-[25px] py-[34px] bg-white dark:bg-white/10 relative rounded-10">
            <div class="flex items-center gap-[15px] max-ssm:flex-col max-ssm:text-center">
              <div class="h-full flex items-center justify-center">
                <img src="assets/images/message.png" alt="img">
              </div>
              <div>
                <h4 class="text-[24px] leading-6 font-semibold text-dark dark:text-white/[.87]">Subscribe to our newsletter</h4>
                <p class="text-[15px] leading-[1.6875] font-normal mt-[5px] text-theme-gray dark:text-white/60">Sed ut perspiciatis unde omnis iste natussit</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  `
})

export class News2Component  {
}

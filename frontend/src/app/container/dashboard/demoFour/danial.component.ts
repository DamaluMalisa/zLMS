import { Component  } from '@angular/core';

@Component({
  selector: 'nz-danial',
  template: `
    <div class="md:max-h-full 2xl:min-h-[377px] bg-dark dark:bg-white/10 relative rounded-10 z-[1]">
      <div class="absolute bottom-0 end-0 z-[-1]">
        <img class="max-w-full" src="assets/images/banners/glass-trophy.png" alt="img">
      </div>
      <div class="flex justify-center">
        <div class="px-[30px] py-[55px] flex-[1_1_auto]">
          <h1 class="text-white dark:text-white/[.87] text-[30px] font-semibold leading-[1.2666666667]">Congratulations Danial!</h1>
          <p class="mt-[14px] mb-[22px] text-[16px] text-white/[.9] leading-[1.6875]">Best Seller on the last month.</p>
          <button nz-button class="bg-theme-gray h-[44px] text-[15px] font-medium text-white capitalize inline-flex items-center justify-center rounded-4 border-theme-gray px-[20px]">Learn More</button>
        </div>
      </div>
    </div>
  `
})

export class DanialComponent  {

}

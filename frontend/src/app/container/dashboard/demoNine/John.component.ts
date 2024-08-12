import { Component  } from '@angular/core';

@Component({
  selector: 'nz-john',
  template: `
    <div class="md:min-h-[350px]  relative rounded-10 z-[1] bg-gradient-to-tr from-[#5840ff] to-[#00e4ec]">
      <div class="absolute bottom-0 end-0 z-[-1]">
        <img class="max-w-full max-sm:opacity-[.6]" src="assets/images/banners/congrats.png" alt="img">
      </div>
      <div class="flex justify-center">
        <div class="px-[30px] py-[30px] flex-[1_1_auto]">
          <h1 class="text-white dark:text-white/[.87] text-[30px] font-bold leading-[1.2666666667]">Congratulations John!</h1>
          <p class="mt-[14px] mb-[22px] text-[16px] text-white opacity-[.7] leading-[1.6875]">Best Seller on the last month.</p>
          <button nz-button class="bg-white border-white h-[44px] text-[15px] font-medium text-secondary capitalize inline-flex items-center justify-center rounded-4 px-[20px]">Learn More</button>
        </div>
      </div>
    </div>
  `
})

export class JohnComponent  {

}

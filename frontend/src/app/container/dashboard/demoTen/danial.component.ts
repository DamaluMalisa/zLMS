import { Component  } from '@angular/core';

@Component({
  selector: 'nz-danial-full2',
  template: `
    <div class="2xl:min-h-[258px] bg-[#212242] relative rounded-10 z-[1] xl:px-[50px] px-[30px]">
      <div nz-row class="lg:text-start text-center max-lg:justify-center items-center">
        <div nz-col nzLg="12">
          <div class="flex justify-center">
            <div class="py-[55px] flex-[1_1_auto]">
              <h1 class="text-white dark:text-white/[.87] text-[30px] font-semibold leading-[1.2666666667]">Welcome To Demo Dashboard</h1>
              <p class="mt-[14px] mb-[22px] text-[16px] text-white/[.9] dark:text-white/60 leading-[1.6875]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
              <button nz-button class="bg-primary border-primary hover:bg-primary-hbr h-[50px] text-[15px] font-medium text-white capitalize inline-flex items-center justify-center rounded-4 px-[25px]">Learn More</button>
            </div>
          </div>
        </div>
        <div nz-col nzLg="12" class="flex justify-end">
          <img class="max-h-[288px] object-contain" src="assets/images/banners/welcomdashboard.png" alt="img">
        </div>
      </div>
    </div>
  `
})

export class DanialFullComponent2  {

}

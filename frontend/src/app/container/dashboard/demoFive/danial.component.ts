import { Component  } from '@angular/core';

@Component({
  selector: 'nz-danial-full',
  template: `
    <div class="2xl:min-h-[258px] bg-white dark:bg-white/10 relative rounded-10 z-[1]">
      <div nz-row class="lg:text-start text-center max-lg:justify-center items-center">
        <div nz-col nzLg="12" nzMd="16">
          <div class="flex justify-center">
            <div class="xl:px-[50px] px-[30px] py-[55px] flex-[1_1_auto]">
              <h1 class="text-dark dark:text-white/[.87] text-[30px] font-semibold leading-[1.2666666667]">Hey Danial! Welcome to the Dashboard</h1>
              <p class="mt-[14px] mb-[22px] text-[16px] text-dark/[.9] dark:text-white/60 leading-[1.6875]">There are many variations of passages of Lorem Ipsum available, ut the majority have suffered passages of Lorem Ipsum available alteration in some form</p>
              <button nz-button class="bg-primary border-primary hover:bg-primary-hbr h-[50px] text-[15px] font-medium text-white capitalize inline-flex items-center justify-center rounded-4 px-[25px]">Learn More</button>
            </div>
          </div>
        </div>
        <div nz-col nzLg="12">
          <img class="max-h-[288px] object-contain" src="assets/images/banners/active-danial.png" alt="img">
        </div>
      </div>
    </div>
  `
})

export class DanialFullComponent  {

}

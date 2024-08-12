import { Component } from '@angular/core';

@Component({
selector: 'nz-demo-button-loading',
template: `
<div class="inline-flex flex-wrap gap-[10px] items-center">
  <button nz-button
    class="capitalize bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] [&>span]:inline-flex " nzLoading>
    Default
  </button>
  <button nz-button
    class="bg-primary/10 hover:bg-primary-hbr border-none text-primary hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] [&>span]:inline-flex " nzLoading>
    Default
  </button>
  <button nz-button
    class="capitalize hover:bg-primary-hbr border-solid border-1 border-primary text-primary bg-transparent hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] [&>span]:inline-flex " nzLoading>
    Default
  </button>
  <button nz-button
    class="text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] shadow-btn dark:text-white/[.87] dark:hover:text-primary dark:bg-transparent [&>span]:inline-flex " nzLoading>
    Default
  </button>
  <button nz-button
    class="bg-light hover:bg-light-hbr border-solid border-1 border-light text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] shadow-btn [&>span]:inline-flex " nzLoading>
    Default
  </button>
  <button nz-button
    class="text-[14px] font-semibold border-none leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] shadow-btn dark:text-dark dark:hover:text-dark dark:hover:border-white/10 [&>span]:inline-flex " nzLoading>
    Default
  </button>
  <button nz-button
    class="capitalize bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] [&>span]:inline-flex " nzLoading>
    Default
  </button>
  <button nz-button
    class="bg-primary/10 hover:bg-primary-hbr border-none text-primary hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] [&>span]:inline-flex " nzLoading>
  </button>
  <button nz-button
    class="capitalize hover:bg-primary-hbr border-solid border-1 border-primary text-primary bg-transparent hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] [&>span]:inline-flex " nzLoading>
  </button>
  <button nz-button
    class="text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] shadow-btn dark:text-white/[.87] dark:hover:text-primary dark:bg-transparent [&>span]:inline-flex " nzLoading>
  </button>
  <button nz-button
    class="bg-light hover:bg-light-hbr border-solid border-1 border-light text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] shadow-btn [&>span]:inline-flex " nzLoading>
  </button>
  <button nz-button
    class="text-[14px] font-semibold border-none leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] shadow-btn dark:text-dark dark:hover:text-dark dark:hover:border-white/10 [&>span]:inline-flex " nzLoading>
  </button>
</div>
`
})
export class NzDemoButtonLoadingComponent {
  isLoadingOne = false;
  isLoadingTwo = false;

  loadOne(): void {
    this.isLoadingOne = true;
    setTimeout(() => {
      this.isLoadingOne = false;
    }, 5000);
  }

  loadTwo(): void {
    this.isLoadingTwo = true;
    setTimeout(() => {
      this.isLoadingTwo = false;
    }, 5000);
  }
}

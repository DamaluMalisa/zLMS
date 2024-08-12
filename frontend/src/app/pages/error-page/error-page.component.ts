import { Component } from '@angular/core';

@Component({
  selector: 'app-error-page',
  template:`
    <div class="flex justify-center items-center flex-col min-h-screen pb-36 px-[15px] text-center mb-[30px]">
    <svg-icon class="mx-auto mb-20 text-white"
      src="assets/images/404.svg"></svg-icon>

    <h1 class="mb-5 text-6xl font-semibold text-light-extra dark:text-white/[.87] max-ssm:text-5xl max-xs:text-4xl">404</h1>
    <p class="mb-6 text-lg font-medium text-body dark:text-white/60 max-xs:text-base">Sorry! the page you are looking for does not exist.</p>
    <a aria-current="page" class="active" href="#">
      <button class="bg-primary border-primary rounded-6 px-[20px] capitalize text-[15px] h-11 inline-flex items-center justify-center text-white" nz-button>
        <span>Return Home</span>
      </button>
    </a>
  </div>

  `,
})
export class ErrorPageComponent {

}

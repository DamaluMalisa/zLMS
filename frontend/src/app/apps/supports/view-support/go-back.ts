import { Component } from '@angular/core';

@Component({
selector: 'app-go-back',
template: `
<button [routerLink]="['/apps/supports/support']" nz-button
  class="inline-flex items-center bg-transparent border-none shadow-none text-[14px] capitalize font-medium text-theme-gray dark:text-white/60 gap-[4px] p-0 hover:text-primary group transition-all duration-200">
  <svg-icon class="w-[22px] h-[22px] text-dark dark:text-white/[.87] text-[14px] group-hover:text-primary"
    src="assets/images/svg/unicons-line/arrow-left.svg"></svg-icon>
  <span class="m-0">go back</span>
</button>
`,
})

export class GoBackComponent {

}

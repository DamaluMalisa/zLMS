import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-button-multiple',
  template: `
    <button class="capitalize bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button nzType="primary">primary</button>
    <button class="capitalize text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn gap-[8px] dark:text-white/[.87] dark:hover:text-primary dark:bg-transparent" nz-button nzType="default">secondary</button>
    <button class="capitalize text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn dark:text-white/[.87] dark:hover:text-primary dark:bg-transparent [&>span]:inline-flex" nz-button nz-dropdown [nzDropdownMenu]="menu">Actions<i nz-icon nzType="down"></i></button>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul class="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4 capitalize" nz-menu>
        <li class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87]" nz-menu-item>
          export to csv
        </li>
        <li class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87]" nz-menu-item>
        export to xml
        </li>
        <li class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87]" nz-menu-item>
        export to drive
        </li>
      </ul>
    </nz-dropdown-menu>
  `,
  styles: [
    `
      [nz-button] {
        margin-right: 8px;
        margin-bottom: 12px;
      }
    `
  ]
})
export class NzDemoButtonMultipleComponent {}

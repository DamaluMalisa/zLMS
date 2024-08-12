import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-dropdown-basic',
  template: `
    <a nz-dropdown [nzDropdownMenu]="menu">
      Hover me
      <i nz-icon nzType="down"></i>
    </a>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul class="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4 capitalize" nz-menu nzSelectable>
        <li class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87]" nz-menu-item>1st menu item</li>
        <li class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87]" nz-menu-item>2nd menu item</li>
        <li class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87]" nz-menu-item>3rd menu item</li>
      </ul>
    </nz-dropdown-menu>
  `
})
export class NzDemoDropdownBasicComponent {}

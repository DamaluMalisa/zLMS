

import { Component } from '@angular/core';

@Component({
  selector: 'dropdown',
  template:`
    <button class="text-start text-[14px] dark:bg-white/10 text-theme-gray dark:text-white/60 btn-outlined h-[50px] w-full border-1 border-normal dark:border-white/10 px-[19px] rounded-[5px] mb-[10px]" nz-button nz-dropdown [nzDropdownMenu]="hbr">
      Alerts
      <span nz-icon nzType="down"></span>
    </button>
    <nz-dropdown-menu #hbr="nzDropdownMenu">
      <ul class="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4 capitalize" nz-menu nzSelectable>
        <li class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87] " nz-menu-item>1st menu item</li>
        <li class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87] " nz-menu-item>2nd menu item</li>
      </ul>
    </nz-dropdown-menu>
    <button class="text-start text-[14px] dark:bg-white1/0 text-theme-gray dark:text-white/60 btn-outlined h-[50px] w-full border-1 border-normal dark:border-white/10 px-[19px] rounded-[5px]" nz-button nz-dropdown nzTrigger="click" [nzDropdownMenu]="click">
      Select an option
      <span nz-icon nzType="down"></span>
    </button>
    <nz-dropdown-menu #click="nzDropdownMenu">
      <ul class="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4 capitalize" nz-menu>
        <li class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87] " nz-menu-item>1st menu item</li>
        <li class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87] " nz-menu-item>2nd menu item</li>
        <li class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87] " nz-menu-divider></li>
      </ul>
    </nz-dropdown-menu>
  `,
})

export class DropdownComponent{

}

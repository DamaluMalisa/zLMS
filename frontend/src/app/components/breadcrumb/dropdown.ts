import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-breadcrumb-dropdown',
  template: `
    <nz-breadcrumb class="flex items-center max-xl:flex-wrap modify-breadcrumb">
      <nz-breadcrumb-item class="text-[14px] font-normal dark:text-white/[.87] [&>.ant-breadcrumb-separator]:text-light-extra">
        Ant Design
      </nz-breadcrumb-item>
      <nz-breadcrumb-item  class="text-[14px] font-normal dark:text-white/[.60] [&>.ant-breadcrumb-separator]:text-light-extra">
        <a>Component</a>
      </nz-breadcrumb-item>
      <nz-breadcrumb-item  class="text-[14px] font-normal dark:text-white/[.60] [&>.ant-breadcrumb-separator]:text-light-extra" [nzOverlay]="menu">
        <a href>An Application</a>
      </nz-breadcrumb-item>
      <nz-breadcrumb-item class="text-[14px] font-normal dark:text-white/[.30] [&>.ant-breadcrumb-separator]:text-light-extra">
        Button
      </nz-breadcrumb-item>
    </nz-breadcrumb>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul class="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4 capitalize" nz-menu nzSelectable>
        <li class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87]" nz-menu-item>General</li>
        <li class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87]" nz-menu-item>Layout</li>
        <li class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87]" nz-menu-item>Navigation</li>
      </ul>
    </nz-dropdown-menu>
  `
})
export class NzDemoBreadcrumbDropdownComponent {}

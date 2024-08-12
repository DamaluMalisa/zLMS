import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-breadcrumb-with-icon',
  template: `
    <nz-breadcrumb class="flex items-center modify-breadcrumb">
      <nz-breadcrumb-item  class="text-[14px] font-normal dark:text-white/[.87] [&>.ant-breadcrumb-separator]:text-light-extra inline-flex items-center [&>span]:inline-flex [&>span]:items-center">
        <i nz-icon nzType="home"></i>
      </nz-breadcrumb-item>
      <nz-breadcrumb-item   class="text-[14px] font-normal dark:text-white/[.60] [&>.ant-breadcrumb-separator]:text-light-extra  inline-flex items-center [&>span]:inline-flex [&>span]:items-center [&>span>a]:inline-flex [&>span>a]:items-center" >
        <a><i nz-icon nzType="user"></i><span>Application List</span></a>
      </nz-breadcrumb-item>
      <nz-breadcrumb-item  class="text-[14px] font-normal dark:text-white/[.30] [&>.ant-breadcrumb-separator]:text-light-extra">
        Application
      </nz-breadcrumb-item>
    </nz-breadcrumb>
  `
})
export class NzDemoBreadcrumbWithIconComponent {}

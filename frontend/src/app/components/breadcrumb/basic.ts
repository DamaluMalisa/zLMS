import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-breadcrumb-basic',
  template: `
    <nz-breadcrumb class="flex items-center modify-breadcrumb">
      <nz-breadcrumb-item class="text-[14px] font-normal dark:text-white/[.87] [&>.ant-breadcrumb-separator]:text-light-extra">
        Home
      </nz-breadcrumb-item>
      <nz-breadcrumb-item class="text-[14px] font-normal dark:text-white/[.60] [&>.ant-breadcrumb-separator]:text-light-extra">
        <a class="text-[14px] font-normal">Application List</a>
      </nz-breadcrumb-item>
      <nz-breadcrumb-item class="text-[14px] font-normal dark:text-white/[.30] [&>.ant-breadcrumb-separator]:text-light-extra">
        An Application
      </nz-breadcrumb-item>
    </nz-breadcrumb>
  `
})
export class NzDemoBreadcrumbBasicComponent {}

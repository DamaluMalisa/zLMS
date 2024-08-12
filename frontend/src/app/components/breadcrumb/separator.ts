import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-breadcrumb-separator',
  template: `
    <h4 class="text-white/[.87]">String</h4>
    <nz-breadcrumb class="flex items-center modify-breadcrumb" nzSeparator=">">
      <nz-breadcrumb-item  class="text-[14px] font-normal dark:text-white/[.87] [&>.ant-breadcrumb-separator]:text-light-extra">
        Home
      </nz-breadcrumb-item>
      <nz-breadcrumb-item  class="text-[14px] font-normal dark:text-white/[.60] [&>.ant-breadcrumb-separator]:text-light-extra">
        <a>Application List</a>
      </nz-breadcrumb-item>
      <nz-breadcrumb-item  class="text-[14px] font-normal dark:text-white/[.30] [&>.ant-breadcrumb-separator]:text-light-extra">
        An Application
      </nz-breadcrumb-item>
    </nz-breadcrumb>
    <br />
    <h4 class="text-white/[.87]">TemplateRef</h4>
    <nz-breadcrumb class="flex items-center modify-breadcrumb" [nzSeparator]="iconTemplate">
      <nz-breadcrumb-item  class="text-[14px] font-normal dark:text-white/[.87] [&>.ant-breadcrumb-separator]:text-light-extra">
        Home
      </nz-breadcrumb-item>
      <nz-breadcrumb-item  class="text-[14px] font-normal dark:text-white/[.60] [&>.ant-breadcrumb-separator]:text-light-extra">
        <a>Application List</a>
      </nz-breadcrumb-item>
      <nz-breadcrumb-item class="text-[14px] font-normal dark:text-white/[.30] [&>.ant-breadcrumb-separator]:text-light-extra">
        An Application
      </nz-breadcrumb-item>
    </nz-breadcrumb>
    <ng-template #iconTemplate><i nz-icon nzType="arrow-right"></i></ng-template>
  `,
  styles: [
    `
      h4:first-child {
        margin-top: 0;
      }

      h4 {
        margin: 16px 0;
        font-size: 14px;
        line-height: 1;
        font-weight: normal;
      }
    `
  ]
})
export class NzDemoBreadcrumbSeparatorComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-alert-more-types',
  template: `
    <div class="flex flex-wrap gap-[10px]">
      <nz-alert class="[&>.ant-alert]:bg-success/10 [&>.ant-alert]:border-none [&>.ant-alert>div>span]:text-success [&>.ant-alert]:px-[20px] [&>.ant-alert]:py-[16.5px] [&>.ant-alert]:rounded-4 capitalize text-[15px] w-full" nzMessage="Success Text"></nz-alert>
      <nz-alert class="[&>.ant-alert]:bg-info/10 [&>.ant-alert]:border-none [&>.ant-alert>div>span]:text-info [&>.ant-alert]:px-[20px] [&>.ant-alert]:py-[16.5px] [&>.ant-alert]:rounded-4 capitalize text-[15px] w-full" nzMessage="info Text"></nz-alert>
      <nz-alert class="[&>.ant-alert]:bg-warning/10 [&>.ant-alert]:border-none [&>.ant-alert>div>span]:text-warning [&>.ant-alert]:px-[20px] [&>.ant-alert]:py-[16.5px] [&>.ant-alert]:rounded-4 capitalize text-[15px] w-full" nzMessage="warning Text"></nz-alert>
      <nz-alert class="[&>.ant-alert]:bg-danger/10 [&>.ant-alert]:border-none [&>.ant-alert>div>span]:text-danger [&>.ant-alert]:px-[20px] [&>.ant-alert]:py-[16.5px] [&>.ant-alert]:rounded-4 capitalize text-[15px] w-full" nzMessage="error Text"></nz-alert>
    </div>
  `
})
export class NzDemoAlertMoreTypesComponent {}

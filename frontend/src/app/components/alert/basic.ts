import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-alert-basic',
  template: `
    <nz-alert class="[&>.ant-alert]:bg-success/10 [&>.ant-alert]:border-none [&>.ant-alert>div>span]:text-success [&>.ant-alert]:px-[20px] [&>.ant-alert]:py-[16.5px] [&>.ant-alert]:rounded-4 capitalize text-[15px]" nzMessage="Success Text"></nz-alert>
  `
})
export class NzDemoAlertBasicComponent {}

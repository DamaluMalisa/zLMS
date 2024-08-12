import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-alert-close-text',
  template: `
    <nz-alert class="[&>.ant-alert]:bg-info/10 [&>.ant-alert]:border-none [&>.ant-alert>div>span]:text-info [&>.ant-alert]:px-[20px] [&>.ant-alert]:py-[16.5px] [&>.ant-alert]:rounded-4 capitalize text-[15px] dark:[&>div>button>span]:text-white/60" nzMessage="Info Text" nzCloseText="Close Now"></nz-alert>
  `
})
export class NzDemoAlertCloseTextComponent {}

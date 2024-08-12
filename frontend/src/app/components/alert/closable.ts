import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-alert-closable',
  template: `
    <nz-alert
      class="[&>.ant-alert]:bg-warning/10 [&>.ant-alert]:border-none [&>.ant-alert>div>span]:text-warning [&>.ant-alert]:px-[20px] [&>.ant-alert]:py-[16.5px] [&>.ant-alert]:rounded-4 capitalize text-[15px] w-full mb-[15px] dark:[&>div>button>span]:text-white/60"
      nzCloseable
      nzMessage="Warning Text Warning Text Warning Text Warning Text Warning Text Warning Text Warning Text"
      (nzOnClose)="afterClose()"
    >
    </nz-alert>
    <nz-alert
      class="[&>.ant-alert]:bg-danger/10 [&>.ant-alert]:border-none [&>.ant-alert>div>span]:text-danger [&>.ant-alert]:px-[20px] [&>.ant-alert]:py-[16.5px] [&>.ant-alert]:rounded-4 capitalize text-[15px] w-full dark:[&>div>button>span]:text-white/60"
      nzCloseable
      nzMessage="Error Text"
      nzDescription="Error Description Error Description Error Description Error Description Error Description Error Description"
      (nzOnClose)="afterClose()"
    >
    </nz-alert>
  `
})
export class NzDemoAlertClosableComponent {
  afterClose(): void {
    console.log('close');
  }
}

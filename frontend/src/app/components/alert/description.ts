import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-alert-description',
  template: `
    <nz-alert class="[&>.ant-alert]:bg-success/10 [&>.ant-alert]:border-none [&>.ant-alert>div>span]:text-success [&>.ant-alert]:px-[20px] [&>.ant-alert]:py-[16.5px] [&>.ant-alert]:rounded-4 capitalize text-[15px]" nzMessage="Success Text" nzDescription="Success Description Success Description Success Description">
    </nz-alert>
    <nz-alert class="[&>.ant-alert]:bg-info/10 [&>.ant-alert]:border-none [&>.ant-alert>div>span]:text-info [&>.ant-alert]:px-[20px] [&>.ant-alert]:py-[16.5px] [&>.ant-alert]:rounded-4 capitalize text-[15px]" nzMessage="Info Text" nzDescription="Info Description Info Description Info Description Info Description">
    </nz-alert>
    <nz-alert
      class="[&>.ant-alert]:bg-warning/10 [&>.ant-alert]:border-none [&>.ant-alert>div>span]:text-warning [&>.ant-alert]:px-[20px] [&>.ant-alert]:py-[16.5px] [&>.ant-alert]:rounded-4 capitalize text-[15px]"
      nzMessage="Warning Text"
      nzDescription="Warning Description Warning Description Warning Description Warning Description"
    >
    </nz-alert>
    <nz-alert class="[&>.ant-alert]:bg-danger/10 [&>.ant-alert]:border-none [&>.ant-alert>div>span]:text-danger [&>.ant-alert]:px-[20px] [&>.ant-alert]:py-[16.5px] [&>.ant-alert]:rounded-4 capitalize text-[15px] mb-0" nzMessage="Error Text" nzDescription="Error Description Error Description Error Description Error Description">
    </nz-alert>
  `,
  styles: [
    `
      nz-alert {
        margin-bottom: 16px;
      }
    `
  ]
})
export class NzDemoAlertDescriptionComponent {}

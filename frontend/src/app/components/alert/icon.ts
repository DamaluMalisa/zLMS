import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-alert-icon',
  template: `
    <nz-alert class="[&>.ant-alert]:bg-success/10 [&>.ant-alert]:border-none [&>.ant-alert>div>span]:text-success [&>.ant-alert]:px-[20px] [&>.ant-alert]:py-[16.5px] [&>.ant-alert]:rounded-4 capitalize text-[15px] w-full mb-[15px]" nzMessage="Success Tips" nzShowIcon></nz-alert>
    <nz-alert class="[&>.ant-alert]:bg-info/10 [&>.ant-alert]:border-none [&>.ant-alert>div>span]:text-info [&>.ant-alert]:px-[20px] [&>.ant-alert]:py-[16.5px] [&>.ant-alert]:rounded-4 capitalize text-[15px] w-full mb-[15px]" nzMessage="Informational Notes" nzShowIcon></nz-alert>
    <nz-alert class="[&>.ant-alert]:bg-warning/10 [&>.ant-alert]:border-none [&>.ant-alert>div>span]:text-warning [&>.ant-alert]:px-[20px] [&>.ant-alert]:py-[16.5px] [&>.ant-alert]:rounded-4 capitalize text-[15px] w-full mb-[15px]" nzMessage="Warning" nzShowIcon></nz-alert>
    <nz-alert class="[&>.ant-alert]:bg-danger/10 [&>.ant-alert]:border-none [&>.ant-alert>div>span]:text-danger [&>.ant-alert]:px-[20px] [&>.ant-alert]:py-[16.5px] [&>.ant-alert]:rounded-4 capitalize text-[15px] w-full mb-[15px]" nzMessage="Error" nzShowIcon></nz-alert>
    <nz-alert
    class="[&>.ant-alert]:bg-success/10 [&>.ant-alert]:border-none [&>.ant-alert>div>span]:text-success [&>.ant-alert]:px-[20px] [&>.ant-alert]:py-[16.5px] [&>.ant-alert]:rounded-4 capitalize text-[15px] w-full mb-[15px]"
    nzType="success"
      nzMessage="Success Tips"
      nzDescription="Detailed description and advices about successful copywriting."
      nzShowIcon
    >
    </nz-alert>
    <nz-alert
    class="[&>.ant-alert]:bg-info/10 [&>.ant-alert]:border-none [&>.ant-alert>div>span]:text-info [&>.ant-alert]:px-[20px] [&>.ant-alert]:py-[16.5px] [&>.ant-alert]:rounded-4 capitalize text-[15px] w-full mb-[15px]"
      nzType="info"
      nzMessage="Informational Notes"
      nzDescription="Additional description and informations about copywriting."
      nzShowIcon
    >
    </nz-alert>
    <nz-alert class="[&>.ant-alert]:bg-warning/10 [&>.ant-alert]:border-none [&>.ant-alert>div>span]:text-warning [&>.ant-alert]:px-[20px] [&>.ant-alert]:py-[16.5px] [&>.ant-alert]:rounded-4 capitalize text-[15px] w-full mb-[15px]" nzType="warning" nzType="warning" nzMessage="Warning" nzDescription="This is a warning notice about copywriting." nzShowIcon> </nz-alert>
    <nz-alert class="[&>.ant-alert]:bg-danger/10 [&>.ant-alert]:border-none [&>.ant-alert>div>span]:text-danger [&>.ant-alert]:px-[20px] [&>.ant-alert]:py-[16.5px] [&>.ant-alert]:rounded-4 capitalize text-[15px] w-full mb-[15px]" nzType="error" nzMessage="Error" nzDescription="This is an error message about copywriting." nzShowIcon> </nz-alert>
  `,
  styles: [
    `
      nz-alert {
        margin-bottom: 16px;
      }
    `
  ]
})
export class NzDemoAlertIconComponent {}

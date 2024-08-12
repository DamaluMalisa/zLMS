import { Component } from '@angular/core';

import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'nz-demo-modal-info',
  template: `
    <button class="bg-info hover:bg-info-hbr hover:border-info-hbr border-solid border-1 border-info text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button (click)="info()">Info</button>
    <button class="bg-success hover:bg-success-hbr hover:border-success-hbr border-solid border-1 border-success text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button (click)="success()">Success</button>
    <button class="bg-danger hover:bg-danger-hbr hover:border-danger-hbr border-solid border-1 border-danger text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button (click)="error()">Error</button>
    <button class="bg-warning hover:bg-warning-hbr hover:border-warning-hbr border-solid border-1 border-warning text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button (click)="warning()">Warning</button>
  `,
  styles: [
    `
      button {
        margin-right: 8px;
      }
    `
  ]
})
export class NzDemoModalInfoComponent {
  constructor(private modal: NzModalService) {}

  info(): void {
    this.modal.info({
      nzTitle: '<h2 class="text-dark dark:text-white/[.87]"> This is a notification message</h2>',
      nzContent: '<p class="text-theme-gray dark:text-white/60">some messages...some messages...</p>',
      nzOnOk: () => console.log('Info OK')
    });
  }

  success(): void {
    this.modal.success({
      nzTitle: '<h2 class="text-dark dark:text-white/[.87]">This is a success message</h2>',
      nzContent: '<p class="text-theme-gray dark:text-white/60">some messages...some messages...</p>'
    });
  }

  error(): void {
    this.modal.error({
      nzTitle: '<h2 class="text-dark dark:text-white/[.87]">This is a error message</h2>',
      nzContent: '<p class="text-theme-gray dark:text-white/60">some messages...some messages...</p>'
    });
  }

  warning(): void {
    this.modal.warning({
      nzTitle: '<h2 class="text-dark dark:text-white/[.87]">This is a warning message</h2>',
      nzContent: '<p class="text-theme-gray dark:text-white/60">some messages...some messages...</p>'
    });
  }
}

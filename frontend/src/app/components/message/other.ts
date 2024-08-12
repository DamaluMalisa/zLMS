import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'nz-demo-message-other',
  template: `
    <button class="bg-success hover:bg-success-hbr hover:border-success-hbr border-solid border-1 border-success text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button (click)="createMessage('success')">Success</button>
    <button class="bg-danger hover:bg-danger-hbr hover:border-danger-hbr border-solid border-1 border-danger text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button (click)="createMessage('error')">Error</button>
    <button class="bg-warning hover:bg-warning-hbr hover:border-warning-hbr border-solid border-1 border-warning text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button (click)="createMessage('warning')">Warning</button>
  `,
  styles: [
    `
      [nz-button] {
        margin-inline-end: 8px;
      }
    `
  ]
})
export class NzDemoMessageOtherComponent {
  createMessage(type: string): void {
    this.message.create(type, `This is a message of ${type}`);
  }

  constructor(private message: NzMessageService) {}
}

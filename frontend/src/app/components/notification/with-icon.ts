import { Component } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'nz-demo-notification-with-icon',
  template: `
    <button class="bg-success hover:bg-success-hbr hover:border-success-hbr border-solid border-1 border-success text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button (click)="createNotification('success')">Success</button>
    <button class="bg-info hover:bg-info-hbr hover:border-info-hbr border-solid border-1 border-info text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button (click)="createNotification('info')">Info</button>
    <button class="bg-warning hover:bg-warning-hbr hover:border-warning-hbr border-solid border-1 border-warning text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button (click)="createNotification('warning')">Warning</button>
    <button class="bg-danger hover:bg-danger-hbr hover:border-danger-hbr border-solid border-1 border-danger text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button (click)="createNotification('error')">Error</button>
  `,
  styles: [
    `
      button {
        margin-inline-end: 1em;
      }
    `
  ]
})
export class NzDemoNotificationWithIconComponent {
  createNotification(type: string): void {
    this.notification.create(
      type,
      'Notification Title',
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
    );
  }

  constructor(private notification: NzNotificationService) {}
}

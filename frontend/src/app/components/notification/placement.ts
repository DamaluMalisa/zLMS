import { Component } from '@angular/core';

import { NzNotificationPlacement, NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'nz-demo-notification-placement',
  template: `
    <button class="bg-primary hover:bg-primary-hbr hover:border-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button (click)="createBasicNotification('top')" nzType="primary">
      <span nz-icon nzType="border-top" nzTheme="outline"></span>
      top
    </button>
    <button class="bg-primary hover:bg-primary-hbr hover:border-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button (click)="createBasicNotification('bottom')" nzType="primary">
      <span nz-icon nzType="border-bottom" nzTheme="outline"></span>
      bottom
    </button>
    <nz-divider></nz-divider>
    <button class="bg-primary hover:bg-primary-hbr hover:border-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button (click)="createBasicNotification('topLeft')" nzType="primary">
      <span nz-icon nzType="radius-upleft"></span>
      topLeft
    </button>
    <button class="bg-primary hover:bg-primary-hbr hover:border-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button (click)="createBasicNotification('topRight')" nzType="primary">
      <span nz-icon nzType="radius-upright"></span>
      topRight
    </button>
    <nz-divider></nz-divider>
    <button class="bg-primary hover:bg-primary-hbr hover:border-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button (click)="createBasicNotification('bottomLeft')" nzType="primary">
      <span nz-icon nzType="radius-bottomleft"></span>
      bottomLeft
    </button>
    <button class="bg-primary hover:bg-primary-hbr hover:border-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button (click)="createBasicNotification('bottomRight')" nzType="primary">
      <span nz-icon nzType="radius-bottomright"></span>
      bottomRight
    </button>
  `,
  styles: [
    `
      button {
        margin-inline-end: 1em;
      }
    `
  ]
})
export class NzDemoNotificationPlacementComponent {
  placement = 'topRight';

  createBasicNotification(position: NzNotificationPlacement): void {
    this.notification.blank(
      'Notification Title',
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      { nzPlacement: position }
    );
  }

  constructor(private notification: NzNotificationService) {}
}

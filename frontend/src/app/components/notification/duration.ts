import { Component } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'nz-demo-notification-duration',
  template: `
    <button class="bg-primary hover:bg-primary-hbr hover:border-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button [nzType]="'primary'" (click)="createBasicNotification()">Open the notification box</button>
  `
})
export class NzDemoNotificationDurationComponent {
  createBasicNotification(): void {
    this.notification.blank(
      'Notification Title',
      'I will never close automatically. I will be close automatically. I will never close automatically.',
      { nzDuration: 0 }
    );
  }

  constructor(private notification: NzNotificationService) {}
}

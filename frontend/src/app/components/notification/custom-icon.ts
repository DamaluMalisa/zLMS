import { Component, TemplateRef } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'nz-demo-notification-custom-icon',
  template: `
    <ng-template #template>
      <div class="ant-notification-notice-content">
        <div class="ant-notification-notice-with-icon">
          <span class="ant-notification-notice-icon"><i nz-icon nzType="smile" style="color: rgb(16, 142, 233);"></i></span>
          <div class="ant-notification-notice-message">Notification Title</div>
          <div class="ant-notification-notice-description">
            This is the content of the notification. This is the content of the notification. This is the content of the notification.
          </div>
        </div>
      </div>
    </ng-template>
    <button class="bg-primary hover:bg-primary-hbr hover:border-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button [nzType]="'primary'" (click)="createBasicNotification(template)">
      Open the notification box
    </button>
  `
})
export class NzDemoNotificationCustomIconComponent {
  constructor(private notification: NzNotificationService) {}

  createBasicNotification(template: TemplateRef<{}>): void {
    this.notification.template(template);
  }
}

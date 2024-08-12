import { Component, TemplateRef } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'nz-demo-notification-with-btn',
  template: `
    <ng-template #template let-notification>
      <div class="ant-notification-notice-content">
        <div>
          <div class="ant-notification-notice-message">Notification Title</div>
          <div class="ant-notification-notice-description">
            A function will be be called after the notification is closed (automatically after the "duration" time of manually).
          </div>
          <span class="ant-notification-notice-btn">
            <button nz-button nzType="primary" nzSize="small" (click)="notification.close()">
              <span>Confirm</span>
            </button>
          </span>
        </div>
      </div>
    </ng-template>
    <button class="bg-primary hover:bg-primary-hbr hover:border-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button [nzType]="'primary'" (click)="createBasicNotification(template)">
      Open the notification box
    </button>
  `
})
export class NzDemoNotificationWithBtnComponent {
  constructor(private notification: NzNotificationService) {}

  createBasicNotification(template: TemplateRef<{}>): void {
    this.notification.template(template);
  }
}

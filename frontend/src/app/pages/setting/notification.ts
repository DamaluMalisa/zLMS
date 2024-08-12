import { Component } from '@angular/core';
import notificationData from './../../../assets/data/pages/notification.json';

@Component({
  selector: 'notifications',
  template: `
    <div class="bg-regularBG dark:bg-white/10 px-[25px] pb-[25px] pt-[15px] max-sm:px-[15px] rounded-[10px]">
      <div class="flex items-center justify-between h-[50px]">
        <h2 class="text-light dark:text-white/60 text-[15px] font-medium">Notifications</h2>
        <button nz-button class="font-normal text-info text-[13px] border-none outline-none shadow-none bg-transparent" (click)="toggleAllSwitches()">Toggle all</button>
      </div>
      <div class="bg-white dark:bg-white/10 shadow-[0_5px_20px_rgba(173,181,217,0.05)] rounded-[10px]">
        <nav>
          <ul class="p-0 m-0">
            <li class="flex items-center justify-between mb-0 px-[25px] py-[20px] border-b border-regular last:border-none dark:border-white/10 [&>button]:shadow-none gap-[15px]" *ngFor="let item of notification">
              <div>
                <h4 class="mb-0.5 text-body dark:text-white/60 text-sm font-medium">{{item.title}}</h4>
                <p class="mb-0 text-light dark:text-white/60">{{item.description}}</p>
              </div>
              <div>
                <nz-switch nzSize="small" [ngModel]="item.switchStatus"></nz-switch>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="inline-flex items-center gap-[13px] mt-[50px]">
      <button
        class="bg-primary hover:bg-primary-hbr inline-flex items-center outline-none shadow-none w-fit duration-300 text-white capitalize px-[20px] text-[15px] border-primary font-semibold hover:border-primary-hbr rounded-[5px] gap-[8px] h-[46px]"
        nz-button
        nzType="primary"
        >
        <span>update Email Notification</span>
        </button>
        <button
        class="bg-normalBG border-normal dark:bg-white/10 dark:border-white/10 inline-flex items-center outline-none shadow-none w-fit duration-300 text-theme-gray dark:text-white/60 font-semibold capitalize px-[20px] text-[15px rounded-[5px] gap-[8px] h-[46px]"
        nz-button
        nzType="primary"
        >
        <span>Cancel</span>
      </button>
    </div>
  `,
  styles: [`
    :host ::ng-deep nz-switch .ant-switch{
      @apply bg-normal dark:bg-white/10;
    }
    :host ::ng-deep nz-switch .ant-switch.ant-switch-checked{
      @apply bg-primary;
    }
  `]
})
export class NotificationComponent {
  notification: any[] = [];

  ngOnInit() {
    this.notification = notificationData.notification;
    // Initialize the form group
  }
  toggleAllSwitches() {
    const allSwitchStatus = this.notification.every(item => item.switchStatus);
    this.notification.forEach(item => (item.switchStatus = !allSwitchStatus));
  }
}

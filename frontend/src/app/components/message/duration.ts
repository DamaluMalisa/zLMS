import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'nz-demo-message-duration',
  template: `
    <button class="hover:bg-gray-hbr border-solid border-1 dark:bg-transparent border-normal dark:border-white/10 text-light dark:text-white/60 dark:focus:text-white/60 hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button [nzType]="'default'" (click)="createBasicMessage()">Customized display duration</button>
  `
})
export class NzDemoMessageDurationComponent {
  createBasicMessage(): void {
    this.message.success('This is a prompt message for success, and it will disappear in 10 seconds', {
      nzDuration: 10000
    });
  }

  constructor(private message: NzMessageService) {}
}

import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'nz-demo-message-info',
  template: `
    <button class="bg-primary hover:bg-primary-hbr hover:border-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button [nzType]="'primary'" (click)="createBasicMessage()">Display normal message</button>
  `
})
export class NzDemoMessageInfoComponent {
  constructor(private message: NzMessageService) {}

  createBasicMessage(): void {
    this.message.info('This is a normal message');
  }
}

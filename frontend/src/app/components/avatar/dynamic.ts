import { Component } from '@angular/core';

const userList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

@Component({
  selector: 'nz-demo-avatar-dynamic',
  template: `
    <nz-avatar class="align-middle" [ngStyle]="{ 'background-color': color }" [nzText]="text" nzSize="large"></nz-avatar>
    <button class="inline-flex items-center justify-center bg-[#e3e6ee] dark:bg-white/10 dark:text-white/[.87] dark:border-white/10" nz-button [nzType]="'dashed'" (click)="change()" class="align-middle ms-[16px]">
      <span>Change</span>
    </button>
  `
})
export class NzDemoAvatarDynamicComponent {
  text: string = userList[3];
  color: string = colorList[3];

  change(): void {
    let idx = userList.indexOf(this.text);
    ++idx;
    if (idx === userList.length) {
      idx = 0;
    }
    this.text = userList[idx];
    this.color = colorList[idx];
  }
}

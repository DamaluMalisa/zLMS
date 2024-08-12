import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-avatar-badge',
  template: `
    <nz-badge [nzCount]="5" class="ltr:mr-[24px] rtl:ml-[24px]">
      <nz-avatar class="inline-flex items-center justify-center bg-[#e3e6ee] dark:bg-white/10" nzIcon="user" [nzShape]="'square'"></nz-avatar>
    </nz-badge>
    <nz-badge nzDot>
      <nz-avatar class="inline-flex items-center justify-center bg-[#e3e6ee] dark:bg-white/10" nzIcon="user" [nzShape]="'square'"></nz-avatar>
    </nz-badge>
  `
})
export class NzDemoAvatarBadgeComponent {}

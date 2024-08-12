import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-avatar-type',
  template: `
    <nz-avatar class="inline-flex items-center justify-center bg-[#e3e6ee] dark:bg-white/10" nzIcon="user"></nz-avatar>
    <nz-avatar class="inline-flex items-center justify-center bg-[#e3e6ee] dark:bg-white/10" nzText="U"></nz-avatar>
    <nz-avatar class="inline-flex items-center justify-center bg-[#e3e6ee] dark:bg-white/10" nzText="USER"></nz-avatar>
    <nz-avatar class="inline-flex items-center justify-center bg-[#e3e6ee] dark:bg-white/10" nzIcon="user" nzSrc="//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></nz-avatar>
    <nz-avatar class="inline-flex items-center justify-center bg-[#e3e6ee] dark:bg-white/10" nzText="U" style="color:#f56a00; background-color:#fde3cf;"></nz-avatar>
    <nz-avatar class="inline-flex items-center justify-center bg-[#e3e6ee] dark:bg-white/10" nzIcon="user" style="background-color:#87d068;"></nz-avatar>
  `,
  styles: [
    `
      nz-avatar {
        @apply me-[16px] mt-[16px];
      }
    `
  ]
})
export class NzDemoAvatarTypeComponent {}

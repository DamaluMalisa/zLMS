import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-avatar-basic',
  template: `
    <div>
      <nz-avatar class="inline-flex items-center justify-center bg-[#e3e6ee] dark:bg-white/10" [nzSize]="64" nzIcon="user"></nz-avatar>
      <nz-avatar class="inline-flex items-center justify-center bg-[#e3e6ee] dark:bg-white/10" nzSize="large" nzIcon="user"></nz-avatar>
      <nz-avatar class="inline-flex items-center justify-center bg-[#e3e6ee] dark:bg-white/10" nzIcon="user"></nz-avatar>
      <nz-avatar class="inline-flex items-center justify-center bg-[#e3e6ee] dark:bg-white/10" nzSize="small" nzIcon="user"></nz-avatar>
    </div>
    <div>
      <nz-avatar class="inline-flex items-center justify-center bg-[#e3e6ee] dark:bg-white/10" [nzShape]="'square'" [nzSize]="64" [nzIcon]="'user'"></nz-avatar>
      <nz-avatar class="inline-flex items-center justify-center bg-[#e3e6ee] dark:bg-white/10" [nzShape]="'square'" [nzSize]="'large'" [nzIcon]="'user'"></nz-avatar>
      <nz-avatar class="inline-flex items-center justify-center bg-[#e3e6ee] dark:bg-white/10" [nzShape]="'square'" [nzIcon]="'user'"></nz-avatar>
      <nz-avatar class="inline-flex items-center justify-center bg-[#e3e6ee] dark:bg-white/10" [nzShape]="'square'" [nzSize]="'small'" [nzIcon]="'user'"></nz-avatar>
    </div>
  `,
  styles: [
    `
      nz-avatar {
        @apply me-[16px] mt-[16px];
      }
    `
  ]
})
export class NzDemoAvatarBasicComponent {}

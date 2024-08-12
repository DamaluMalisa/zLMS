import { Component } from '@angular/core';

import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'nz-demo-drawer-placement',
  template: `
    <nz-radio-group [(ngModel)]="placement">
      <label class="text-dark dark:text-white/[.87] capitalize" nz-radio nzValue="top">top</label>
      <label class="text-dark dark:text-white/[.87] capitalize" nz-radio nzValue="right">right</label>
      <label class="text-dark dark:text-white/[.87] capitalize" nz-radio nzValue="bottom">bottom</label>
      <label class="text-dark dark:text-white/[.87] capitalize" nz-radio nzValue="left">left</label>
    </nz-radio-group>
    <button nz-button class="bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" (click)="open()">Open</button>
    <nz-drawer
      [nzClosable]="false"
      [nzVisible]="visible"
      [nzPlacement]="placement"
      nzTitle="Basic Drawer"
      (nzOnClose)="close()"
    >
      <ng-container *nzDrawerContent>
        <p class="text-theme-gray dark:text-white/60">Some contents...</p>
        <p class="text-theme-gray dark:text-white/60">Some contents...</p>
        <p class="text-theme-gray dark:text-white/60">Some contents...</p>
      </ng-container>
    </nz-drawer>
  `,
   styles: [`
   :host ::ng-deep .ant-radio-inner{
     @apply dark:bg-white/10 dark:border-white/30;
   }
   :host ::ng-deep .ant-radio-checked .ant-radio-inner{
     @apply dark:border-primary;
   }
   :host ::ng-deep .ant-radio-input:focus + .ant-radio-inner{
     @apply dark:shadow-none;
   }
 `]
})
export class NzDemoDrawerPlacementComponent {
  visible = false;
  placement: NzDrawerPlacement = 'left';
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}

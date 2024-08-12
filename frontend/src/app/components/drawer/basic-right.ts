import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-drawer-basic-right',
  template: `
    <button nz-button class="bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" (click)="open()">Open</button>
    <nz-drawer [nzClosable]="false" [nzVisible]="visible" nzPlacement="right" nzTitle="Basic Drawer" (nzOnClose)="close()">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </nz-drawer>
  `
})
export class NzDemoDrawerBasicRightComponent {
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}

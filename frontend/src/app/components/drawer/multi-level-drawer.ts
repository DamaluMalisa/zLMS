import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-drawer-multi-level-drawer',
  template: `
    <button nz-button class="bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" (click)="open()">New Cookbook</button>
    <nz-drawer
      [nzClosable]="false"
      [nzOffsetX]="childrenVisible ? 180 : 0"
      [nzWidth]="320"
      [nzVisible]="visible"
      nzTitle="Cookbook"
      (nzOnClose)="close()"
    >
      <form *nzDrawerContent nz-form>
        <div nz-row>
          <div nz-col nzSpan="24">
            <nz-form-item>
              <nz-form-label  class="flex items-center font-medium dark:text-white/60">Name</nz-form-label>
              <nz-form-control>
                <input  class="w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] h-[46px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60" nz-input placeholder="please enter cookbook name" />
              </nz-form-control>
            </nz-form-item>
          </div>
        </div>
        <div nz-row>
          <div nz-col nzSpan="24">
            <nz-form-item>
              <nz-form-label  class="flex items-center font-medium dark:text-white/60">Food</nz-form-label>
              <nz-form-control>
                <nz-tag class="inline-flex items-center bg-white dark:bg-white/10 dark:border-white/10 dark:text-white/60 text-dark">potato</nz-tag>
                <nz-tag class="inline-flex items-center bg-white dark:bg-white/10 dark:border-white/10 dark:text-white/60 text-dark">eggplant</nz-tag>
                <nz-tag class="inline-flex items-center bg-white dark:bg-white/10 dark:border-white/10 dark:text-white/60 text-dark" (click)="openChildren()">+</nz-tag>
              </nz-form-control>
            </nz-form-item>
          </div>
        </div>
      </form>
      <nz-drawer [nzClosable]="false" [nzVisible]="childrenVisible" nzTitle="Food" (nzOnClose)="closeChildren()">
        <nz-list *nzDrawerContent [nzDataSource]="vegetables" [nzRenderItem]="item">
          <ng-template #item let-item>
            <nz-list-item class="text-dark dark:text-white/[.87] border-regular dark:border-white/10 capitalize" [nzContent]="item"></nz-list-item>
          </ng-template>
        </nz-list>
      </nz-drawer>
    </nz-drawer>
  `
})
export class NzDemoDrawerMultiLevelDrawerComponent {
  visible = false;
  childrenVisible = false;

  vegetables = ['asparagus', 'bamboo', 'potato', 'carrot', 'cilantro', 'potato', 'eggplant'];

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  openChildren(): void {
    this.childrenVisible = true;
  }

  closeChildren(): void {
    this.childrenVisible = false;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-modal-position',
  template: `
    <button class="bg-primary hover:bg-primary-hbr hover:border-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button nzType="primary" (click)="showModalTop()">Display a modal dialog at 20px to Top</button>
    <nz-modal
      [nzStyle]="{ top: '20px' }"
      [(nzVisible)]="isVisibleTop"
      nzTitle="20px to Top"
      [nzFooter]="modalFooter"
      (nzOnCancel)="handleCancelTop()"
      (nzOnOk)="handleOkTop()"
    >
      <ng-container *nzModalContent>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </ng-container>
      <ng-template #modalFooter>
        <button class="hover:bg-gray-hbr border-solid border-1 dark:bg-transparent border-normal dark:border-white/10 text-light dark:text-white/60 dark:focus:text-white/60 hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button nzType="default" (click)="handleCancelTop()">Cancel</button>
        <button class="bg-primary hover:bg-primary-hbr hover:border-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button nzType="primary" (click)="handleOkTop()" [nzLoading]="isConfirmLoading">Custom Submit</button>
      </ng-template>
    </nz-modal>

    <br />
    <br />

    <button class="bg-primary hover:bg-primary-hbr hover:border-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button nzType="primary" (click)="showModalMiddle()">Vertically centered modal dialog</button>
    <nz-modal
      [(nzVisible)]="isVisibleMiddle"
      nzTitle="Vertically centered modal dialog"
      nzCentered
      [nzFooter]="modalFooter2"
      (nzOnCancel)="handleCancelMiddle()"
      (nzOnOk)="handleOkMiddle()"
    >
      <ng-container *nzModalContent>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </ng-container>
      <ng-template #modalFooter2>
        <button class="hover:bg-gray-hbr border-solid border-1 dark:bg-transparent border-normal dark:border-white/10 text-light dark:text-white/60 dark:focus:text-white/60 hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button nzType="default" (click)="handleCancelMiddle()">Cancel</button>
        <button class="bg-primary hover:bg-primary-hbr hover:border-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button nzType="primary" (click)="handleOkMiddle()" [nzLoading]="isConfirmLoading">Custom Submit</button>
      </ng-template>
    </nz-modal>
  `
})
export class NzDemoModalPositionComponent {
  isVisibleTop = false;
  isVisibleMiddle = false;

  showModalTop(): void {
    this.isVisibleTop = true;
  }

  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }

  handleOkTop(): void {
    this.isVisibleTop = false;
  }

  handleCancelTop(): void {
    this.isVisibleTop = false;
  }

  handleOkMiddle(): void {
    console.log('click ok');
    this.isVisibleMiddle = false;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }
}

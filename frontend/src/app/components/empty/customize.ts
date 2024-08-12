import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-empty-customize',
  template: `
    <nz-empty
      nzNotFoundImage="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      [nzNotFoundContent]="contentTpl"
      [nzNotFoundFooter]="footerTpl"
    >
      <ng-template #contentTpl>
        <span class="text-[15px] font-normal text-theme-gray dark:text-white/60 capitalize"> Customize <a class="text-primary hover:opacity-5" href="#API">Description</a> </span>
      </ng-template>
      <ng-template #footerTpl>
        <button nz-button class="bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" (click)="onClick()">Create Now</button>
      </ng-template>
    </nz-empty>
  `,
  styles: [`
    :host ::ng-deep .ant-empty .ant-empty-image {
      @apply inline-block;
    }
  `]
})
export class NzDemoEmptyCustomizeComponent {
  onClick(): void {
    console.log('clicked');
  }
}

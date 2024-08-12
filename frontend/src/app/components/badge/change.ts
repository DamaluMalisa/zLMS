import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-badge-change',
  template: `
    <div>
      <nz-badge [nzCount]="count">
        <a class="w-[42px] h-[42px] rounded-4 bg-[#f4f5f7] dark:bg-white/10 inline-block align-middle"></a>
      </nz-badge>
      <nz-button-group>
        <button class="flex items-center justify-center dark:bg-white/10 dark:border-white/10 dark:text-white/[.87]" nz-button (click)="minCount()"><i nz-icon nzType="minus"></i></button>
        <button class="flex items-center justify-center dark:bg-white/10 dark:border-white/10 dark:text-white/[.87]" nz-button (click)="addCount()"><i nz-icon nzType="plus"></i></button>
      </nz-button-group>
    </div>

    <div class="mt-[10px]">
      <nz-badge [nzDot]="dot">
        <a class="w-[42px] h-[42px] rounded-4 bg-[#f4f5f7] dark:bg-white/10 inline-block align-middle"></a>
      </nz-badge>
      <nz-switch [(ngModel)]="dot"></nz-switch>
    </div>
  `,
  styles: [
    `
      nz-badge {
        @apply ltr:mr-[20px] rtl:ml-[20px];
      }
      :host ::ng-deep nz-switch .ant-switch {
        @apply dark:bg-white/10;
      }
      :host ::ng-deep nz-switch .ant-switch.ant-switch-checked {
        @apply bg-primary;
      }
    `
  ]
})
export class NzDemoBadgeChangeComponent {
  count = 5;
  dot = true;

  addCount(): void {
    this.count++;
  }

  minCount(): void {
    this.count--;
    if (this.count < 0) {
      this.count = 0;
    }
  }
}

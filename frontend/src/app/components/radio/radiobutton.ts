import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-radio-radiobutton',
  template: `
    <nz-radio-group [(ngModel)]="radioValue">
      <label class="px-[25px] py-[11px] h-auto ltr:rounded-l-6 rtl:rounded-r-6" nz-radio-button nzValue="A">Hangzhou</label>
      <label class="px-[25px] py-[11px] h-auto" nz-radio-button nzValue="B">Shanghai</label>
      <label class="px-[25px] py-[11px] h-auto" nz-radio-button nzValue="C">Beijing</label>
      <label class="px-[25px] py-[11px] h-auto ltr:rounded-r-6 rtl:rounded-l-6 rtl:before:hidden" nz-radio-button nzValue="D">Chengdu</label>
    </nz-radio-group>
    <br />
    <br />
    <nz-radio-group [(ngModel)]="radioValue">
      <label class="px-[25px] py-[11px] h-auto ltr:rounded-l-6 rtl:rounded-r-6" nz-radio-button nzValue="A">Hangzhou</label>
      <label class="px-[25px] py-[11px] h-auto" nz-radio-button nzValue="B" nzDisabled>Shanghai</label>
      <label class="px-[25px] py-[11px] h-auto" nz-radio-button nzValue="C">Beijing</label>
      <label class="px-[25px] py-[11px] h-auto ltr:rounded-r-6 rtl:rounded-l-6 rtl:before:hidden" nz-radio-button nzValue="D">Chengdu</label>
    </nz-radio-group>
    <br />
    <br />
    <nz-radio-group [(ngModel)]="radioValue">
      <label class="px-[25px] py-[11px] h-auto ltr:rounded-l-6 rtl:rounded-r-6" nz-radio-button nzValue="A" nzDisabled>Hangzhou</label>
      <label class="px-[25px] py-[11px] h-auto" nz-radio-button nzValue="B" nzDisabled>Shanghai</label>
      <label class="px-[25px] py-[11px] h-auto" nz-radio-button nzValue="C" nzDisabled>Beijing</label>
      <label class="px-[25px] py-[11px] h-auto ltr:rounded-r-6 rtl:rounded-l-6 rtl:before:hidden" nz-radio-button nzValue="D" nzDisabled>Chengdu</label>
    </nz-radio-group>
  `,
  styles: [`
    :host ::ng-deep nz-radio-group label{
      @apply dark:bg-white/10 dark:border-white/10 dark:text-white/[.87];
    }
    :host ::ng-deep nz-radio-group label.ant-radio-button-wrapper-checked{
      @apply dark:bg-primary dark:border-primary dark:text-white;
    }
    :host ::ng-deep .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled){
      @apply bg-primary text-white;
    }
    :host ::ng-deep .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):first-child{
      @apply border-primary;
    }
    :host ::ng-deep .ant-radio-button-wrapper-checked:not([class*=" ant-radio-button-wrapper-disabled"]).ant-radio-button-wrapper:first-child {
      @apply border-r-primary;
    }
    :host ::ng-deep .ant-radio-button-wrapper {
        @apply leading-[1.6] px-[25.25px] border-[#f1f2f6] dark:border-white/10 bg-white text-theme-gray;
    }
    :host ::ng-deep .ant-radio-button-wrapper:not(:first-child)::before {
        @apply bg-[#f1f2f6] dark:bg-white/10;
    }
    :host ::ng-deep .ant-radio-button-wrapper.ant-radio-button-wrapper-disabled {
      @apply opacity-[0.4];
    }
  `]
})
export class NzDemoRadioRadiobuttonComponent {
  radioValue = 'A';
}

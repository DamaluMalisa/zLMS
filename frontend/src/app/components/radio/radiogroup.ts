import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-radio-radiogroup',
  template: `
    <nz-radio-group [(ngModel)]="radioValue">
      <label class="dark:text-white/[.87]" nz-radio nzValue="A">A</label>
      <label class="dark:text-white/[.87]" nz-radio nzValue="B">B</label>
      <label class="dark:text-white/[.87]" nz-radio nzValue="C">C</label>
      <label class="dark:text-white/[.87]" nz-radio nzValue="D">D</label>
    </nz-radio-group>
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
export class NzDemoRadioRadiogroupComponent {
  radioValue = 'A';
}

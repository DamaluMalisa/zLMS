import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-radio-radiogroup-more',
  template: `
    <nz-radio-group [(ngModel)]="radioValue">
      <label class="dark:text-white/[.87]" nz-radio [ngStyle]="style" nzValue="A">Option A</label>
      <label class="dark:text-white/[.87]" nz-radio [ngStyle]="style" nzValue="B">Option B</label>
      <label class="dark:text-white/[.87]" nz-radio [ngStyle]="style" nzValue="C">Option C</label>
      <label class="dark:text-white/[.87]" nz-radio [ngStyle]="style" nzValue="M">
        More...
        <input type="text" nz-input *ngIf="radioValue === 'M'" />
      </label>
    </nz-radio-group>
  `,
  styles: [
    `
      [nz-radio] {
        display: block;
      }
      input {
        width: 100px;
        margin-left: 10px;
      }
      :host ::ng-deep .ant-radio-inner{
        @apply dark:bg-white/10 dark:border-white/30;
      }
      :host ::ng-deep .ant-radio-checked .ant-radio-inner{
        @apply dark:border-primary;
      }
      :host ::ng-deep .ant-radio-input:focus + .ant-radio-inner{
        @apply dark:shadow-none;
      }
      :host ::ng-deep .ant-input{
        @apply dark:bg-white/10 dark:border-white/30;
      }
    `
  ]
})
export class NzDemoRadioRadiogroupMoreComponent {
  radioValue = 'A';
  style = {
    display: 'block',
    height: '30px',
    lineHeight: '30px'
  };
}

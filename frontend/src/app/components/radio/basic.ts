import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-radio-basic',
  template: `
    <label class="text-dark dark:text-white/[.87]" nz-radio ngModel>Radio</label>
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
export class NzDemoRadioBasicComponent {}

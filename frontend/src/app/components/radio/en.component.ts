import { Component } from '@angular/core';

@Component({
  selector     : 'nz-demo-radio',
  preserveWhitespaces: false,
  templateUrl  : './en.html',
  styles:[`
    :host ::ng-deep .ant-radio.ant-radio-checked .ant-radio-inner {
      @apply border-4 after:hidden;
    }
  `]
})
export class NzDemoRadioEnComponent {
}



import { Component } from '@angular/core';

@Component({
  selector: 'switch',
  template:`
    <nz-switch [(ngModel)]="switchValue"></nz-switch>
  `,

  styles: [`
    :host ::ng-deep nz-switch .ant-switch{
      @apply bg-normal dark:bg-white/10;
    }
    :host ::ng-deep nz-switch .ant-switch.ant-switch-checked{
      @apply bg-primary;
    }
  `]
})

export class SwitchComponent{
  //Switch
  switchValue = false;
}

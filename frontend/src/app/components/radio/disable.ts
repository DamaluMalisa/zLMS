import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-radio-disable',
  template: `
    <div>
      <label class="[&>span]:dark:text-white/[.87] opacity-[.40]" nz-radio [nzDisabled]="disabled">Disabled</label>
      <br />
      <label class="[&>span]:dark:text-white/[.87] opacity-[.40]" nz-radio [nzDisabled]="disabled" [ngModel]="true">Disabled</label>
      <br />
      <br />
      <button nz-button nzType="primary" (click)="disabled = !disabled">Toggle disabled</button>
    </div>
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
export class NzDemoRadioDisableComponent {
  disabled = true;
}

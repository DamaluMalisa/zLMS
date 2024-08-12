import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'nz-demo-list-basic',
  template: `
    <ul class="border-normal dark:border-white/10 rounded-6" nz-list [nzDataSource]="data" nzBordered nzSize="large">
      <nz-list-header>Header</nz-list-header>
      <li class="text-dark dark:text-white/60 border-normal dark:border-white/10" nz-list-item *ngFor="let item of data" nzNoFlex>
        <ul nz-list-item-actions>
          <nz-list-item-action>
          </nz-list-item-action>
        </ul>
        {{ item }}
      </li>
      <nz-list-footer class="text-dark dark:text-white/[.87]">Footer</nz-list-footer>
    </ul>
  `,
  styles: [`
    :host ::ng-deep .ant-list-split .ant-list-header{
      @apply border-normal dark:border-white/10 text-dark dark:text-white/[.87];
    }
  `]
})
export class NzDemoListBasicComponent {
  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];

  constructor(public msg: NzMessageService) {}
}

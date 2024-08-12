import { Component } from '@angular/core';
import { NzCascaderOption } from 'ng-zorro-antd/cascader';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    disabled: true,
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-cascader-disabled',
  template: `
    <nz-cascader [nzOptions]="nzOptions" [(ngModel)]="values" (ngModelChange)="onChanges($event)"> </nz-cascader>
  `,
  styles: [
    `
      :host ::ng-deep .ant-select:not(.ant-select-customize-input) .ant-select-selector{
        @apply h-[44px] px-[20px] border-normal dark:bg-white/10 dark:border-white/10 rounded-4 capitalize;
      }
      :host ::ng-deep .ant-select-single:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input{
        @apply h-[44px] px-[20px];
      }
      :host ::ng-deep .ant-select-single .ant-select-selector .ant-select-selection-placeholder{
        @apply flex items-center;
      }
    `
  ]
})
export class NzDemoCascaderDisabledComponent {
  nzOptions: NzCascaderOption[] = options;
  values: string[] | null = null;

  onChanges(values: string[]): void {
    console.log(values, this.values);
  }
}

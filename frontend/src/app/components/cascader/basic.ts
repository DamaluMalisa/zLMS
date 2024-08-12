// tslint:disable:no-any
import { Component, OnInit } from '@angular/core';

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

const otherOptions = [
  {
    value: 'fujian',
    label: 'Fujian',
    children: [
      {
        value: 'xiamen',
        label: 'Xiamen',
        children: [
          {
            value: 'Kulangsu',
            label: 'Kulangsu',
            isLeaf: true
          }
        ]
      }
    ]
  },
  {
    value: 'guangxi',
    label: 'Guangxi',
    children: [
      {
        value: 'guilin',
        label: 'Guilin',
        children: [
          {
            value: 'Lijiang',
            label: 'Li Jiang River',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-cascader-basic',
  template: `
    <nz-cascader [nzOptions]="nzOptions" [(ngModel)]="values" (ngModelChange)="onChanges($event)"></nz-cascader>
    &nbsp;
    <a href="javascript:;" (click)="changeNzOptions()" class="change-options">
      Change Options
    </a>
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
      :host ::ng-deep .ant-select-dropdown .ant-cascader-menu{
        @apply dark:border-white/10;
      }
      :host ::bg-deep .ant-select-dropdown .ant-cascader-menu-item{
        @apply dark:text-white/[.87];
      }
    `
  ]
})
export class NzDemoCascaderBasicComponent implements OnInit {
  nzOptions: any[] | null = null;
  values: any[] | null = null;

  ngOnInit(): void {
    setTimeout(() => {
      this.nzOptions = options;
    }, 100);
  }

  changeNzOptions(): void {
    if (this.nzOptions === options) {
      this.nzOptions = otherOptions;
    } else {
      this.nzOptions = options;
    }
  }

  onChanges(values: any): void {
    console.log(values, this.values);
  }
}

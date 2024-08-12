import { Component } from '@angular/core';
import { NzCascaderOption } from 'ng-zorro-antd/cascader';

const provinces = [
  {
    value: 'zhejiang',
    label: 'Zhejiang'
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu'
  }
];

const cities: { [key: string]: Array<{ value: string; label: string; isLeaf?: boolean }> } = {
  zhejiang: [
    {
      value: 'hangzhou',
      label: 'Hangzhou'
    },
    {
      value: 'ningbo',
      label: 'Ningbo',
      isLeaf: true
    }
  ],
  jiangsu: [
    {
      value: 'nanjing',
      label: 'Nanjing'
    }
  ]
};

const scenicspots: { [key: string]: Array<{ value: string; label: string; isLeaf?: boolean }> } = {
  hangzhou: [
    {
      value: 'xihu',
      label: 'West Lake',
      isLeaf: true
    }
  ],
  nanjing: [
    {
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
      isLeaf: true
    }
  ]
};

@Component({
  selector: 'nz-demo-cascader-lazy',
  template: `
    <nz-cascader [(ngModel)]="values" [nzLoadData]="loadData" (ngModelChange)="onChanges($event)"> </nz-cascader>
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
export class NzDemoCascaderLazyComponent {
  values: string[] | null = null;

  onChanges(values: string[]): void {
    console.log(values);
  }

  /** load data async execute by `nzLoadData` method */
  loadData(node: NzCascaderOption, index: number): PromiseLike<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (index < 0) {
          // if index less than 0 it is root node
          node.children = provinces;
        } else if (index === 0) {
          node.children = cities[node.value];
        } else {
          node.children = scenicspots[node.value];
        }
        resolve();
      }, 1000);
    });
  }
}

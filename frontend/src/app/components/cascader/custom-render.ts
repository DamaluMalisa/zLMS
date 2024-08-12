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
            code: 752100,
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        code: '315000',
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
            code: 453400,
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-cascader-custom-render',
  template: `
    <nz-cascader [nzLabelRender]="renderTpl" [nzOptions]="nzOptions" [(ngModel)]="values" (ngModelChange)="onChanges($event)">
    </nz-cascader>

    <ng-template #renderTpl let-labels="labels" let-selectedOptions="selectedOptions">
      <ng-container *ngFor="let label of labels; let i = index; let isLast = last">
        <span *ngIf="!isLast">{{ label }} / </span>
        <span *ngIf="isLast">
          {{ label }} (<a href="javascript:;" (click)="handleAreaClick($event, label, selectedOptions[i])">
            {{ selectedOptions[i].code }} </a
          >)
        </span>
      </ng-container>
    </ng-template>
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
export class NzDemoCascaderCustomRenderComponent {
  nzOptions: NzCascaderOption[] = options;
  values: string[] | null = null;

  onChanges(values: string[]): void {
    console.log(values, this.values);
  }

  handleAreaClick(e: Event, label: string, option: NzCascaderOption): void {
    e.preventDefault();
    e.stopPropagation();
    console.log('clicked "', label, '"', option);
  }
}

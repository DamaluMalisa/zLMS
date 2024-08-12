import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-collapse-borderless',
  template: `
    <nz-collapse class="bg-transparent" [nzBordered]="false">
      <nz-collapse-panel class="{{collapsePanelClass}}" *ngFor="let panel of panels" [nzHeader]="panel.name" [nzActive]="panel.active">
        <p class="text-[15px] font-normal text-light dark:text-white/60">{{ panel.name }} content</p>
      </nz-collapse-panel>
    </nz-collapse>
  `,
  styles: [`
  :host ::ng-deep .ant-collapse > .ant-collapse-item > .ant-collapse-header{
    @apply text-15 font-normal text-dark/[.85] dark:text-white/[.87];
  }
  :host ::ng-deep .ant-collapse-content > .ant-collapse-content-box{
    @apply px-6 pt-5 pb-[30px] #{!important};
  }
  :host ::ng-deep .ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow{
    @apply text-[9px] text-light dark:text-white/60;
  }
  :host ::ng-deep .ant-collapse-borderless > .ant-collapse-item{
    @apply border-b border-regular dark:border-white/10;
  }
`]
})
export class NzDemoCollapseBorderlessComponent {
  collapsePanelClass: string = 'mb-1 font-medium text-dark bg-transparent dark:text-white/[.87] text-15 [&>.ant-collapse-content]:border-none [&>.ant-collapse-header]:px-[20px] [&>.ant-collapse-header]:py-[12px]';
  panels = [
    {
      active: true,
      disabled: false,
      name: 'This is panel header 1',
      childPannel: [
        {
          active: false,
          disabled: true,
          name: 'This is panel header 1-1'
        }
      ]
    },
    {
      active: false,
      disabled: true,
      name: 'This is panel header 2'
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 3'
    }
  ];
}

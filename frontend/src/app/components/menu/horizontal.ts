import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-menu-horizontal',
  template: `
    <ul nz-menu nzMode="horizontal">
      <li nz-menu-item nzSelected>
        <i nz-icon nzType="mail"></i>
        Navigation One
      </li>
      <li nz-menu-item nzDisabled>
        <i nz-icon nzType="appstore"></i>
        Navigation Two
      </li>
      <li nz-submenu nzTitle="Navigation Three - Submenu" nzIcon="setting">
        <ul>
          <li nz-menu-group nzTitle="Item 1">
            <ul>
              <li nz-menu-item>Option 1</li>
              <li nz-menu-item>Option 2</li>
            </ul>
          </li>
          <li nz-menu-group nzTitle="Item 2">
            <ul>
              <li nz-menu-item>Option 3</li>
              <li nz-menu-item>Option 4</li>
              <li nz-submenu nzTitle="Sub Menu">
                <ul>
                  <li nz-menu-item nzDisabled>Option 5</li>
                  <li nz-menu-item>Option 6</li>
                </ul>
              </li>
              <li nz-submenu nzDisabled nzTitle="Disabled Sub Menu">
                <ul>
                  <li nz-menu-item>Option 5</li>
                  <li nz-menu-item>Option 6</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li nz-menu-item>
        <a href="https://ng.ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
      </li>
    </ul>
  `,
  styles  : [`
    :host ::ng-deep .ant-menu{
      @apply bg-transparent;
    }
    :host ::ng-deep .ant-menu-horizontal > .ant-menu-item,
    :host ::ng-deep .ant-menu-horizontal > .ant-menu-submenu{
      @apply inline-flex items-center gap-[8px];
    }
    :host ::ng-deep .ant-menu-item,
    :host ::ng-deep .ant-menu-submenu-title{
      @apply flex items-center;
    }
    
    :host ::ng-deep .ant-menu-item-disabled > .ant-menu-submenu-title,
    :host ::ng-deep .ant-menu-submenu-disabled > .ant-menu-submenu-title,
    :host ::ng-deep .ant-menu-item-disabled,
    :host ::ng-deep .ant-menu-submenu-disabled{
      @apply opacity-[.8] dark:text-white/[.87] #{!important};
    }
    :host ::ng-deep .ant-menu-submenu .ant-menu-submenu-title .anticon{
      @apply text-current;
    }
  `]
})
export class NzDemoMenuHorizontalComponent {}

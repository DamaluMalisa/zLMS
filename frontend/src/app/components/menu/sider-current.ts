import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-menu-sider-current',
  template: `
    <ul nz-menu nzMode="inline" style="width: 240px;">
      <li nz-submenu [(nzOpen)]="openMap.sub1" (nzOpenChange)="openHandler('sub1')" nzTitle="Navigation One" nzIcon="mail">
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
            </ul>
          </li>
        </ul>
      </li>
      <li nz-submenu [(nzOpen)]="openMap.sub2" (nzOpenChange)="openHandler('sub2')" nzTitle="Navigation Two" nzIcon="appstore">
        <ul>
          <li nz-menu-item>Option 5</li>
          <li nz-menu-item>Option 6</li>
          <li nz-submenu nzTitle="Submenu">
            <ul>
              <li nz-menu-item>Option 7</li>
              <li nz-menu-item>Option 8</li>
            </ul>
          </li>
        </ul>
      </li>
      <li nz-submenu [(nzOpen)]="openMap.sub3" (nzOpenChange)="openHandler('sub3')" nzTitle="Navigation Three" nzIcon="setting">
        <ul>
          <li nz-menu-item>Option 9</li>
          <li nz-menu-item>Option 10</li>
          <li nz-menu-item>Option 11</li>
        </ul>
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
export class NzDemoMenuSiderCurrentComponent {
  openMap: { [name: string]: boolean } = {
    sub1: true,
    sub2: false,
    sub3: false
  };

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }
}

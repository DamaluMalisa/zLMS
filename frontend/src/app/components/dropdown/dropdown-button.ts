import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-dropdown-dropdown-button',
  template: `
    <div class="flex items-center flex-wrap gap-[10px]">
    <nz-button-group>
      <button nz-button (click)="log()">DropDown</button>
      <button nz-button nz-dropdown [nzDropdownMenu]="menu1" nzPlacement="bottomRight">
        <i nz-icon nzType="ellipsis"></i>
      </button>
    </nz-button-group>
    <nz-button-group>
      <button nz-button (click)="log()">DropDown</button>
      <button nz-button nz-dropdown [nzDropdownMenu]="menu2" nzPlacement="bottomRight">
        <i nz-icon nzType="user"></i>
      </button>
    </nz-button-group>
    <nz-button-group>
      <button nz-button disabled>DropDown</button>
      <button nz-button disabled nz-dropdown [nzDropdownMenu]="menu3" nzPlacement="bottomRight">
        <i nz-icon nzType="ellipsis"></i>
      </button>
    </nz-button-group>
    <button class="border-normal dark:border-white/10 bg-transparent  text-dark dark:text-white/[.87] flex items-center justify-center h-[38px] rounded-4" nz-button nz-dropdown [nzDropdownMenu]="menu4">
      Button
      <i nz-icon nzType="down"></i>
    </button>
    </div>
    <nz-dropdown-menu #menu1="nzDropdownMenu">
      <ul class="{{ulClass}}" nz-menu>
        <li class="{{liClass}}" nz-menu-item>menu1 1st menu item</li>
        <li class="{{liClass}}" nz-menu-item>menu1 2nd menu item</li>
        <li class="{{liClass}}" nz-menu-item>menu1 3rd menu item</li>
      </ul>
    </nz-dropdown-menu>
    <nz-dropdown-menu #menu2="nzDropdownMenu">
      <ul class="{{ulClass}}" nz-menu>
        <li class="{{liClass}}" nz-menu-item>menu2 1st menu item</li>
        <li class="{{liClass}}" nz-menu-item>menu2 2nd menu item</li>
        <li class="{{liClass}}" nz-menu-item>menu2 3rd menu item</li>
      </ul>
    </nz-dropdown-menu>
    <nz-dropdown-menu #menu3="nzDropdownMenu">
      <ul class="{{ulClass}}" nz-menu>
        <li class="{{liClass}}" nz-menu-item>menu3 1st menu item</li>
        <li class="{{liClass}}" nz-menu-item>menu3 2nd menu item</li>
        <li class="{{liClass}}" nz-menu-item>menu3 3rd menu item</li>
      </ul>
    </nz-dropdown-menu>
    <nz-dropdown-menu #menu4="nzDropdownMenu">
      <ul class="{{ulClass}}" nz-menu>
        <li class="{{liClass}}" nz-menu-item>menu4 1st menu item</li>
        <li class="{{liClass}}" nz-menu-item>menu4 2nd menu item</li>
        <li class="{{liClass}}" nz-menu-item>menu4 3rd menu item</li>
      </ul>
    </nz-dropdown-menu>
  `,
  styles: [
    `
     :host ::ng-deep .ant-btn-group > .ant-btn {
      @apply border-normal dark:border-white/10 bg-transparent  text-dark dark:text-white/[.87] flex items-center justify-center h-[38px];
     }
     :host ::ng-deep .ant-btn-group > .ant-btn:first-child{
      @apply rounded-s-4;
     }
     :host ::ng-deep .ant-btn-group > .ant-btn:last-child{
      @apply rounded-e-4;
     }
    `
  ]
})
export class NzDemoDropdownDropdownButtonComponent {
  ulClass = 'block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4 capitalize';
  liClass = 'flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87]';

  log(): void {
    console.log('click dropdown button');
  }
}

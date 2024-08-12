import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-dropdown-event',
  template: `
    <a nz-dropdown [nzDropdownMenu]="menu">
      Hover me, Click menu item
      <i nz-icon nzType="down"></i>
    </a>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul class="{{ulClass}}" nz-menu>
        <li class="{{liClass}}" nz-menu-item (click)="log('1st menu item')">1st menu item</li>
        <li class="{{liClass}}" nz-menu-item (click)="log('2nd menu item')">2nd menu item</li>
        <li class="{{liClass}}" nz-menu-item (click)="log('3rd menu item')">3rd menu item</li>
      </ul>
    </nz-dropdown-menu>
  `
})
export class NzDemoDropdownEventComponent {
  ulClass = 'block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4 capitalize';
  liClass = 'flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87] capitalize';
  log(data: string): void {
    console.log(data);
  }
}

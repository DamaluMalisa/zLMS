import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-dropdown-placement',
  template: `
    <div class="flex items-center flex-wrap gap-[10px]">
      <ng-container *ngFor="let position of listOfPosition">
        <button class="border-normal dark:border-white/10 bg-transparent  text-dark dark:text-white/[.87] flex items-center justify-center h-[38px] rounded-4 capitalize" nz-button nz-dropdown [nzDropdownMenu]="menu" [nzPlacement]="position">{{ position }}</button>
        <nz-dropdown-menu #menu="nzDropdownMenu">
          <ul class="{{ulClass}}" nz-menu>
            <li class="{{liClass}}" nz-menu-item>1st menu item length</li>
            <li class="{{liClass}}" nz-menu-item>2nd menu item length</li>
            <li class="{{liClass}}" nz-menu-item>3rd menu item length</li>
          </ul>
        </nz-dropdown-menu>
      </ng-container>
    </div>
  `,
})
export class NzDemoDropdownPlacementComponent {
  ulClass = 'block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4 capitalize';
  liClass = 'flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87] capitalize';
  listOfPosition: string[] = ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'];
}

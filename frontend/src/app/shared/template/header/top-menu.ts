import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { ROUTES } from './top-menu-routes.config';

@Component({
  selector: 'app-menu',
  template: `
    <div class="hexadash-top-menu position-relative h-full items-center max-lg:hidden">
      <ul class="ps-[30px] flex items-center flex-wrap">
        <ng-container *ngFor="let route of menuItems">
          <ng-container *ngIf="route.submenu.length > 0; else menuLink">
            <li class="has-subMenu text-[14px] flex items-center font-medium 3xl:py-[25px] max-3xl:py-[6px] text-theme-gray dark:text-white/[.87] relative gap-[6px]" [ngClass]="{ 'no-link-submenu': hasBlankPath(route.submenu) }">
              {{ route.title }}
              <span class="text-[10px]" nz-icon nzType="down" nzTheme="outline"></span>
              <ul class="subMenu">
                <ng-container *ngFor="let subroute of route.submenu">
                  <ng-container *ngIf="subroute.submenu.length > 0; else subMenuLink">
                    <li [ngClass]="{ 'has-blank-path': hasBlankPath(subroute.submenu) }">
                      <a [routerLink]="subroute.path" *ngIf="subroute.path" routerLinkActive="active">{{ subroute.title }}</a>
                      <a *ngIf="!subroute.path">{{ subroute.title }}</a>
                      <span class="parent-icon" *ngIf="route.icon">
                        <span nz-icon nzType="down" nzTheme="outline"></span>
                      </span>
                      <ul class="subMenu">
                        <ng-container *ngFor="let subSubroute of subroute.submenu">
                          <li>
                            <a [routerLink]="subSubroute.path" routerLinkActive="active">
                              <i nz-icon [nzType]="subSubroute.icon"></i>
                              <span>{{ subSubroute.title }}</span>
                            </a>
                          </li>
                        </ng-container>
                      </ul>
                    </li>
                  </ng-container>
                  <ng-template #subMenuLink>
                    <li [ngClass]="{ 'no-link': !subroute.path }">
                      <a [routerLink]="subroute.path" *ngIf="subroute.path" routerLinkActive="active">{{ subroute.title }}</a>
                      <a *ngIf="!subroute.path">{{ subroute.title }}</a>
                    </li>
                  </ng-template>
                </ng-container>
              </ul>
            </li>
          </ng-container>
          <ng-template #menuLink>
            <li [ngClass]="{ 'no-link': !route.path }">
              <a [routerLink]="route.path" routerLinkActive="active">
                <span class="parent-icon">
                  <i class="parent-icon-class" [ngClass]="route.icon"></i>
                </span>
                <span>{{ route.title }}</span>
              </a>
            </li>
          </ng-template>
        </ng-container>
      </ul>
    </div>
  `,
  styleUrls: ['./top-menu.scss'],
})
export class MenuComponent {
  routes = ROUTES;
  public menuItems: any[];


  ngOnInit(): void {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }

  hasBlankPath(submenu: any[]): boolean {
    return submenu.some((subroute) => !subroute.path);
  }
}

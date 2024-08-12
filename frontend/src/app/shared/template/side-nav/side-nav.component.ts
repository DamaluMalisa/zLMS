import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ROUTES } from './side-nav-routes.config';
import { ThemeConstantService } from '../../services/theme-constant.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './side-nav.component.html'
})
export class SideNavComponent implements OnInit, AfterViewInit {

  public menuItems: any[];
  isFolded: boolean;
  isSideNavDark: boolean;
  isExpand: boolean;

  constructor(
    private themeService: ThemeConstantService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const userRoles = this.authService.user.roles; // Assuming user roles are stored in `this.authService.user.roles`
    this.menuItems = ROUTES.filter(menuItem => this.isRouteAllowed(menuItem, userRoles));
    console.log(this.menuItems);
    this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
    this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);
    this.themeService.isSideNavDarkChanges.subscribe(isDark => this.isSideNavDark = isDark);
  }

  ngAfterViewInit(): void {
    /* Collapsed Menu dropdown */
    let submenus = document.querySelectorAll('.ant-menu li.ant-menu-submenu');
    let direction = document.querySelector('html').getAttribute('dir');
    submenus.forEach(item => {
      item.addEventListener('mouseover', function () {
        let menuItem = this;
        let menuItemRect = menuItem.getBoundingClientRect();
        let submenuWrapper = menuItem.querySelector('ul.ant-menu-sub');
        submenuWrapper.style.top = `${menuItemRect.top}px`;
        if (direction === 'ltr') {
          submenuWrapper.style.left = `${menuItemRect.left + Math.round(menuItem.offsetWidth * 0.75) + 10}px`;
        } else if (direction === 'rtl') {
          submenuWrapper.style.right = `${Math.round(menuItem.offsetWidth * 0.75) + 10}px`;
        }
      });
    });
  }

  closeMobileMenu(): void {
    if (window.innerWidth < 992) {
      this.isFolded = false;
      this.isExpand = !this.isExpand;
      this.themeService.toggleExpand(this.isExpand);
      this.themeService.toggleFold(this.isFolded);
    }
  }

  private isRouteAllowed(menuItem: any, userRoles: string[]): boolean {
    if (!menuItem.allowedRoles) {
      return true; // No role restrictions
    }
    return menuItem.allowedRoles.some(role => userRoles.includes(role));
  }
}

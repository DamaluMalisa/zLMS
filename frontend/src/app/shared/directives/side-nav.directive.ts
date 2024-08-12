import { Directive } from '@angular/core';

@Directive({
    selector: '[sideNav]'
})
export class SideNavDirective {
  constructor() { }

  ngAfterViewChecked() {
    let sideNavMenuItems = document.querySelectorAll('.side-nav .side-nav-menu:not(.ant-menu-inline-collapsed) li a');
    sideNavMenuItems.forEach(menuItem => {
        menuItem.removeEventListener('click', handleMenuItemClick);
        menuItem.addEventListener('click', handleMenuItemClick);
    });
  }

}

function handleMenuItemClick(event) {
  let parent = this.parentNode;
  if (parent.classList.contains("ant-menu-submenu-open")) {
    let dropdownMenu = parent.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      slideUp(dropdownMenu, 200, function() {
        parent.classList.remove("ant-menu-submenu-open");
      });
    }
  } else {
    let parentMenu = parent.parentNode;
    let openSubmenu = parentMenu.querySelector('li.ant-menu-submenu-open');
    if (openSubmenu) {
      let openDropdownMenu = openSubmenu.querySelector('.dropdown-menu');
      if (openDropdownMenu) {
        let height = openDropdownMenu.getAttribute('data-height');
        slideUp(openDropdownMenu, 100, function() {
          openSubmenu.querySelector('a').classList.remove('ant-menu-submenu-open');
          openSubmenu.classList.remove("ant-menu-submenu-open");
        }, height);
      }
    }
    let dropdownMenu = parent.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      let height = dropdownMenu.getAttribute('data-height');
      slideDown(dropdownMenu, 100, function() {
        parent.classList.add("ant-menu-submenu-open");
      }, height);
    }
  }
}


function slideUp(element, duration, callback = undefined, height = undefined) {
  if (!element) return;
  if (!height) {
      height = element.offsetHeight + "px";
      element.setAttribute('data-height', height);
  }
  element.style.height = height;
  element.style.transitionProperty = 'height, margin, padding';
  element.style.transitionDuration = duration + 'ms';
  element.offsetHeight; // Trigger a reflow
  element.style.overflow = 'hidden';
  element.style.height = 0;
  element.style.paddingTop = 0;
  element.style.paddingBottom = 0;
  element.style.marginTop = 0;
  element.style.marginBottom = 0;
  window.setTimeout(function() {
      element.style.display = 'none';
      element.style.removeProperty('height');
      element.style.removeProperty('padding-top');
      element.style.removeProperty('padding-bottom');
      element.style.removeProperty('margin-top');
      element.style.removeProperty('margin-bottom');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
      if (typeof callback === 'function') callback();
  }, duration);
}
function slideDown(element, duration, callback = undefined, height = undefined) {
  if (!element) return;
  if (!height) {
      element.style.removeProperty('display');
      let display = window.getComputedStyle(element).display;
      if (display === "none") display = "block";
      element.style.display = display;
      height = element.offsetHeight + 'px';
      element.setAttribute('data-height', height);
      element.style.display = 'none';
  }
  element.style.removeProperty('display');
  element.style.height = height;
  element.style.overflow = 'hidden';
  element.style.paddingTop = 0;
  element.style.paddingBottom = 0;
  element.style.marginTop = 0;
  element.style.marginBottom = 0;
  element.offsetHeight; // Trigger a reflow
  element.style.transitionProperty = "height, margin, padding";
  element.style.transitionDuration = duration + 'ms';
  element.style.height = height;
  element.style.removeProperty('padding-top');
  element.style.removeProperty('padding-bottom');
  element.style.removeProperty('margin-top');
  element.style.removeProperty('margin-bottom');
  window.setTimeout(function() {
      element.style.removeProperty('height');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
      if (typeof callback === 'function') callback();
  }, duration);
}

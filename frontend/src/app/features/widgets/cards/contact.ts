import { Component } from '@angular/core';
import { AppsService } from '../../../shared/services/apps.service';
import { ContactGrid } from '../../../shared/interfaces/contacts-grid.type';

@Component({
selector: 'feature-contact',
template: `
<div  nz-row [nzGutter]="25">
  <div *ngFor="let item of ContactGrid | slice:0:4"  nz-col nzXs="24" nzMd="8" nzXXl="6" class="mb-[25px]">
    <div class="bg-white dark:bg-white/10 shadow-[0_5px_20px_rgba(173,181,217,0.01)] p-[25px] rounded-10 relative">
      <figure class="m-0 text-center">
        <img class="inline-block rounded-full w-[120px] h-[120px]" src="assets/images/avatars/{{item.avatar}}" alt="img">
        <figcaption class="mt-[20px]">
          <h3 class="text-[18px] font-semibold mb-0 text-dark dark:text-white/[.87]">{{item.name}}</h3>
          <span class="text-[#8288a4] dark:text-white/60 text-[14px]">{{item.rule}}</span>
        </figcaption>
      </figure>
      <div class="mt-[20px] dark:border-white/10 border-t-1 pt-[25px] border-regular" *ngIf="item.user.length > 0">
        <ul class="flex flex-col flex-wrap gap-[14px]">
          <li *ngFor="let item of item.user">
            <div  class="flex items-center text-[#8288a4] dark:text-white/60 gap-[12px] text-[14px] capitalize" *ngIf="item.type == 'call'">
              <span class="text-light dark:text-white/60" nz-icon nzType="{{item.icon}}" nzTheme="outline"></span>
              {{item.name}}
            </div>
            <div  class="flex items-center text-[#8288a4] dark:text-white/60 gap-[12px] text-[14px] capitalize" *ngIf="item.type == 'mail'">
              <span class="text-light dark:text-white/60" nz-icon nzType="{{item.icon}}" nzTheme="outline"></span>
            {{item.name}}
            </div>
            <div  class="flex items-center text-[#8288a4] dark:text-white/60 gap-[12px] text-[14px] capitalize" *ngIf="item.type == 'skype'">
              <span class="text-light dark:text-white/60" nz-icon nzType="{{item.icon}}" nzTheme="outline"></span>
            {{item.name}}
            </div>
            <div  class="flex items-center text-[#8288a4] dark:text-white/60 gap-[12px] text-[14px] capitalize" *ngIf="item.type == 'map'">
              <svg-icon class="[&>svg]:w-[14px] [&>svg]:h-[14px] text-light dark:text-white/60"
                src="assets/images/svg/feather/{{item.icon}}.svg"></svg-icon>
                {{item.name}}
            </div>
          </li>
          </ul>
          </div>
          <button nz-button class="bg-transparent border-none absolute top-[16px] text-light dark:text-white/60 ltr:right-[26px] rtl:left-[26px] inline-flex items-center justify-center p-0" nz-dropdown nzTrigger="click" [nzDropdownMenu]="menu">
            <svg-icon
              class=" text-light-extra dark:text-white/60 dark:group-hover:text-white/[.87] w-[24px] h-[24px] [&>svg]:w-[24px] [&>svg]:h-[24px]"
              src="assets/images/svg/feather/more-horizontal.svg"></svg-icon>
          </button>
          <nz-dropdown-menu #menu="nzDropdownMenu">
            <ul
              class="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4 capitalize"
              nz-menu nzSelectable>
              <li
                class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87]"
                nz-menu-item>
                view
              </li>
              <li
                class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87]"
                nz-menu-item>
                edit
              </li>
              <li
                class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87]"
                nz-menu-item>
                delete
              </li>
            </ul>
          </nz-dropdown-menu>
        </div>
  </div>
</div>
`,
})
export class FeaturesContactComponent {
  ContactGridRaw: ContactGrid[];
  ContactGrid: ContactGrid[];

  constructor (private ContactGridSvc: AppsService) {}

  ngOnInit(): void {
    this.ContactGridSvc.getContactGridJson().subscribe(data => {
        this.ContactGridRaw = data;
        this.ContactGrid = data;
    })
  }
}

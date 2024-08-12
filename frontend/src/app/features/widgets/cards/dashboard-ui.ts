import {
  Component
} from '@angular/core';
import {
  AppsService
} from '../../../shared/services/apps.service';
import {
  ProjectList
} from '../../../shared/interfaces/project-list.type';

@Component({
  selector: 'dashboard-ui',
  template: `
<div nz-row [nzGutter]="25">
  <div *ngFor="let item of projectList | slice:0:3" nz-col nzXs="24" nzXXl="8" class="mb-[25px]">
    <div class="bg-white dark:bg-white/10 rounded-[10px]">
      <div class="pt-[30px] px-[30px]">
        <div class="flex items-start justify-between">
          <h1 class="flex flex-wrap items-center -m-0.5 text-base">
            <a [routerLink]="['/apps/projects/project-details']"
              class="m-0.5 ltr:mr-[11px] rtl:ml-[11px] text-dark dark:text-white/[87] text-15 font-medium capitalize">
              {{item.project}}
            </a>
            <span class="uppercase text-[10px]">
              <nz-tag class="mb-0 rounded-[3px] font-bold text-white text-[10px] bg-warning border-warning"
                *ngIf="item.status == 'in progress'">{{item.status}}</nz-tag>
              <nz-tag class="mb-0 rounded-[3px] font-bold text-white text-[10px] bg-success border-success"
                *ngIf="item.status == 'completed'">{{item.status}}</nz-tag>
              <nz-tag class="mb-0 rounded-[3px] font-bold text-white text-[10px] bg-primary border-primary"
                *ngIf="item.status == 'early'">{{item.status}}</nz-tag>
              <nz-tag class="mb-0 rounded-[3px] font-bold text-white text-[10px] bg-danger border-danger"
                *ngIf="item.status == 'late'">{{item.status}}</nz-tag>
            </span>
          </h1>
          <a nz-dropdown nzTrigger="click" [nzDropdownMenu]="menu">
            <svg-icon
              class=" text-light dark:text-white/60 dark:group-hover:text-white/[.87] w-[24px] h-[24px] [&>svg]:w-[24px] [&>svg]:h-[24px]"
              src="assets/images/svg/feather/more-horizontal.svg"></svg-icon>
          </a>
          <nz-dropdown-menu #menu="nzDropdownMenu">
            <ul
              class="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4 capitalize"
              nz-menu nzSelectable>
              <li
                class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87] gap-[6px]"
                nz-menu-item>
                view
              </li>
              <li
                class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87] gap-[6px]"
                nz-menu-item>
                edit
              </li>
              <li
                class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87] gap-[6px]"
                nz-menu-item>
                leave
              </li>
              <li
                class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87] gap-[6px]"
                nz-menu-item>
                delete
              </li>
            </ul>
          </nz-dropdown-menu>
        </div>
        <p class="text-body dark:text-white/60 mt-[15px] mb-[25px]">Adipisicing eu magna velit est exercitation et
          consequat
          Lorem laboris</p>
        <div class="flex items-center mb-[15px] gap-x-[30px]">
          <div class="flex flex-col"><span class="text-xs mb-0.5 text-light-extra dark:text-white/60">Start
              Date</span><strong class="font-medium text-body dark:text-white/60">{{item.startDate}}</strong></div>
          <div class="flex flex-col"><span
              class="text-xs mb-0.5 text-light-extra dark:text-white/60">Deadline</span><strong
              class="font-medium text-body dark:text-white/60">{{item.endDate}}</strong></div>
        </div>
        <nz-progress *ngIf="item.status !== 'Behind'" [nzPercent]="item.progress" nzStatus="active {{item.status}}">
        </nz-progress>
        <nz-progress *ngIf="item.status == 'Behind'" [nzPercent]="item.progress" nzStatus="active {{item.status}}">
        </nz-progress>
        <p class="mt-0.5 text-light-extra dark:text-white/60 text-xs">12/{{item.tasks}} Task Completed</p>
      </div>
      <div class="pt-4 px-[30px] pb-[25px] mt-[17px] border-t border-regular dark:border-white/10">
        <p class="mb-4 text-sm text-light-extra dark:text-white/60">Assigned To</p>
        <div class="flex flex-wrap items-center gap-[6px] capitalize">
          <a routerLinkActive="router-link-active" class="w-[35px] min-w-[35px] h-[35px] rounded-full object-cover"
            *ngFor="let item of (item.member ? item.member.slice(0,2): [])">
            <nz-avatar [nzSrc]="item.avatar" nz-tooltip [nzTooltipTitle]="item.name"></nz-avatar>
          </a>
          <a *ngIf="item.member.length > 2">
            <nz-avatar
              class="text-dark bg-regularBG dark:bg-white/10 dark:text-white/[.87] font-medium text-[12px] border-[#e4e4e4] dark:border-white/10"
              [nzText]="'+' + [item.member.length - 2].toString()" nz-tooltip
              [nzTooltipTitle]="[item.member.length - 2].toString() + ' More'"></nz-avatar>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
`,
})
export class DashboardUIComponent {
  projectListRaw: ProjectList[];
  projectList: ProjectList[];

  constructor(private projectListSvc: AppsService) {}

  ngOnInit(): void {
    this.projectListSvc.getProjectListJson().subscribe(data => {
      this.projectListRaw = data;
      this.projectList = data;
    })

  }
}

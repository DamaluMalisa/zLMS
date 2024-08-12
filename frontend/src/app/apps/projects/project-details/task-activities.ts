import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import activity from '../../../../assets/data/apps/activites.json';
import list from '../../../../assets/data/apps/user-list.json';
@Component({
selector: 'task-activities',
template: `
  <div class="bg-white dark:bg-white/10 rounded-[10px]">
  <ul class="flex items-center gap-x-[30px] px-[25px] py-0 border-b border-regular dark:border-white/10">
    <li class="relative py-5 text-sm font-medium after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-0 after:w-full after:h-[1px] text-body dark:text-white/60 [&.active]:text-primary [&.active]:after:bg-primary cursor-pointer duration-300 ease-in-out" [class.active]="activeTab === 1" (click)="showTab(1)">
      Task List
    </li>
    <li class="relative py-5 text-sm font-medium after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-0 after:w-full after:h-[1px] text-body dark:text-white/60 [&.active]:text-primary [&.active]:after:bg-primary cursor-pointer duration-300 ease-in-out" [class.active]="activeTab === 2" (click)="showTab(2)">
      Activities
    </li>
  </ul>
  <div class="w-full pt-[10px] p-[25px]">
    <app-tab class="w-full" [isActive]="activeTab === 1">
      <!-- Content for Tab 1 -->
      <nz-table [nzData]="['']" [nzFrontPagination]="false" [nzShowPagination]="false" [nzScroll]="{ x: '330px' }">
        <tbody cdkDropList (cdkDropListDropped)="drop($event)">
          <tr class="group" *ngFor="let item of UserList" cdkDrag>
            <td class="border-none py-[6px] ltr:pl-0 rtl:pr-0 group-hover:bg-transparent w-full text-start">
              <label class="text-[14px] font-normal leading-[17px] text-light dark:text-white/60 capitalize" nz-checkbox nzValue="{{item.id}}">{{item.sub}}</label>
            </td>
            <td class="border-none py-[6px] ltr:pr-0 rtl:pl-0 group-hover:bg-transparent w-full">
              <ul class="flex items-center justify-end">
                <li>
                  <div class="whitespace-nowrap block mx-[10px] text-xs text-light-extra dark:text-white/60 leading-none capitalize">
                    {{ item.duration }}
                  </div>
                </li>
                <li>
                  <div class="block mx-[10px] leading-none w-[30px] h-[30px] rounded-full">
                    <img class="object-cover max-w-full" src="{{item.avatar}}" alt="avatar">
                  </div>
                </li>
                <li>
                  <div class="flex items-center mx-[10px] leading-none text-light-extra dark:text-white/60">
                    <span class="[&>svg]:w-[18px] [&>svg]:h-[18px]" nz-icon nzType="drag" nzTheme="outline"></span>
                  </div>
                </li>
                <li>
                  <a nz-dropdown nzTrigger="click" [nzDropdownMenu]="menu">
                    <svg-icon
                      class=" text-light-extra dark:text-white/60 dark:group-hover:text-white/[.87] w-[20px] h-[20px] [&>svg]:w-[20px] [&>svg]:h-[20px]"
                      src="../../../../assets/images/svg/feather/more-horizontal.svg"></svg-icon>
                  </a>
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
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </nz-table>
      <div class="mt-[12px] mb-[22px]">
        <button nz-button class="inline-flex items-center bg-primary/10 text-primary w-full h-[50px] text-xs font-semibold border-none rounded-[6px] px-[25px]">
          <span nz-icon nzType="plus" nzTheme="outline"></span>
          <span> Add New Task</span>
        </button>
      </div>
    </app-tab>

    <app-tab class="w-full" [isActive]="activeTab === 2">
      <!-- Content for Tab 2 -->
      <perfect-scrollbar>
        <div class="pt-[25px] max-h-[378px]">
          <div class="pb-5 mb-5 border-b border-regular dark:border-white/10 last:border-none last:mb-0"  *ngFor="let group of groupedActivities">
            <div nz-row nzGutter="15">
              <div nz-col nzXXl="3" nzLg="5" nzMd="4" nzSm="5" nzXs="24">
                <div class="flex items-center justify-center flex-col bg-regularBG dark:bg-white/10 h-full border dark:border-white/10 rounded-[10px] min-h-[50px] p-[15px]">
                  <h1 class="mb-0 text-lg font-semibold uppercase text-dark dark:text-white/60">{{ group.day }}</h1>
                  <span class="capitalize text-body dark:text-white/60 ">{{ group.month }}</span>
                </div>
              </div>
              <div class="flex flex-wrap items-center" nz-col nzXXl="21" nzLg="19" nzMd="20" nzSm="19" nzXs="24">
                <div class="flex mb-[25px] last:mb-0 w-full" *ngFor="let activity of group.activities">
                  <div class="flex items-center min-w-[76px] gap-x-[10px]">
                    <div class="flex items-center justify-center w-6 h-6 rounded-full bg-{{ activity.status }}/10 text-{{ activity.status }}">
                      <span class="text-[12px]" nz-icon nzType="{{ activity.icon }}" nzTheme="outline"></span>
                    </div>
                    <img class="w-[30px] h-[30px] rounded-full" src="{{ activity.avatar }}" alt="file">
                  </div>
                  <div>
                    <h1 class="mb-0 -mt-1 text-sm font-medium capitalize text-dark dark:text-white/60">
                      {{ activity.name }}
                      <span class="mx-0.5 text-body dark:text-white/60 font-normal lowercase">{{ activity.work }}</span>
                      {{ activity.obj }}
                    </h1>
                    <p class="mb-0 text-xs capitalize text-light-extra dark:text-white/60">{{ activity.time }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </perfect-scrollbar>
    </app-tab>
  </div>
</div>
`,
styles: [`
  :host ::ng-deep app-tab .ant-checkbox-checked+span {
    @apply line-through;
  }
  :host ::ng-deep app-tab .ant-checkbox-checked::after,
  :host ::ng-deep app-tab .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  :host ::ng-deep app-tab .ant-checkbox:hover .ant-checkbox-inner,
  :host ::ng-deep app-tab .ant-checkbox-input:focus + .ant-checkbox-inner{
    @apply border-success;
  }
  :host ::ng-deep app-tab .ant-checkbox-checked .ant-checkbox-inner{
    @apply bg-success border-success;
  }
`]
})

export class TaskActivitiesComponent {
  activeTab: number = 1;

  // tab
  showTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }

  // checkbox
  log(value: string[]): void {
    console.log(value);
  }

  // drag and drop
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.UserList, event.previousIndex, event.currentIndex);
  }

  UserList = list.UserList;

  UserActivities = activity.UserActivities;
  groupedActivities: any[] = [];
  constructor() {
    this.groupActivities();
  }
  groupActivities() {
    for (const activity of this.UserActivities) {
      const { day, month } = activity;

      const existingGroup = this.groupedActivities.find(
        group => group.day === day && group.month === month
      );

      if (existingGroup) {
        existingGroup.activities.push(activity);
      } else {
        const newGroup = {
          day,
          month,
          activities: [activity]
        };
        this.groupedActivities.push(newGroup);
      }
    }
  }
}

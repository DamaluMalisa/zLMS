import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import items from '../../../../assets/data/global/dropdown.json';

@Component({
  selector: 'task-list',
  template: `
    <div class="bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10 relative ">
      <div
        class="px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto max-sm:mb-[15px]">
        <h1
          class="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-white/[.87]">
          Task Lists</h1>
        <div class="py-[16px]">
          <ul class="flex items-center mb-0">
            <li>
              <button type="button"
                [class]="sellingTab === 'today' ? 'inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md' : 'inline-flex items-center px-3 h-8 text-light dark:text-white/60 hover:text-primary text-13'"
                (click)="handleClick('today')">
                Today
              </button>
            </li>
            <li>
              <button type="button"
                [class]="sellingTab === 'week' ? 'inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md' : 'inline-flex items-center px-3 h-8 text-light dark:text-white/60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'"
                (click)="handleClick('week')">
                Week
              </button>
            </li>
            <li>
              <button type="button"
                [class]="sellingTab === 'month' ? 'inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md' : 'inline-flex items-center px-3 h-8 text-light dark:text-white/60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'"
                (click)="handleClick('month')">
                Month
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="p-[25px] pt-0 pb-[42px]">
        <div *ngFor="let tab of tabData" [class.hidden]="sellingTab !== tab.key">
          <div class="overflow-x-auto w-full" dir="ltr">
            <nz-table [nzData]="taskList?.[sellingTab]" [nzFrontPagination]="false" [nzShowPagination]="false">
              <tbody>
                <tr class="group" *ngFor="let task of taskList?.[sellingTab]">
                  <td
                    class="border-none py-[9px] ltr:pl-0 rtl:pr-0 group-hover:bg-transparent w-full whitespace-nowrap text-start">
                    <label
                      class="text-[15px] font-normal leading-[17px] text-theme-gray dark:text-white/60 capitalize"
                      nz-checkbox [nzValue]="task.id" [(ngModel)]="task.checked">
                      {{ task.sub }}
                    </label>
                  </td>
                  <td class="border-none py-[9px] ltr:pr-0 rtl:pl-0 group-hover:bg-transparent w-full">
                    <a nz-dropdown nzTrigger="click" [nzDropdownMenu]="taskList">
                      <svg-icon
                        class="text-light dark:text-white/60 dark:group-hover:text-white/[.87] w-[20px] h-[20px] [&>svg]:w-[20px] [&>svg]:h-[20px]"
                        src="assets/images/svg/feather/more-horizontal.svg"></svg-icon>
                    </a>
                    <nz-dropdown-menu #taskList="nzDropdownMenu">
                      <ul
                        class="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4 capitalize"
                        nz-menu nzSelectable>
                        <li *ngFor="let item of appItems"
                          class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87]"
                          nz-menu-item>
                          <svg-icon class="text-current w-3.5 h-3.5 me-2 [&>svg]:w-full [&>svg]:h-full"
                            [src]="'assets/images/svg/feather/' + item.icon + '.svg'"></svg-icon>
                          {{ item.name }}
                        </li>
                      </ul>
                    </nz-dropdown-menu>
                  </td>
                </tr>
              </tbody>
            </nz-table>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`

    :host ::ng-deep .ant-checkbox-checked::after,
    :host ::ng-deep .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    :host ::ng-deep .ant-checkbox:hover .ant-checkbox-inner,
    :host ::ng-deep .ant-checkbox-input:focus + .ant-checkbox-inner{
      @apply border-success;
    }
    :host ::ng-deep .ant-checkbox-checked .ant-checkbox-inner{
      @apply bg-success border-success;
    }

    :host ::ng-deep .ant-checkbox-inner{
      @apply w-[18px] h-[18px] after:left-[22%];
    }

  `],
})

export class TaskListComponent implements OnInit {
  appItems = items.appItems;
  taskList: { [key: string]: { id: string, sub: string, checked: boolean }[] };
  taskCheckedStates: { [key: string]: boolean } = {};

  tabData: { key: string; label: string }[];
  sellingTab: string;

  constructor(private http: HttpClient) {
    this.tabData = [
      { key: 'today', label: 'Today' },
      { key: 'week', label: 'Week' },
      { key: 'month', label: 'Month' },
    ];
  }

  ngOnInit() {
    this.loadCheckedStatesFromLocalStorage();
    this.loadSelectedTabFromLocalStorage();
    this.loadJSONData();
    this.sellingTab = 'today';
  }

  loadCheckedStatesFromLocalStorage() {
    const savedData = localStorage.getItem('taskCheckedStates');
    if (savedData) {
      this.taskCheckedStates = JSON.parse(savedData);
    }
  }

  loadSelectedTabFromLocalStorage() {
    const savedTab = localStorage.getItem('selectedTab');
    this.sellingTab = savedTab || 'today';
  }

  loadJSONData() {
    this.http.get('assets/data/apps/task-list.json').subscribe((data: any) => {
      this.taskList = data?.TaskList ?? {};
    });
  }

  handleClick(tab: string): void {
    this.saveCheckedStates();
    this.sellingTab = tab;
    localStorage.setItem('selectedTab', this.sellingTab);
  }

  saveCheckedStates() {
    const tasks = this.taskList[this.sellingTab];
    if (tasks) {
      tasks.forEach(task => {
        this.taskCheckedStates[task.id] = task.checked;
      });
    }

    localStorage.setItem('taskCheckedStates', JSON.stringify(this.taskCheckedStates));
  }
}

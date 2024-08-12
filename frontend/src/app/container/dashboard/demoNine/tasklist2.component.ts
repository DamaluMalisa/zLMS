import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzModalService } from 'ng-zorro-antd/modal';
import { EditModalComponent2 } from './EditModal2.component';
@Component({
  selector: 'task-list2',
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
                [class]="sellingTab === 'all' ? 'inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md' : 'inline-flex items-center px-3 h-8 text-light dark:text-white/60 hover:text-primary text-13'"
                (click)="sellingTab = 'all'">
                All
              </button>
            </li>
            <li>
              <button type="button"
                [class]="sellingTab === 'favorite' ? 'inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md' : 'inline-flex items-center px-3 h-8 text-light dark:text-white/60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'"
                (click)="sellingTab = 'favorite'">
                Favorite
              </button>
            </li>
            <li>
              <button type="button"
                [class]="sellingTab === 'completed' ? 'inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md' : 'inline-flex items-center px-3 h-8 text-light dark:text-white/60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'"
                (click)="sellingTab = 'completed'">
                Completed
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="p-[25px] pt-0 pb-[42px]">
        <div *ngFor="let tab of tabData" [class.hidden]="sellingTab !== tab.key">
          <div class="overflow-auto w-full scrollbar max-h-[210px] min-h-[210px]" dir="ltr">
            <div *ngIf="isTabDataEmpty(tab.key)" class="text-center text-light dark:text-white/60 text-[18px] font-medium min-h-[210px] flex items-center justify-center gap-[6px]">
              Sorry !! No {{ tab.label }} Task Found <span nz-icon [nzType]="'meh'" [nzTheme]="'twotone'" [nzTwotoneColor]="'#fe8f31'"></span>
            </div>
            <nz-table *ngIf="!isTabDataEmpty(tab.key)" [nzData]="taskList?.[tab.key]" [nzFrontPagination]="false" [nzShowPagination]="false">
              <tbody>
                <tr class="group" *ngFor="let task of taskList?.[tab.key]" >
                  <td
                    class="border-none py-[6px] ltr:pl-0 rtl:pr-0 group-hover:bg-transparent w-full whitespace-nowrap text-start">
                    <label
                      class="text-[15px] font-normal leading-[17px] text-theme-gray dark:text-white/60 capitalize [&>.ant-checkbox]:pointer-events-none"
                      nz-checkbox [ngModel]="task.complete" (click)="onCheckboxClick(task)">
                      {{task.sub}}
                    </label>
                  </td>
                  <td class="border-none py-[6px] ltr:pr-0 rtl:pl-0 group-hover:bg-transparent w-full">
                    <ul class="p-0 m-0 flex items-center gap-[15px]">
                      <li>
                        <button nz-button class="flex items-center justify-center bg-transparent border-none shadow-none text-light hover:text-info dark:text-white/60 p-0 w-[30px] h-[30px]" (click)="openEditModal(task)">
                          <span class="text-current text-[15px]" nz-icon nzType="edit" nzTheme="outline"></span>
                        </button>
                      </li>
                      <li>
                        <button nz-button class="flex items-center justify-center bg-transparent border-none shadow-none text-light hover:text-warning dark:text-white/60 p-0 w-[25px] h-[25px]" (click)="toggleStar(task)">
                          <span class="text-current text-[15px] [&.star-active]:text-warning" [class.star-active]="task.favorite" nz-icon nzType="star" nzTheme="outline"></span>
                        </button>
                      </li>
                      <li>
                        <button nz-button class="flex items-center justify-center bg-transparent border-none shadow-none text-light hover:text-danger dark:text-white/60 p-0 w-[25px] h-[25px]" (click)="removeTask(i)">
                          <span class="text-current text-[15px]" nz-icon nzType="close" nzTheme="outline"></span>
                        </button>
                      </li>
                    </ul>
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

export class TaskList2Component implements OnInit {
  taskList: { [key: string]: { id: string, sub: string, complete: boolean, favorite: boolean }[] };
  taskCheckedStates: { [key: string]: boolean } = {};
  allTasks: { id: string, sub: string, complete: boolean, favorite: boolean }[] = [];

  tabData: { key: string; label: string }[];
  sellingTab: string = 'all';
  dataLoaded: boolean = false;

  constructor(private http: HttpClient, private modalService: NzModalService) {
    this.tabData = [
      { key: 'all', label: 'All' },
      { key: 'favorite', label: 'Favorite' },
      { key: 'completed', label: 'Completed' },
    ];
  }

  ngOnInit() {
    this.loadCheckedStatesFromLocalStorage();
    this.loadSelectedTabFromLocalStorage();
    this.loadData();
    this.sellingTab = 'all';
  }


  loadData() {
    this.http.get('assets/data/apps/task-list2.json').subscribe((data: any) => {
      const taskData = data?.TaskList2 ?? {};

      // Copy tasks to the "allTasks" array to preserve the original tasks for the "All" tab.
      this.allTasks = [...taskData.all];

      // Initialize the taskList with the original tasks for their respective tabs.
      this.taskList = {
        all: this.allTasks,
        favorite: taskData.favorite || [],
        completed: taskData.completed || []
      };
    });
  }

  // Load the checked states from local storage
  loadCheckedStatesFromLocalStorage() {
    const savedData = localStorage.getItem('taskCheckedStates');
    if (savedData) {
      this.taskCheckedStates = JSON.parse(savedData);
    }
  }
  // Load the selected tab from local storage
  loadSelectedTabFromLocalStorage() {
    const savedTab = localStorage.getItem('selectedTab');
    this.sellingTab = savedTab || 'today';
  }
  // Handle the tab click event
  handleClick(tab: string): void {
    this.saveCheckedStates();
    this.sellingTab = tab;
    localStorage.setItem('selectedTab', this.sellingTab);
  }

  // Save the checked states of the tasks to local storage
  saveCheckedStates() {
    const tasks = this.taskList[this.sellingTab];
    if (tasks) {
      tasks.forEach(task => {
        this.taskCheckedStates[task.id] = task.complete;
      });
    }
    localStorage.setItem('taskCheckedStates', JSON.stringify(this.taskCheckedStates));
  }
  // Toggle the favorite state of the task
  toggleStar(task: { id: string, sub: string, complete: boolean, favorite: boolean }): void {
    task.favorite = !task.favorite;

    if (task.favorite) {
      this.taskList['favorite'] = [...this.taskList['favorite'], task];
    } else {
      this.taskList['favorite'] = this.taskList['favorite'].filter(t => t.id !== task.id);
    }

    // No need to move the task to the "all" tab, as it's already there.
    this.saveCheckedStates();
  }

// Remove the task from the task list
removeTask(index: number): void {
  if (this.taskList[this.sellingTab]) {
    this.taskList[this.sellingTab].splice(index, 1);
    this.saveCheckedStates();
  }
}
// Open the edit modal
openEditModal(task: any): void {
  const modalRef = this.modalService.create({
    nzTitle: 'Update Task Title',
    nzContent: EditModalComponent2,
    nzFooter: [
      {
        label: 'Update Event',
        type: 'primary',
        onClick: () => {
          task.sub = modalRef.getContentComponent().updatedTitle;
          modalRef.destroy();
        }
      }
    ]
  });
}

  // Check if the task list is empty
  isTabDataEmpty(tabKey: string): boolean {
    return !this.taskList || !this.taskList[tabKey] || this.taskList[tabKey].length === 0;
  }
}

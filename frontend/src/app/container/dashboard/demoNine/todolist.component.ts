import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../../shared/interfaces/todo.type';

@Component({
  selector: 'TodoList2',
  template: `
<!-- Full Markup for TodoComponent2 -->
<div class="bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10 relative ">
  <!-- Header section -->
  <div class="px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto max-sm:mb-[15px]">
    <h1 class="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-white/[.87]"> Todo </h1>
    <div>
      <ul class="flex items-center mb-0 py-[16px]">
        <li>
          <button (click)="showTab('all')" [class.active]="activeTab === 'all'" class="inline-flex items-center px-3 h-8 text-light dark:text-white/60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md">All</button>
        </li>
        <li>
          <button (click)="showTab('deleted')" [class.active]="activeTab === 'deleted'" class="inline-flex items-center px-3 h-8 text-light dark:text-white/60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md">Deleted</button>
        </li>
        <li>
          <button (click)="showTab('complete')" [class.active]="activeTab === 'complete'" class="inline-flex items-center px-3 h-8 text-light dark:text-white/60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md">Complete</button>
        </li>
      </ul>
    </div>
  </div>
  <!-- Task list section -->
  <div class="p-[25px] pt-0 pb-[42px]">
    <!-- All Tasks -->
    <div class="overflow-auto w-full scrollbar max-h-[254px] min-h-[254px]">
      <ng-container *ngIf="currentTab === 'all'">
        <ul>
          <li class="py-[6px]" *ngFor="let task of todos">
            <ng-container *ngIf="task.status !== 'deleted'">
              <div class="flex items-center justify-between">
                <div [class.completed]="task.isFinish" class="text-[15px] font-normal leading-[17px] text-theme-gray dark:text-white/60 capitalize">
                  <button (click)="toggleComplete(task)" [class.active]="task.isFinish">
                    <label
                      class="text-[15px] font-normal leading-[17px] text-theme-gray dark:text-white/60 capitalize [&>.ant-checkbox]:pointer-events-none"
                      nz-checkbox [nzValue]="task.id" [ngModel]="task.isFinish" (ngModelChange)="toggleComplete(task)">
                      {{ task.item }}
                    </label>
                  </button>
                </div>
                <div class="flex items-center gap-[20px]">
                  <button class="text-light dark:text-white/60 hover:text-danger " (click)="moveToDeleted(task)">
                    <span class="text-current text-[15px]" nz-icon nzType="delete" nzTheme="outline"></span>
                  </button>
                </div>
              </div>
            </ng-container>
          </li>
        </ul>
      </ng-container>

      <!-- Deleted Tasks -->
      <ng-container *ngIf="currentTab === 'deleted' && hasTasksForTab('deleted')">
        <ul>
          <li *ngFor="let task of todos">
            <ng-container *ngIf="task.status === 'deleted'">
              {{ task.item }}
              <button class="text-light dark:text-white/60" (click)="restoreTask(task)">
                <span class="text-current text-[15px]" nz-icon nzType="sync" nzTheme="outline"></span>
              </button>
            </ng-container>
          </li>
        </ul>
      </ng-container>

      <!-- Complete Tasks -->
      <ng-container *ngIf="currentTab === 'complete' && hasTasksForTab('complete')">
        <ul>
          <li *ngFor="let task of todos">
            <ng-container *ngIf="task.status === 'complete'">
              {{ task.item }}
            </ng-container>
          </li>
        </ul>
      </ng-container>
      <div *ngIf="currentTab === 'deleted' && !hasTasksForTab('deleted')">
        <p class="capitalize text-center text-light dark:text-white/60 text-[18px] font-medium min-h-[210px] flex items-center justify-center gap-[6px]">No tasks found in 'Deleted Tasks'.<span nz-icon [nzType]="'meh'" [nzTheme]="'twotone'" [nzTwotoneColor]="'#fe8f31'"></span></p>
      </div>
      <div *ngIf="currentTab === 'complete' && !hasTasksForTab('complete')">
          <p class="capitalize text-center text-light dark:text-white/60 text-[18px] font-medium min-h-[210px] flex items-center justify-center gap-[6px]">No tasks found in 'Completed Tasks'.<span nz-icon [nzType]="'meh'" [nzTheme]="'twotone'" [nzTwotoneColor]="'#fe8f31'"></span></p>
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

export class TodoComponent2 implements OnInit {
  todos: Todo[] = [];
  currentTab: string = 'all';
  activeTab: string = 'all';
  checked = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.http.get<Todo[]>('assets/data/pages/todos.json').subscribe(
      (data) => {
        this.todos = data;
      },
      (error) => {
        console.log('Error loading todos:', error);
      }
    );
  }

  showTab(tab: string) {
    this.currentTab = tab;
    this.activeTab = tab;
  }


  hasTasksForTab(tab: string): boolean {
    switch (tab) {
      case 'all':
        return this.todos.some((task) => task.status !== 'deleted');
      case 'deleted':
        return this.todos.some((task) => task.status === 'deleted');
      case 'complete':
        return this.todos.some((task) => task.status === 'complete');
      default:
        return false;
    }
  }
}

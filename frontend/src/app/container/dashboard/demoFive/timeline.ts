import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import items from '../../../../assets/data/global/dropdown.json';

@Component({
  selector: 'app-timeline',
  template: `
  <div class="bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10 relative ">
    <div
      class="px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto max-sm:mb-[15px]">
      <h1
        class="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-white/[.87]">
        Timeline</h1>
        <div>
          <a nz-dropdown nzTrigger="click" [nzDropdownMenu]="menu">
            <svg-icon class="text-light dark:text-white/60 dark:group-hover:text-white/[.87] w-[24px] h-[24px] [&>svg]:w-[24px] [&>svg]:h-[24px]" src="../../../../assets/images/svg/feather/more-horizontal.svg"></svg-icon>
          </a>
          <nz-dropdown-menu #menu="nzDropdownMenu">
            <ul class="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4 capitalize" nz-menu nzSelectable>
              <li *ngFor="let item of appItems" class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87]" nz-menu-item>
                <svg-icon class="text-current w-3.5 h-3.5 me-2 [&>svg]:w-full [&>svg]:h-full" src="../../../../assets/images/svg/feather/{{item.icon}}.svg"></svg-icon> {{item.name}}
              </li>
            </ul>
          </nz-dropdown-menu>
        </div>
    </div>
    <div class="p-[25px] pt-[5px] rounded-10 shadow-[0_5px_20px_rgba(173,181,217,0.03)]">
      <nz-timeline>
        <nz-timeline-item  class="last:pb-0" nzPosition="left" nzColor="{{task.status_color}}" *ngFor="let task of tasks">
          <div class="flex items-center justify-between gap-x-[30px] gap-y-[7px] max-ssm:flex-wrap">
            <div class="text-[14px] font-medium text-theme-gray dark:text-white/60">
              {{ task.service }} <span>{{ task.date }}</span>
            </div>
            <div class="capitalize text-[13px] font-normal text-light dark:text-white/60">
            {{ getDurationDisplay(task.duration_minutes) }}
            </div>
          </div>
        </nz-timeline-item>
      </nz-timeline>
    </div>
  </div>
  `,
  styleUrls: ['./timeline.scss']
})
export class TimeLineComponent {
  tasks: any[];
  appItems = items.appItems;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('assets/data/pages/timeline.json').subscribe(data => {
      this.tasks = data.tasks;
    });
  }

  getDurationDisplay(duration: number): string {
    if (duration >= 60) {
      const hours = Math.floor(duration / 60);
      const minutes = duration % 60;
      return `${hours} hour${hours > 1 ? 's' : ''} ${minutes} minute${minutes > 1 ? 's' : ''}`;
    } else {
      return `${duration} minute${duration > 1 ? 's' : ''}`;
    }
  }
}

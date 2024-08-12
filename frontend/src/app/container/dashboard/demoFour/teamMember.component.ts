import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface TeamMember {
  email: string;
  img: string;
  name: string;
  status: string;
  statusColor: string;
  isActive: boolean;
}

@Component({
  selector: 'app-team-list',
  template: `
    <div class="bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10 relative h-full">
      <div class="px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto">
        <h1 class="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-white/[.87]"> Team Members</h1>
      </div>
      <div class="px-[25px] pb-[25px]">
        <ul class="p-0">
          <li *ngFor="let item of data" class="p-0 last:mb-0 mb-[20px] border-none flex items-center justify-between" [attr.key]="item.email">
            <div class="flex items-center gap-[15px]">
              <div class="border-none p-0 items-center">
                <img class="max-w-[34px] rounded-[5px]" [src]="item.img" alt="hexadash Team" />
              </div>
              <div>
                <a class="text-theme-gray text-[15px] dark:text-white/60 hover:text-primary font-medium leading-[19px]" href="#">
                  {{ item.name }}
                </a>
                <div class="text-[12px] text-theme-gray dark:text-white/60 leading-1 relative ltr:pl-[12px] rtl:pr-[12px] before:absolute ltr:before:left-0 rtl:before:right-0 before:top-[50%] before:transform before:-translate-y-1/2 before:rounded-full before:content-[''] before:bg-{{item.statusColor}} before:w-[6px] before:h-[6px] mt-[-4px]">
                  {{item.status}}
                </div>
                <span class="before:bg-warning before:bg-success hidden"></span>
              </div>
            </div>
            <button nz-button (click)="handleActive(item)" class="team-list-button text-primary bg-primary/[.07] border-primary/[.07] text-[13px] font-semibold px-[12px] hover:text-white hover:bg-primary transition-all duration-300 border-none rounded-3 [&.active]:bg-primary [&.active]:text-white h-[32px]" [class.active]="item.isActive" ng-init="isActive = false"
          ng-click="isActive = !isActive" ng-class="{'active': isActive}">
              {{ item.isActive ? 'Added' : 'Add' }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  `
})
export class TeamListComponent implements OnInit {
  data: TeamMember[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<TeamMember[]>('assets/data/pages/teamMembers.json')
      .subscribe(teamData => {
        this.data = teamData.slice(0, 5).map(member => ({ ...member, isActive: false }));
      });
  }

  handleActive(item: TeamMember) {
    item.isActive = !item.isActive;
  }
}

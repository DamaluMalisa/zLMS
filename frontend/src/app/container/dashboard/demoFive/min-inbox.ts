
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import items from '../../../../assets/data/global/dropdown.json';

interface Message {
  sender: string;
  avatar: string | null;
  content: string;
  timestamp: string;
}

@Component({
  selector: 'app-mini-inbox',
  template: `
  <div class="bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10 relative ">
    <div
      class="px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto max-sm:mb-[15px]">
      <h1
        class="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-white/[.87]">
        Inbox</h1>
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
    <div class="p-[25px] pt-[5px] rounded-10 shadow-[0_5px_20px_rgba(173,181,217,0.03)] max-h-[290px] overflow-y-auto scrollbar">
    <ul>
      <li class="flex items-center justify-between pb-[17px] last:pb-0 max-ssm:flex-wrap" *ngFor="let message of messages">
        <div class="flex items-center gap-[15px] w-full">
          <ng-container *ngIf="message.avatar; else noAvatar">
            <div class="bg-{{message.status}}/10 flex h-[34px] justify-center overflow-hidden relative rounded-full w-[34px] min-w-[34px]">
              <img class="absolute bottom-0" src="assets/images/progress/{{ message.avatar }}" alt="">
            </div>
          </ng-container>
          <ng-template #noAvatar>
            <div class="bg-{{message.status}} flex h-[34px] justify-center items-center overflow-hidden relative rounded-full w-[34px] min-w-[34px]">
            <div class="text-white font-medium text-[17px]">{{ message.sender.charAt(0) }}</div>
            </div>
          </ng-template>
          <div class="flex items-center justify-between w-full max-ssm:flex-wrap gap-x-[15px] gap-y-[7px]">
            <div>
              <h6 class="text-15 font-medium text-theme-gray dark:text-white/60">{{ message.sender }}</h6>
              <div class="text-[12px] font-normal text-theme-gray dark:text-white/60">
                {{ message.content }}
              </div>
            </div>
            <div class="text-13 font-normal text-light dark:text-white/60">
              <span>{{ message.timestamp }}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    </div>
  </div>
  `,
})

export class MiniInboxComponent implements OnInit {
  messages: Message[] = []; // Initialize as an empty array

  appItems = items.appItems;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ messages: Message[] }>('assets/data/pages/inbox.json').subscribe(
      (data) => {
        if (data && Array.isArray(data.messages)) {
          this.messages = data.messages; // Assign messages array from data
        } else {
          console.error('Invalid data format:', data);
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}




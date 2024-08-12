import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-knowledgeTab',
  template: `
<!-- Tab Menu -->
<div class="mb-9">
   <nav>
      <ul class="flex items-center border-b gap-x-9 max-sm:gap-x-6 border-normal dark:border-white/10">
         <li *ngFor="let tab of tabs">
            <button class="block relative pt-6 pb-4 text-base max-sm:text-sm font-medium after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-0 after:w-full after:h-px cursor-pointer text-light dark:text-white/60 after:bg-transparent [&.active]:after:bg-dark [&.active]:text-dark dark:[&.active]:after:bg-white/90 dark:[&.active]:text-white/[.87]" nz-tab [nzTitle]="tab.title" (click)="selectTab(tab.key, tab.title)" [class.active]="selectedTab === tab.key">
               {{ tab.title }}
            </button>
         </li>
      </ul>
   </nav>
</div>

<!-- Tab Content -->
<div *ngFor="let tab of tabs" [ngSwitch]="tab.key">
   <div *ngSwitchCase="selectedTab">
      <div nz-row nzGutter="25" *ngIf="jsonData">
         <div nz-col nzMd="8" nzSm="12" nzXs="24" *ngFor="let item of jsonData[tab.key]">
            <div class="mb-[70px] max-sm:mb-[30px]">
               <h2 class="mb-3 text-dark dark:text-white/[.87] text-[22px] font-semibold capitalize">
                  {{ item.mainTitle }}
               </h2>
               <ul class="mb-0">
                  <li *ngFor="let link of item.links">
                     <a class="block mb-3 text-body dark:text-white/60 text-[15px] font-normal hover:text-primary" [routerLink]='item.url'>
                        {{ link.title }}
                     </a>
                  </li>
               </ul>
               <a class="relative inline-flex items-center gap-[10px] mt-5 text-primary before:absolute ltr:before:left-0 rtl:before:right-0 before:bottom-0 before:w-0 before:h-px before:bg-primary before:transition-all before:ease-in-out hover:before:w-full hover:before:duration-500" [routerLink]='item.seeMoreLink.url'>
                  {{ item.seeMoreLink.text }}
                  <span class="text-[14px]" nz-icon nzType="arrow-right" nzTheme="outline"></span>
               </a>
            </div>
         </div>
      </div>
   </div>
</div>

<!-- Popular Articles -->
<div class="pt-16 border-t border-normal dark:border-white/10" *ngIf="jsonData">
   <h2 class="mb-[30px] text-dark dark:text-white/[.87] text-2xl font-semibold">Popular articles</h2>
   <div nz-row nzGutter="15">
      <div nz-col nzXs="24" nzMd="12" nzXl="8" class="mb-[15px]" *ngFor="let article of jsonData.article">
         <div class="bg-{{article.statusColor}} group px-[34px] max-sm:px-[25px] pt-7 pb-[30px] rounded-10 h-full">
            <h4 class="mb-4 font-normal text-white text-[15px] dark:text-white/[.87] opacity-60 group-hover:opacity-100">
               {{article.subTitle}}
            </h4>
            <p class="mb-6 font-semibold text-white dark:text-white/[.87] text-[22px] max-sm:text-lg opacity-90 group-hover:opacity-100">
               {{article.title}}
            </p>
            <a class="inline-flex items-center gap-[10px] font-medium text-white dark:text-white/[.87] text-[15px] opacity-90 group-hover:opacity-100" [routerLink]='article.link'>
               {{article.linkText}}
               <span class="text-14" nz-icon nzType="arrow-right" nzTheme="outline"></span>
            </a>
         </div>
      </div>
   </div>
</div>

<!-- Popular CTA -->
<div class="pt-4 text-center">
   <h2 class="mb-3 font-semibold text-dark dark:text-white/[.87] text-[22px]">Still no luck? We can help!</h2>
   <p class="mb-[30px] text-body dark:text-white/60 text-[15px] font-normal">Contact us and we’ll get back to you as soon as possible.</p>
   <button nz-button class=" mx-auto px-8 h-[50px] text-sm font-medium bg-primary border-primary hover:bg-primary-hbr text-white rounded-4">
      <span>Submit a Request</span>
   </button>
</div>
  `,

  styles: [`

  `]
})

export class knowledgeTab implements OnInit {
  selectedTab: string = 'plugins'; // Set the default selected tab
  tabTitle: string = 'Plugins';
  jsonData: any;

  tabs = [
    { key: 'plugins', title: 'Plugins' },
    { key: 'themes', title: 'Themes' },
    { key: 'extensions', title: 'Extensions' },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/data/pages/knowledge.json').subscribe(data => {
      this.jsonData = data;
    });
  }

  // Function to handle tab selection
  selectTab(tab: string, title: string) {
    this.selectedTab = tab;
    this.tabTitle = title;
  }

}

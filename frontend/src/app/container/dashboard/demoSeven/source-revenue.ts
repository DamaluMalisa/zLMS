import { Component,Input, OnInit  } from '@angular/core';
import tableData  from '../../../../assets/data/pages/table-data.json';
import items from '../../../../assets/data/global/dropdown.json';
@Component({
  selector: 'nz-sourceRevenueTable',
  template: `
    <div class="bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10 relative ">
  <div
    class="px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto max-sm:mb-[15px]">
    <h1
      class="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-white/[.87]">
      Source Of Revenue Generated</h1>
    <div class="py-[16px] flex items-center gap-[15px]">
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
      <div>
      <a nz-dropdown nzTrigger="click" [nzDropdownMenu]="menu">
        <svg-icon class="text-light dark:text-white/60 dark:group-hover:text-white/[.87] w-[24px] h-[24px] [&>svg]:w-[24px] [&>svg]:h-[24px]" src="assets/images/svg/feather/more-horizontal.svg"></svg-icon>
      </a>
      <nz-dropdown-menu #menu="nzDropdownMenu">
        <ul class="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4 capitalize" nz-menu nzSelectable>
          <li *ngFor="let item of appItems" class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87]" nz-menu-item>
            <svg-icon class="text-current w-3.5 h-3.5 me-2 [&>svg]:w-full [&>svg]:h-full" src="assets/images/svg/feather/{{item.icon}}.svg"></svg-icon> {{item.name}}
          </li>
        </ul>
      </nz-dropdown-menu>
      </div>
    </div>
  </div>
  <div class="px-[25px] pt-0 pb-[25px]">
    <div *ngFor="let tab of tabData" [class.hidden]="sellingTab !== tab.key">
      <div class="overflow-x-auto w-full">
      <nz-table [nzData]="revenueGenerated[tab.key]" [nzFrontPagination]="false" [nzShowPagination]="false" class="text-sm rounded-[5px] max-xl:whitespace-nowrap">
        <thead>
          <tr>
            <th class="bg-[#fafafa] dark:bg-[#323440] px-4 py-2.5 text-start text-light dark:text-white/[.87] text-[12px] font-medium border-none before:hidden rounded-s-[4px]">SOURCE</th>
            <th class="bg-[#fafafa] dark:bg-[#323440] px-4 py-2.5 text-light dark:text-white/[.87] text-[12px] font-medium border-none before:hidden">VISITORS</th>
            <th class="bg-[#fafafa] dark:bg-[#323440] px-4 py-2.5 text-light dark:text-white/[.87] text-[12px] font-medium border-none before:hidden">PAGE VIEW	</th>
            <th class="bg-[#fafafa] dark:bg-[#323440] px-4 py-2.5 text-light dark:text-white/[.87] text-[12px] font-medium border-none before:hidden">REVENUE</th>
            <th class="bg-[#fafafa] dark:bg-[#323440] px-4 py-2.5 text-end text-light dark:text-white/[.87] text-[12px] font-medium border-none before:hidden rounded-e-[4px]">TREND</th>
          </tr>
        </thead>
        <tbody class="bg-white dark:bg-[#1b1d2a]">
          <tr *ngFor="let product of revenueGenerated[tab.key]" class="group">
            <td class="ps-0 pe-4 py-2.5 text-start last:text-end text-dark dark:text-white/[.87] group-hover:bg-transparent text-15 font-medium border-none before:hidden rounded-s-[4px]">
              <div class="flex items-center gap-[10px]">
                <div class="overflow-hidden flex justify-center items-center relative w-[32px] h-[32px] rounded-[8px] bg-{{product.type}}/10">
                  <svg-icon class="w-[16px] h-[16px] text-{{product.type}}" src="assets/images/svg/unicons-line/{{product.icon}}.svg"></svg-icon>
                </div>
                <span class="font-medium capitalize text-dark dark:text-white/[.87] text-15">{{ product.name }}</span>
              </div>
            </td>
            <td class="ps-4 pe-4 py-2.5 font-normal last:text-end capitalize text-[14px] text-theme-gray dark:text-white/[.87] border-none group-hover:bg-transparent rounded-e-[4px] whitespace-nowrap">{{product.visitors}}</td>
            <td class="ps-4 pe-4 py-2.5 font-normal last:text-end capitalize text-[14px] text-theme-gray dark:text-white/[.87] border-none group-hover:bg-transparent rounded-e-[4px] whitespace-nowrap">{{product.pageView}}</td>
            <td class="ps-4 pe-4 py-2.5 font-normal last:text-end capitalize text-[14px] text-theme-gray dark:text-white/[.87] border-none group-hover:bg-transparent rounded-e-[4px] whitespace-nowrap">{{product.revenue}}</td>
            <td class="ps-4 pe-4 py-2.5 font-normal last:text-end capitalize text-[14px] text-dark dark:text-white/[.87] border-none group-hover:bg-transparent rounded-e-[4px]">
              <div class="d-flex align-center justify-content-end max-w-[150px] min-w-[150px]">
               <nz-progress class="revenue-table text-{{product.type}}" [nzPercent]="product.trend"></nz-progress>
              </div>
            </td>
          </tr>
        </tbody>
      </nz-table>
      </div>
    </div>
  </div>
</div>
  `,
  styleUrls: ['./source-revenue.component.scss']
})

export class SourceRevenueTable implements OnInit   {
  //Table Data
  revenueGenerated: any;
  tabData: { key: string; label: string }[];

  constructor() {
    this.revenueGenerated = tableData.revenueGenerated;
    this.tabData = [
      { key: 'today', label: 'Today' },
      { key: 'week', label: 'Week' },
      { key: 'month', label: 'Month' }
    ];
  }

 //Tabs
 @Input() componentId: string;
  //Tabs
  sellingTab: string = 'today';
  handleClick(tab: string): void {
    this.sellingTab = tab;
    const storageKey = `sellingTab_${this.componentId}`; // Use a unique key for each component
    localStorage.setItem(storageKey, tab);
  }

  ngOnInit(): void {
    const storageKey = `sellingTab_${this.componentId}`; // Use the same unique key as in handleClick
    const storedTab = localStorage.getItem(storageKey);
    if (storedTab) {
      this.sellingTab = storedTab;
    }
  }

  //Dropdown Data
  appItems = items.appItems;
}

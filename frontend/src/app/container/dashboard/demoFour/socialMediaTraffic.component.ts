import { Component  } from '@angular/core';
import tableData  from '../../../../assets/data/pages/table-data.json';
import items from '../../../../assets/data/global/dropdown.json';

@Component({
  selector: 'app-socialMediaTraffic',
  template: `
  <div class="bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10 relative ">
  <div
    class="px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto max-sm:mb-[15px]">
    <h1
      class="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-white/[.87]">
      Social Media Traffic
    </h1>
    <div class="py-[16px]">
      <a nz-dropdown nzTrigger="click" [nzDropdownMenu]="menu">
        <svg-icon class=" text-light dark:text-white/60 dark:group-hover:text-white/[.87] w-[24px] h-[24px] [&>svg]:w-[24px] [&>svg]:h-[24px]" src="assets/images/svg/feather/more-horizontal.svg"></svg-icon>
      </a>
      <nz-dropdown-menu #menu="nzDropdownMenu">
        <ul class="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4 capitalize" nz-menu nzSelectable>
          <li *ngFor="let items of appItems" class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87]" nz-menu-item>
            <svg-icon class="text-current w-3.5 h-3.5 me-2 [&>svg]:w-full [&>svg]:h-full" src="assets/images/svg/feather/{{items.icon}}.svg"></svg-icon>
            {{items.name}}
          </li>
        </ul>
      </nz-dropdown-menu>
    </div>
  </div>
  <div class="px-[25px] pt-0 pb-[25px]">
    <perfect-scrollbar>
      <div class="max-h-[261px]">
        <nz-table [nzData]="['']" [nzFrontPagination]="false" [nzShowPagination]="false" class="text-sm rounded- [5px] max-xl:whitespace-nowrap">
          <thead>
            <tr>
              <th class="bg-[#f8f9fb] dark:bg-[#323440] px-4 py-2.5 text-start text-light dark:text-white/[.87] text-[12px] font-medium border-none before:hidden rounded-s-[4px] uppercase">Social</th>
              <th class="bg-[#f8f9fb] dark:bg-[#323440] px-4 py-2.5 text-light dark:text-white/[.87] text-[12px] font-medium border-none before:hidden uppercase">Users</th>
              <th class="bg-[#f8f9fb] dark:bg-[#323440] px-4 py-2.5 text-light dark:text-white/[.87] text-[12px] font-medium border-none before:hidden uppercase">Sessions</th>
              <th class="bg-[#f8f9fb] dark:bg-[#323440] px-4 py-2.5 text-light dark:text-white/[.87] text-[12px] font-medium border-none before:hidden uppercase">BOUNCE RATE</th>
              <th class="bg-[#f8f9fb] dark:bg-[#323440] px-4 py-2.5 text-end text-light dark:text-white/[.87] text-[12px] font-medium border-none before:hidden rounded-e-[4px] uppercase">AVG. SESSION DURATION</th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-[#1b1d2a]">
            <tr *ngFor="let product of seller" class="group">
              <td class="ps-0 pe-4 py-2.5 pt-[15px] text-start last:text-end text-dark dark:text-white/[.87] group-hover:bg-transparent text-15 font-medium border-none before:hidden rounded-s-[4px]">
                <div class="flex items-center gap-[12px]">
                  <div class="w-[32px] h-[32px] inline-flex items-center justify-center rounded-[8px] bg-{{product.statusType}}/10">
                    <svg-icon class="[&>svg]:w-[16px] [&>svg]:h-[16px] text-{{product.statusType}}" src="assets/images/svg/unicons-line/{{product.channel}}.svg"></svg-icon>
                  </div>
                  <span class="font-medium capitalize text-dark dark:text-white/[.87] text-15">{{ product.channel }}</span>
                </div>
              </td>
              <td class="px-4 py-2.5 font-normal last:text-end capitalize text-[14px] text-dark dark:text-white/[.87] border-none group-hover:bg-transparent">{{ product.traffic }}</td>
              <td class="px-4 py-2.5 font-normal last:text-end capitalize text-[14px] text-dark dark:text-white/[.87] border-none group-hover:bg-transparent">{{ product.sessions }}</td>
              <td class="px-4 py-2.5 font-normal last:text-end capitalize text-[14px] text-dark dark:text-white/[.87] border-none group-hover:bg-transparent">{{ product.bounce }}</td>
              <td class="ps-4 pe-4 py-2.5 font-normal last:text-end capitalize text-[14px] text-dark dark:text-white/[.87] border-none group-hover:bg-transparent rounded-e-[4px]">{{ calculateEndDate(product.startDate, product.duration) }}
              </td>
            </tr>
          </tbody>
        </nz-table>
      </div>
    </perfect-scrollbar>
  </div>
</div>

  `
})

export class socialMediaTrafficComponent  {
  //Table Data
  seller: any;
  appItems = items.appItems;

  constructor() {
    this.seller = tableData.trafficData;
  }

  calculateEndDate(startDate: Date, duration: number): string {
    const startDateTime = new Date(startDate).getTime();
    const endDateTime = startDateTime + duration * 1000; // Convert duration to milliseconds and add to start date
    const endDate = new Date(endDateTime);
    return endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  }

  //Dropdown Data
  // appItems = items.appItems;
}

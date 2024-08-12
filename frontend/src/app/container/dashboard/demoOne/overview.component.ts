import { Component } from '@angular/core';
import overviewData from '../../../../assets/data/pages/demo-one/overviewData.json';
@Component({
  selector: 'nz-overview',
  template: `
  <div nz-row [nzGutter]="25">
    <div nz-col *ngFor="let overviewData of filteredOverviewData" class="mb-[25px]" nzXs="24" nzMd="12" nzXXl="12">
      <div bordered="false"
        class="p-[25px] bg-white dark:bg-white/10 rounded-10 relative text-[15px] text-theme-gray dark:text-white/60 leading-6">
        <div class="flex justify-between">
          <div
            class="flex items-center justify-center order-2 bg-{{ overviewData.type }}/10 text-{{ overviewData.type }} w-[58px] h-[58px] rounded-2xl">
            <div
              class="fill-{{ overviewData.type }}  flex items-center">
              <svg-icon class="w-[30px] h-[30px] [&>svg]:w-full [&>svg]:h-full" src="assets/images/svg/unicons-line/{{ overviewData.icon }}.svg"></svg-icon>
            </div>
          </div>
          <div>
            <h4
              class="mb-0 text-3xl max-lg:text-[26px] max-sm:text-2xl font-semibold leading-normal text-dark dark:text-white/[.87]">
              <span>
                <span *ngIf="overviewData.totalSales === 'true'">$</span>{{ overviewData.total | number }}<span *ngIf="overviewData.suffix">{{ overviewData.suffix }}</span>
              </span>
            </h4>
            <span class="font-normal text-body dark:text-white/60 text-15">{{ overviewData.label }}</span>
          </div>
        </div>
        <div class="mt-3">
          <span class="inline-flex items-center w-full h-11 bg-gray-50 dark:bg-white/[.06]  px-2.5 rounded-lg gap-[10px]">
            <span class="flex items-center text-sm font-medium gap-[2px] text-{{ overviewData.statusColor }}">
              <svg-icon class="[&>svg]:w-[16px] [&>svg]:h-[16px]" src="assets/images/svg/feather/{{ overviewData.trend }}.svg"></svg-icon>
              {{ overviewData.statusRate }}%
            </span>
            <span class="text-sm text-light dark:text-white/60">{{ overviewData.dataPeriod }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
  `
})

export class OverviewComponent {
  appOverviewData = overviewData;
  filteredOverviewData = this.appOverviewData.filter(item => item.id >= 1 && item.id <= 4);

  constructor() {
    const number = this.appOverviewData.reduce((acc, item) => acc + Number(item.total), 0);
    const formattedNumber = number.toLocaleString();
  }

}

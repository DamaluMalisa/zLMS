import { Component } from '@angular/core';
import overviewData from '../../../../assets/data/pages/demo-one/overviewData.json';
@Component({
  selector: 'nz-overview-list',
  template: `
    <div nz-row [nzGutter]="25">
  <div nz-col *ngFor="let overviewData of filteredOverviewData" class="mb-[25px]" nzXs="24" nzSm="12" nzXXl="6">
    <div bordered="false"
      class="bg-white dark:bg-white/10 py-[25px] px-[25px] pb-[12px] overflow-hidden rounded-10 relative text-[15px] text-theme-gray dak:text-white/60">
      <div class="flex justify-between">
        <div>
          <span class="font-normal text-body dark:text-white/60 text-15">{{ overviewData.label }}</span>
          <h4
            class="mb-0 text-3xl max-lg:text-[26px] max-sm:text-2xl font-semibold leading-normal text-dark dark:text-white/[.87]">
            <span>
              <span *ngIf="overviewData.totalSales === 'true'">$</span>{{ overviewData.total | number }}<span
                *ngIf="overviewData.suffix">{{ overviewData.suffix }}</span>
            </span>
          </h4>
          <div>
            <span
              class="inline-flex items-center w-full h-11 rounded-lg gap-[10px]">
              <span class="flex items-center text-sm font-medium gap-[2px] text-{{ overviewData.statusColor }}">
                <svg-icon class="[&>svg]:w-[16px] [&>svg]:h-[16px]"
                  src="assets/images/svg/feather/{{ overviewData.trend }}.svg"></svg-icon>
                {{ overviewData.statusRate }}%
              </span>
              <span class="text-sm text-light dark:text-white/60">{{ overviewData.dataPeriod }}</span>
            </span>
          </div>
        </div>
        <div
          class="absolute top-0 ltr:-right-[140px] rtl:-left-[140px] w-[230px] max-md:w-[210px] max-ssm:w-[230px] px-[30px] rounded-full h-full flex items-center justify-start overflow-hidden bg-{{ overviewData.type }}/10 text-{{ overviewData.type }} ">
            <div class="flex items-center justify-center text-{{ overviewData.type }}">
              <div class="fill-{{ overviewData.type }} flex items-center">
                <svg-icon class="w-[35px] h-[35px] [&>svg]:w-[35px] [&>svg]:h-[35px] max-md:[&>svg]:w-[25px] max-md:[&>svg]:h-[25px]"
                  src="assets/images/svg/unicons-line/{{ overviewData.icon }}.svg"></svg-icon>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>

  `
})

export class OverviewListComponent {
  appOverviewData = overviewData;
  filteredOverviewData = this.appOverviewData.filter(item => item.id >= 5 && item.id <= 8);

  constructor() {
    const number = this.appOverviewData.reduce((acc, item) => acc + Number(item.total), 0);
    const formattedNumber = number.toLocaleString();
  }

}

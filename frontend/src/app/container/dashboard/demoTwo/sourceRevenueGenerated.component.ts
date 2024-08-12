import {
  Component,
  ViewChild
} from '@angular/core';
import {
  ChartComponent
} from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexLegend,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: string[];
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
};

import items from '../../../../assets/data/global/dropdown.json';
@Component({
  selector: 'nz-sourceRevenueGenerated',
  template: `
<div
  class="bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10 relative h-full">
  <div
    class="px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto max-sm:mb-[15px]">
    <h1
      class="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-white/[.87]">
      Source Of Revenue Generated</h1>
    <div class="md:py-[16px]">
      <a nz-dropdown nzTrigger="click" [nzDropdownMenu]="menu">
        <svg-icon
          class=" text-light dark:text-white/60 dark:group-hover:text-white/[.87] w-[24px] h-[24px] [&>svg]:w-[24px] [&>svg]:h-[24px]"
          src="assets/images/svg/feather/more-horizontal.svg"></svg-icon>
      </a>
      <nz-dropdown-menu #menu="nzDropdownMenu">
        <ul
          class="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4 capitalize"
          nz-menu nzSelectable>
          <li *ngFor="let items of appItems"
            class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87]"
            nz-menu-item>
            <svg-icon class="text-current w-3.5 h-3.5 me-2 [&>svg]:w-full [&>svg]:h-full"
              src="assets/images/svg/feather/{{items.icon}}.svg"></svg-icon>
            {{items.name}}
          </li>
        </ul>
      </nz-dropdown-menu>
    </div>
  </div>
  <div class="p-[25px] pb-[50px] gap-[25px] max-md:pt-0 flex items-center max-md:flex-wrap max-md:flex-col justify-center max-3xl:justify-center max-lg:justify-start max-md:justify-center">
    <div id="chart" dir="ltr">
      <apx-chart [series]="chartOptions.series" [chart]="chartOptions.chart" [labels]="chartOptions.labels"
        [colors]="chartOptions.colors" [legend]="chartOptions.legend" [plotOptions]="chartOptions.plotOptions"
        [responsive]="chartOptions.responsive"></apx-chart>
    </div>
    <ul
      class="flex gap-x-[44px] gap-y-[22px] max-ssm:gap-x-[15px] max-ssm:gap-y-[15px] max-ssm:justify-center flex-wrap">
      <li>
        <div
          class="flex items-center justify-center bg-facebook/10 text-facebook w-[80px] h-[80px] mb-[10px] rounded-[10px]">
          <span>
            <svg-icon class="w-[30px] h-[30px] [&>svg]:w-[30px] [&>svg]:h-[30px]"
              src="assets/images/svg/unicons-line/facebook-f.svg"></svg-icon>
          </span>
        </div>
        <div class="text-center">
          <div class="text-[15px] text-dark dark:text-white/[.87] font-medium">
            {{chartOptions.labels[0]}}
          </div>
          <div class="text-[14px] text-light dark:text-white/60 font-medium">
            {{chartOptions.series[0]}}
          </div>
        </div>
      </li>
      <li>
        <div
          class="flex items-center justify-center bg-twitter/10 text-twitter w-[80px] h-[80px] mb-[10px] rounded-[10px]">
          <span>
            <svg-icon class="w-[30px] h-[30px] [&>svg]:w-[30px] [&>svg]:h-[30px]"
              src="assets/images/svg/unicons-line/twitter.svg"></svg-icon>
          </span>
        </div>
        <div class="text-center">
          <div class="text-[15px] text-dark dark:text-white/[.87] font-medium">
            {{chartOptions.labels[1]}}
          </div>
          <div class="text-[14px] text-light dark:text-white/60 font-medium">
            {{chartOptions.series[1]}}
          </div>
        </div>
      </li>
      <li>
        <div
          class="flex items-center justify-center bg-google/10 text-google w-[80px] h-[80px] mb-[10px] rounded-[10px]">
          <svg-icon class="w-[30px] h-[30px] [&>svg]:w-[30px] [&>svg]:h-[30px]"
            src="assets/images/svg/unicons-line/google.svg"></svg-icon>
        </div>
        <div class="text-center">
          <div class="text-[15px] text-dark dark:text-white/[.87] font-medium">
            {{chartOptions.labels[2]}}
          </div>
          <div class="text-[14px] text-light dark:text-white/60 font-medium">
            {{chartOptions.series[2]}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
`,
styles: [`
  :host ::ng-deep .apexcharts-slices .apexcharts-series.apexcharts-pie-series *{
    @apply stroke-white dark:stroke-[#1b1c29];
  }
`]
})
export class SourceRevenueGenerated {
  appItems = items.appItems;

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial < ChartOptions > ;

  constructor() {
    this.chartOptions = {
      series: [4621, 3621, 8945],
      colors: ['#3a589b', '#03a9f4', '#f14336'],
      labels: ['Facebook', 'Twitter', 'Google'],
      chart: {
        type: 'pie',
        group: 'social',
        width: "100%",
        height: 270,
      },
      legend: {
        show: false,
        position: 'bottom',
        horizontalAlign: 'center',
        floating: false,
        fontSize: '15px',
        fontFamily: 'Jost, sans-serif',
        fontWeight: 400,
        labels: {
          colors: '#525768',
        },
        markers: {
          width: 7,
          height: 7,
          radius: 20,
          offsetX: -4,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 10,
        },
        onItemClick: {
          toggleDataSeries: true
        },
        onItemHover: {
          highlightDataSeries: true
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            minAngleToShowLabel: undefined
          },
        }
      },
      responsive: [{
        breakpoint: 1399,
        options: {
          chart: {
            width: "100%"
          },

        }
      }]
    };
  }
}

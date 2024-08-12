import { Component } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexStroke,
  ApexGrid,
  ApexLegend,
  ApexResponsive
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  labels: string[];
  grid: ApexGrid;
  stroke: ApexStroke;
  legend: ApexLegend;
  responsive: ApexResponsive[];
  colors: string[];
};

import items from '../../../../assets/data/global/dropdown.json';
@Component({
  selector: 'nz-saleOverview',
  template: `
    <div class="bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10 relative h-full">
  <div
    class="px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto max-sm:mb-[15px]">
    <h1
      class="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-white/[.87]">
      Sales Overview</h1>
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
  <div class="hexadash-chart-container pb-[30px]" dir="ltr">
    <apx-chart [series]="chartOptions.series"
      [chart]="chartOptions.chart"
      [plotOptions]="chartOptions.plotOptions"
      [labels]="chartOptions.labels"
      [legend]="chartOptions.legend"
      [stroke]="chartOptions.stroke"
      [grid]="chartOptions.grid"
      [responsive]="chartOptions.responsive"
      [colors]="chartOptions.colors"
      >
    </apx-chart>
    <div class="flex items-center justify-around mt-[5px]">
      <div class="text-center">
        <span class="text-light dark:text-white/60 text-[16px] capitalize">Completed</span>
        <h3 class="text-[22px] font-semibold text-dark dark:text-white/[.87]">{{ completedValue | number }}</h3>
        </div>

        <div class="text-center">
        <span class="text-light dark:text-white/60 text-[16px] capitalize">In progress</span>
        <h3 class="text-[22px] font-semibold text-dark dark:text-white/[.87]">{{ inProgressValue | number }}</h3>
      </div>
    </div>
  </div>
</div>
  `,
  styles: [`
    :host ::ng-deep .apexcharts-text.apexcharts-yaxis-label {
      @apply dark:fill-white/[.60] #{!important};
    }
  `]
})
export class SaleOverviewComponent{
  appItems = items.appItems;
  public chartOptions: Partial<ChartOptions>;
  public completedValue: number;
  public inProgressValue: number;
  completedPercentage: number;

  constructor() {
    this.completedValue = 123456;
    this.inProgressValue = 12498;
    const totalTasks = this.completedValue + this.inProgressValue;
    this.completedPercentage = (this.completedValue / totalTasks) * 100;
    const totalNumber = this.completedPercentage ;
    this.chartOptions = {
      series: [this.completedPercentage],
      labels: ['Target'],
      colors: ['#8231D3'],
      chart: {
        width: '100%',
        height: 275,
        type: 'radialBar',
        sparkline: {
          enabled: true
        },
      },
      legend: {
        show: false,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: '70%',
          },
          dataLabels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              show: true,
              fontSize: '45px',
              fontFamily: '"Jost", sans-serif',
              fontWeight: 600,
              color: "#8231D3",
              formatter: function (w) {
                return totalNumber.toFixed(0) + `%`;
              }
            },
            total: {
              show: false,
            }
          }
        }
      },
      stroke: {
        lineCap: 'round'
      },
      grid: {
        show: true,
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      responsive: [
        {
          breakpoint: 575,
          options: {
            legend: {
              show: false
            },
            plotOptions: {
              radialBar: {
                hollow: {
                  margin: 0,
                  size: '30%',
                },
                track: {
                  show: true,
                  margin: 11
                },
                dataLabels: {
                  show: true,
                  name: {
                    offsetY: 20
                  },
                  total: {
                    show: true,
                    fontSize: '12px',
                  }
                }
              }
            },
          }
        }
      ],
    };
  }
}

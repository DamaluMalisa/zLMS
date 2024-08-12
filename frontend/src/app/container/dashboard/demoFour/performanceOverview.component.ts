import { Component,ViewChild } from '@angular/core';

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
  selector: 'nz-performance-overview',
  template: `
    <div class="bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10 relative h-full">
      <div class="px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto">
        <h1 class="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-white/[.87]"> Performance Overview</h1>
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
      <div class="p-[25px] pt-0">
        <div class="hexadash-chart-container" dir="ltr">
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
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host ::ng-deep .apexcharts-legend .apexcharts-legend-series .apexcharts-legend-text{
      @apply dark:text-white/[.60] #{!important};
    }
    :host ::ng-deep .apexcharts-text.apexcharts-datalabel-label{
      @apply dark:fill-white/[.60] #{!important};
    }
    :host ::ng-deep .apexcharts-text.apexcharts-datalabel-value{
      @apply dark:fill-white/[.87];
    }
    :host ::ng-deep .apexcharts-slices .apexcharts-series *{
      @apply dark:stroke-[#1b1c29] #{!important};
    }
  `]
})

export class PerformanceComponent  {
  appItems = items.appItems;

  @ViewChild("chart") chart: PerformanceComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [90, 80, 70],
      labels: ['Target', 'Completed', 'In Progress'],
      colors: ['#8231D3', '#00AAFF', '#FA8B0C'],
      chart: {
        width: '100%',
        height: 275,
        type: 'radialBar',
        sparkline: {
            enabled: true
        },
      },
      legend: {
        show: true,
        position: 'right',
        horizontalAlign: 'center',
        offsetY: 60,
        offsetX: 10,
        fontSize: '15px',
        fontFamily: '"Jost", sans-serif',
        fontWeight: 400,
        labels: {
          colors: '#404040',
        },
        markers: {
          width: 6,
          height: 6,
          radius: 20,
          offsetX: -4,
          offsetY:-2,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 5
        }
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
                value: {
                    show: true,
                    fontSize: '24px',
                    fontFamily: '"Jost", sans-serif',
                    fontWeight: 600,
                    offsetY: -21
                },
                total: {
                    show: true,
                    label: 'Completed',
                    fontSize: '15px',
                    fontFamily: '"Jost", sans-serif',
                    fontWeight: 400,
                    color: '#404040',
                    formatter: function (w) {
                        return '60%';
                    }
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
                      value: {
                          show: true,
                          fontSize: '18px',
                          fontFamily: '"Jost", sans-serif',
                          fontWeight: 600,
                          offsetY: -21
                      },
                      total: {
                          show: true,
                          label: 'Completed',
                          fontSize: '12px',
                          fontFamily: '"Jost", sans-serif',
                          fontWeight: 400,
                          color: '#404040',
                          formatter: function (w) {
                              return '60%';
                          }
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

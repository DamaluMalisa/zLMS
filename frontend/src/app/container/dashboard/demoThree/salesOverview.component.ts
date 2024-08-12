import { Component,ViewChild,Input, OnInit   } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent,
  ApexPlotOptions,
  ApexLegend,
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  colors: string[];
};


@Component({
  selector: 'nz-salesOverview',
  template: `
    <div class="bg-white dark:bg-white/10 m-0 p-0 text-theme-dark dark:text-white/60 text-[15px] rounded-10 relative ">
  <div
    class="px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto max-sm:mb-[15px] border-b-1 border-regular dark:border-white/10">
    <h1
      class="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-white/[.87]">
      Sales Overview</h1>
      <div class="py-[16px]">
        <ul class="flex items-center mb-0">
          <li>
            <button type="button" [class]="sellingTab === 'today' ? 'inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md' : 'inline-flex items-center px-3 h-8 text-light dark:text-white/60 hover:text-primary text-13'" (click)="handleClick('today')">
              Today
            </button>
          </li>
          <li>
            <button type="button" [class]="sellingTab === 'week' ? 'inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md' : 'inline-flex items-center px-3 h-8 text-light dark:text-white/60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'"  (click)="handleClick('week')">
              Week
            </button>
          </li>
          <li>
            <button type="button" [class]="sellingTab === 'month' ? 'inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md' : 'inline-flex items-center px-3 h-8 text-light dark:text-white/60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'" (click)="handleClick('month')">
              Month
            </button>
          </li>
        </ul>
      </div>
  </div>
  <div class="p-[25px] pt-[20px]">
    <div *ngIf="sellingTab === 'today'">
      <div class="hexadash-chart-container" dir="ltr">
        <apx-chart
          [series]="chartOptions.series"
          [chart]="chartOptions.chart"
          [labels]="chartOptions.labels"
          [responsive]="chartOptions.responsive"
          [plotOptions]="chartOptions.plotOptions"
          [legend]="chartOptions.legend"
          [colors]="chartOptions.colors"
          ></apx-chart>
          <div class="flex justify-between items-center px-[15px] min-h-[76px] bg-regularBG dark:bg-white/10 rounded-[8px] mb-0 mt-[15px]">
            <div class="text-center py-[5px] px-[15px]">
              <strong class="font-semibold text-[18px] text-dark dark:text-white/[.87] inline-flex">{{ chartOptions.series[0] }}</strong>
              <div class="text-[15px] font-normal leading-[1.6666666667] text-theme-gray dark:text-white/60 mb-0 flex items-center"> {{ chartOptions.labels[0] }}
              </div>
            </div>
            <div class="text-center py-[5px] px-[15px]">
              <strong class="font-semibold text-[18px] text-dark dark:text-white/[.87] ">{{ chartOptions.series[1] }}</strong>
              <div class="text-[15px] font-normal leading-[1.6666666667] text-theme-gray dark:text-white/60 mb-0 flex items-center"> {{ chartOptions.labels[1] }} </div>
            </div>
            <div class="text-center py-[5px] px-[15px]">
              <strong class="font-semibold text-[18px] text-dark dark:text-white/[.87] ">{{ chartOptions.series[2] }}</strong>
              <div class="text-[15px] font-normal leading-[1.6666666667] text-theme-gray dark:text-white/60 mb-0 flex items-center"> {{ chartOptions.labels[2] }} </div>
            </div>
          </div>
      </div>
     </div>
     <div *ngIf="sellingTab === 'week'">
      <div class="hexadash-chart-container" dir="ltr">
        <apx-chart
        [series]="chartOptions2.series"
        [chart]="chartOptions.chart"
        [labels]="chartOptions2.labels"
        [responsive]="chartOptions.responsive"
        [plotOptions]="chartOptions.plotOptions"
        [legend]="chartOptions.legend"
        [colors]="chartOptions.colors"
          ></apx-chart>
          <div class="flex justify-between items-center px-[15px] min-h-[76px] bg-regularBG dark:bg-white/10 rounded-[8px] mb-0 mt-[15px]">
            <div class="text-center py-[5px] px-[15px]">
              <strong class="font-semibold text-[18px] text-dark dark:text-white/[.87] inline-flex">{{ chartOptions2.series[0] }}</strong>
              <div class="text-[15px] font-normal leading-[1.6666666667] text-theme-gray dark:text-white/60 mb-0 flex items-center"> {{ chartOptions2.labels[0] }}
              </div>
            </div>
            <div class="text-center py-[5px] px-[15px]">
              <strong class="font-semibold text-[18px] text-dark dark:text-white/[.87] ">{{ chartOptions2.series[1] }}</strong>
              <div class="text-[15px] font-normal leading-[1.6666666667] text-theme-gray dark:text-white/60 mb-0 flex items-center"> {{ chartOptions2.labels[1] }} </div>
            </div>
            <div class="text-center py-[5px] px-[15px]">
              <strong class="font-semibold text-[18px] text-dark dark:text-white/[.87] ">{{ chartOptions2.series[2] }}</strong>
              <div class="text-[15px] font-normal leading-[1.6666666667] text-theme-gray dark:text-white/60 mb-0 flex items-center"> {{ chartOptions2.labels[2] }} </div>
            </div>
          </div>
      </div>
     </div>
     <div *ngIf="sellingTab === 'month'">
      <div class="hexadash-chart-container" dir="ltr">
        <apx-chart
        [series]="chartOptions3.series"
        [chart]="chartOptions.chart"
        [labels]="chartOptions3.labels"
        [responsive]="chartOptions.responsive"
        [plotOptions]="chartOptions.plotOptions"
        [legend]="chartOptions.legend"
        [colors]="chartOptions.colors"
          ></apx-chart>
          <div class="flex justify-between items-center px-[15px] min-h-[76px] bg-regularBG dark:bg-white/10 rounded-[8px] mb-0 mt-[15px]">
            <div class="text-center py-[5px] px-[15px]">
              <strong class="font-semibold text-[18px] text-dark dark:text-white/[.87] inline-flex">{{ chartOptions3.series[0] }}</strong>
              <div class="text-[15px] font-normal leading-[1.6666666667] text-theme-gray dark:text-white/60 mb-0 flex items-center"> {{ chartOptions3.labels[0] }}
              </div>
            </div>
            <div class="text-center py-[5px] px-[15px]">
              <strong class="font-semibold text-[18px] text-dark dark:text-white/[.87] ">{{ chartOptions3.series[1] }}</strong>
              <div class="text-[15px] font-normal leading-[1.6666666667] text-theme-gray dark:text-white/60 mb-0 flex items-center"> {{ chartOptions3.labels[1] }} </div>
            </div>
            <div class="text-center py-[5px] px-[15px]">
              <strong class="font-semibold text-[18px] text-dark dark:text-white/[.87] ">{{ chartOptions3.series[2] }}</strong>
              <div class="text-[15px] font-normal leading-[1.6666666667] text-theme-gray dark:text-white/60 mb-0 flex items-center"> {{ chartOptions3.labels[2] }} </div>
            </div>
          </div>
      </div>
     </div>
  </div>
</div>
  `,
  styles: [`
  :host ::ng-deep .apexcharts-text.apexcharts-datalabel-label{
    @apply fill-theme-gray dark:fill-white/[.60] #{!important};
  }
  :host ::ng-deep .apexcharts-text.apexcharts-datalabel-value{
    @apply fill-dark dark:fill-white/[.87];
  }
  :host ::ng-deep .apexcharts-slices .apexcharts-series *{
    @apply stroke-white dark:stroke-[#1b1c29] #{!important};
  }
  `]
})

export class SalesOverviewComponent implements OnInit  {
  //Tabs
 @Input() componentId: string;
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

//Chart Data
 @ViewChild("chart") chart: ChartComponent;
 public chartOptions: Partial<ChartOptions>;
 public chartOptions2: Partial<ChartOptions>;
 public chartOptions3: Partial<ChartOptions>;

  constructor() {
    const todaySales = [47, 34, 19]; // Replace with actual sales data for today
    const weekSales = [50, 60, 30]; // Replace with actual sales data for the week
    const monthSales = [80, 70, 50];
    const todayLabels = ["Shirts", "Pants", "Footwears"]; // Replace with labels for today
    const weekLabels = ["Tops", "Bottoms", "Shoes"]; // Replace with labels for the week
    const monthLabels = ["T-Shirts", "Jeans", "Sneakers"];
    this.chartOptions = {
      series: todaySales,
      labels: todayLabels,
      colors: ['#8231D3', '#00AAFF', '#FA8B0C'],
      chart: {
        type: "donut",
        group: 'social',
        width: '100%',
        height: 300,
      },
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        floating: false,
        fontSize: '15px',
        fontFamily: 'Jost, sans-serif',
        fontWeight: 500,
        labels: {
            colors: 'text-theme-dark dark:text-white/60',
        },
        markers: {
          width: 7,
          height: 7,
          radius: 20,
          offsetX: -4,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 10
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
              donut: {
                  size: '60%',
                  labels: {
                      show: true,
                      name: {
                          show: true,
                          fontSize: '16px',
                          fontFamily: 'Jost, sans-serif',
                          color: '#404040',
                          offsetY: -10
                      },
                      value: {
                          show: true,
                          fontSize: '30px',
                          fontFamily: 'Jost, sans-serif',
                          color: "black",
                          fontWeight: "bold",
                          offsetY: 10,
                          formatter: function (val) {
                              return +val + "K"
                          }
                      },
                      total: {
                          show: true,
                          label: 'Total',
                          color: '#404040',
                          fontFamily: 'Jost, sans-serif',
                          formatter: function (w) {
                              return w.globals.seriesTotals.reduce((a, b) => {
                                  return a + b
                              }, 0)
                          }
                      }
                  }
              },
          },
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
    this.chartOptions2 = {
      series: weekSales,
      labels: weekLabels,
    };
    this.chartOptions3 = {
      series: monthSales,
      labels: monthLabels,
    };
  }
}

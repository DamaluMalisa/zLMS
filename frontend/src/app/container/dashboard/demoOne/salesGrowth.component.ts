import { Component,ViewChild, Input, OnInit } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexPlotOptions,
  ApexLegend,
  ApexTooltip,
  ApexStates
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis:ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  states: ApexStates;
};


@Component({
  selector: 'nz-saleGrowth',
  template: `
    <div class="bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10 relative ">
  <div
    class="px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto max-sm:mb-[15px]">
    <h1
      class="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-white/[.87]">
      Sales Growth</h1>
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
  <div class="p-[25px] pt-0">
    <div class="flex items-center justify-center max-ssm:flex-col max-ssm:gap-y-[15px]">
      <div class="relative flex items-center mx-3">
        <span
          class="inline-block text-dark dark:text-white/[.87] me-1 ms-2.5 text-[18px] font-semibold">$8,550</span>
        <span class="flex items-center text-sm font-medium text-success">
            <svg-icon class="w-[20px] h-[20px] [&>svg]:w-full [&>svg]:h-full" src="assets/images/svg/unicons-line/arrow-up.svg"></svg-icon>
          25% </span>
      </div>
      <div class="relative flex items-center mx-3">
        <span
          class="inline-block text-dark dark:text-white/[.87] me-1 ms-2.5 text-[18px] font-semibold">$5,550</span>
        <span class="flex items-center text-sm font-medium text-danger">
            <svg-icon class="w-[20px] h-[20px] [&>svg]:w-full [&>svg]:h-full" src="assets/images/svg/unicons-line/arrow-down.svg"></svg-icon>
            15% </span>
      </div>
    </div>
    <div *ngIf="sellingTab === 'today'">
      <div class="hexadash-chart-container" dir="ltr">
        <apx-chart
            [series]="chartOptions.series"
            [chart]="chartOptions.chart"
            [xaxis]="chartOptions.xaxis"
            [yaxis]="chartOptions.yaxis"
            [dataLabels]="chartOptions.dataLabels"
            [grid]="chartOptions.grid"
            [stroke]="chartOptions.stroke"
            [title]="chartOptions.title"
            [plotOptions]="chartOptions.plotOptions"
            [legend]="chartOptions.legend"
            [tooltip]="chartOptions.tooltip"
            [states]="chartOptions.states"
          ></apx-chart>
      </div>
     </div>
     <div *ngIf="sellingTab === 'week'">
      <div class="hexadash-chart-container" dir="ltr">
        <apx-chart
            [series]="chartOptions2.series"
            [chart]="chartOptions.chart"
            [xaxis]="chartOptions2.xaxis"
            [yaxis]="chartOptions.yaxis"
            [dataLabels]="chartOptions.dataLabels"
            [grid]="chartOptions.grid"
            [stroke]="chartOptions.stroke"
            [title]="chartOptions.title"
            [plotOptions]="chartOptions.plotOptions"
            [legend]="chartOptions.legend"
            [tooltip]="chartOptions.tooltip"
            [states]="chartOptions.states"
          ></apx-chart>
      </div>
     </div>
     <div *ngIf="sellingTab === 'month'">
      <div class="hexadash-chart-container" dir="ltr">
        <apx-chart
            [series]="chartOptions3.series"
            [chart]="chartOptions.chart"
            [xaxis]="chartOptions3.xaxis"
            [yaxis]="chartOptions.yaxis"
            [dataLabels]="chartOptions.dataLabels"
            [grid]="chartOptions.grid"
            [stroke]="chartOptions.stroke"
            [title]="chartOptions.title"
            [plotOptions]="chartOptions3.plotOptions"
            [legend]="chartOptions.legend"
            [tooltip]="chartOptions.tooltip"
            [states]="chartOptions.states"
          ></apx-chart>
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

export class SaleGrowthComponent implements OnInit  {
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

//Chart Data
 @ViewChild("chart") chart: ChartComponent;
 public chartOptions: Partial<ChartOptions>;
 public chartOptions2: Partial<ChartOptions>;
 public chartOptions3: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [{
          name: "Target",
          data: [35, 55, 25, 60, 42, 80, 35],
          color: "#7811FF",
      }, {
          name: "Total Sales",
          data: [10, 30, 8, 30, 22, 38, 45],
          color: "#00AAFF",
      }],
      chart: {
        height: 311,
        type: "bar",
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 30,
        colors: ['transparent']
      },
      grid: {
        borderColor: '#485e9029',
		    strokeDashArray: 5,
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
      },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '60%',
          borderRadius: 2,
        }
      },
      legend: {
        show: false,
      },
      states: {

      },
      tooltip: {
        enabled: true,
        enabledOnSeries: undefined,
        shared: true,
        followCursor: false,
        intersect: false,
        x: {
            show: true,
            format: 'dd MMM',
            formatter: undefined,
        },
        y: {
            formatter: undefined,
            title: {
                formatter: (seriesName) => seriesName,
            },
        },
        z: {
            formatter: undefined,
            title: 'Size: '
        },
        marker: {
            show: true,
        },
        fixed: {
            enabled: false,
            position: 'topLeft',
            offsetY: 0,
        },
        style: {
            fontSize: '12px',
            fontFamily: '"Jost", sans-serif',
        },
      },
      xaxis: {
        crosshairs: {
          show: false
        },
        labels: {
          style: {
            colors: Array.from({ length: 12 }, () => '#747474'),
            fontSize: '14px',
            fontFamily: '"Jost", sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label',
          },
        },
        categories: [
          "Sat",
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri"
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
            show: false,
        },
      },
      yaxis: {
        labels: {
          offsetX: -15,
          formatter: (val) => {
            return val + "K";
          },
          style: {
            colors: ['#747474'],
            fontSize: '14px',
            fontFamily: '"Jost", sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label',
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
            show: false,
        },
      },
    };
    this.chartOptions2 = {
      series: [
        {
          name: "Target",
          data: [12, 34, 76, 23, 48, 34, 78],
          color: "#7811FF",
        },
        {
          name: "Total Sales",
          data: [34, 25, 34, 8, 45, 65, 18],
          color: "#00AAFF",
        }
      ],
      xaxis: {
        crosshairs: {
          show: false
        },
        labels: {
          style: {
            colors: Array.from({ length: 12 }, () => '#747474'),
            fontSize: '14px',
            fontFamily: '"Jost", sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label',
          },
        },
        categories: [
          "1-2",
          "2-3",
          "3-4",
          "4-5",
          "5-6",
          "6-7",
          "7-8",
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
            show: false,
        },
      },
      // Rest of the chart options...
    };
    this.chartOptions3 = {
      series: [
        {
          name: "Target",
          data: [35, 55, 25, 72, 45, 58, 35, 45, 65, 38, 45, 48],
          color: "#7811FF",
        },
        {
          name: "Total Sales",
          data: [15, 35, 10, 16, 25, 44, 10, 5, 24, 18, 7, 36],
          color: "#00AAFF",
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '95%',
          borderRadius: 2,
        }
      },
      xaxis: {
        crosshairs: {
          show: false
        },
        labels: {
          style: {
            colors: Array.from({ length: 12 }, () => '#747474'),
            fontSize: '14px',
            fontFamily: '"Jost", sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label',
          },
        },
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
            show: false,
        },
      },
      // Rest of the chart options...
    };
  }
}

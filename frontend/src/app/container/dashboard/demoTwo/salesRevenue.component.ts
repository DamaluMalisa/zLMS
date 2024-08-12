import {
  Component,
  ViewChild
} from '@angular/core';

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
  ApexStates,
  ApexFill,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  states: ApexStates;
  fill: ApexFill;
  colors: string[];
};


@Component({
  selector: 'nz-saleRevenue',
  template: `
    <div class="bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10 relative ">
  <div
    class="px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto max-sm:mb-[15px]">
    <h1
      class="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-white/[.87]">
      Sale Revenue</h1>
    <div class="py-[16px]">
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
    </div>
  </div>
  <div class="p-[25px] pt-0">
    <div *ngIf="sellingTab === 'today'">
      <div id="chartLine" dir="ltr">
        <apx-chart [series]="chartOptions.series" [chart]="chartOptions.chart" [xaxis]="chartOptions.xaxis"
          [yaxis]="chartOptions.yaxis" [dataLabels]="chartOptions.dataLabels" [grid]="chartOptions.grid"
          [stroke]="chartOptions.stroke" [title]="chartOptions.title" [plotOptions]="chartOptions.plotOptions"
          [legend]="chartOptions.legend" [tooltip]="chartOptions.tooltip" [states]="chartOptions.states" [colors]="chartOptions.colors" [fill]="chartOptions.fill"></apx-chart>
      </div>
    </div>
    <div *ngIf="sellingTab === 'week'">
      <div id="chartLine2" dir="ltr">
        <apx-chart [series]="chartOptions2.series" [chart]="chartOptions2.chart" [xaxis]="chartOptions2.xaxis"
          [yaxis]="chartOptions.yaxis" [dataLabels]="chartOptions.dataLabels" [grid]="chartOptions.grid"
          [stroke]="chartOptions.stroke" [title]="chartOptions.title" [plotOptions]="chartOptions.plotOptions"
          [legend]="chartOptions.legend" [tooltip]="chartOptions.tooltip" [states]="chartOptions.states" [colors]="chartOptions2.colors" [fill]="chartOptions.fill"></apx-chart>
      </div>
    </div>
    <div *ngIf="sellingTab === 'month'">
      <div id="chartLine3" dir="ltr">
        <apx-chart [series]="chartOptions3.series" [chart]="chartOptions3.chart" [xaxis]="chartOptions3.xaxis"
          [yaxis]="chartOptions.yaxis" [dataLabels]="chartOptions.dataLabels" [grid]="chartOptions.grid"
          [stroke]="chartOptions.stroke" [title]="chartOptions.title" [plotOptions]="chartOptions.plotOptions"
          [legend]="chartOptions.legend" [tooltip]="chartOptions.tooltip" [states]="chartOptions.states" [colors]="chartOptions3.colors" [fill]="chartOptions.fill"></apx-chart>
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

export class SaleRevenueComponent {
  //Tabs
  sellingTab: string = 'today';
  handleClick(tab: string): void {
    this.sellingTab = tab;
  }

  //Chart Data
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  public chartOptions3: Partial<ChartOptions>;


  constructor() {
    this.chartOptions = {
      series: [{
        name: "Total Revenue",
        data: [0, 30, 25, 50, 40, 55, 40, 75, 35, 40, 35, 58],
      }],
      colors: ["#8231D3"],
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.5,
          opacityTo: 0
        }
      },
      chart: {
        id: "chartLine",
        height: 300,
        type: "area",
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
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 3,
        dashArray: 0,
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
        marker: {
          show: true,
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
            colors: Array.from({
              length: 12
            }, () => '#747474'),
            fontSize: '14px',
            fontFamily: '"Jost", sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label',
          },
        },
        categories: [
          '2(h)', '4(h)', '6(h)', '8(h)', '10(h)', '12(h)', '14(h)', '16(h)', '18(h)', '20(h)', '22(h)', '24(h)'
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
      series: [{
        name: "Total Revenue",
        data: [25, 30, 35, 20, 25, 40, 35],
        color: "#7811FF",
      }],
      chart: {
        id: "chartLine2",
        height: 300,
        type: "area",
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      xaxis: {
        crosshairs: {
          show: false
        },
        labels: {
          style: {
            colors: Array.from({
              length: 7
            }, () => '#747474'),
            fontSize: '14px',
            fontFamily: '"Jost", sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label',
          },
        },
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
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
      series: [{
        name: "Total Revenue",
        data: [20, 36, 25, 50, 40, 55, 40, 75, 35, 40, 35, 58],
        color: "#7811FF",
      }],
      chart: {
        id: "chartLine3",
        height: 300,
        type: "area",
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      xaxis: {
        crosshairs: {
          show: false
        },
        labels: {
          style: {
            colors: Array.from({
              length: 12
            }, () => '#747474'),
            fontSize: '14px',
            fontFamily: '"Jost", sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label',
          },
        },
        categories: ['Jan', 'Feb', 'Mar', 'App', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Oct', 'Dec'],
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

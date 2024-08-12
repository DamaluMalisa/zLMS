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
  ApexStates
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
};


@Component({
  selector: 'nz-profitGrowth',
  template: `
    <div class="bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10 relative ">
  <div
    class="px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto max-sm:mb-[15px]">
    <h1
      class="mb-0 inline-flex items-center py-[19px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-white/[.87]">
      Profit Growth</h1>
      <div class="py-[16px]">
        <div class="flex items-center justify-center max-ssm:flex-col max-ssm:gap-y-[15px]">
          <div class="relative flex items-center mx-3">
            <span
              class="inline-block text-dark dark:text-white/[.87] me-1 ms-2.5 text-[18px] font-semibold">$8,550</span>
            <span class="flex items-center text-sm font-medium text-success">
                <svg-icon class="w-[20px] h-[20px] [&>svg]:w-full [&>svg]:h-full" src="assets/images/svg/unicons-line/arrow-up.svg"></svg-icon>
              25% </span>
          </div>
        </div>
      </div>
  </div>
  <div class="p-[25px] pt-0">
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
</div>
  `,
  styles: [`
    :host ::ng-deep .apexcharts-legend .apexcharts-legend-series .apexcharts-legend-text{
      @apply dark:text-white/[.60] #{!important};
    }
    :host ::ng-deep .apexcharts-text.apexcharts-yaxis-label {
      @apply dark:fill-white/[.60] #{!important};
    }
  `]
})

export class ProfitGrowthComponent {
  //Tabs
  sellingTab: string = 'today';
  handleClick(tab: string): void {
    this.sellingTab = tab;
  }

  //Chart Data
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial < ChartOptions > ;

  constructor() {
    this.chartOptions = {
      series: [{
        name: "Orders",
        data: [35, 55, 25, 60, 42, 80, 35],
        color: "#7811FF",
      }, {
        name: "Sales",
        data: [10, 30, 8, 30, 22, 38, 45],
        color: "#00AAFF",
      }],
      chart: {
        width: "100%",
        height: 350,
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
          columnWidth: '50%',
          borderRadius: 2,
        }
      },
      legend: {
        show: true,
        position: 'top',
        fontSize: '13px',
        fontFamily: '"Jost", sans-serif',
        fontWeight: 400,
        labels: {
          colors: '#747474',
        },
        markers: {
          width: 8,
          height: 8,
          radius: 20,
          offsetX: -4,
          offsetY:0,
        },
        itemMargin: {
          horizontal: 20,
        }
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
  }
}

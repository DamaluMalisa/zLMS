import { Component, Input } from '@angular/core';
import { ChartOptions } from './chart-options';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'nz-saleGrowth-status',
  template: `
  <div class="bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10 relative ">
      <div class="px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto max-sm:mb-[15px]">
        <h1 class="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-white/[.87] gap-[5px]">
          {{ chartTitle }}
          <span class="text-[12px] text-theme-gray dark:text-white/60 font-medium">
            (Last {{ totalTime }})
          </span>
        </h1>
        <div class="relative flex items-center">
          <span class="inline-block text-dark dark:text-white/[.87] me-1 ms-2.5 text-18 font-semibold">{{"$" + formatChartStatusNumber()}}</span>
          <span class="flex items-center text-sm text-{{chartStatus}} font-medium">
            <svg-icon class="w-[20px] h-[20px] [&>svg]:w-full [&>svg]:h-full" [src]="chartStatusIcon">
            </svg-icon>
            {{formatChartStatusPercent()}}
          </span>
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
            [colors]="customColors"
          >
          </apx-chart>
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

export class SaleGrowthStatusComponent {
  @Input() chartOptions: Partial<ChartOptions>; // Change chartOptions type to Partial<ChartOptions>
  @Input() customColors: string[]; // Add customColors property
  @Input() chartTitle: string;  // Add chartTitle property
  @Input() totalTime: string; // Add totalTime property
  @Input() chartStatusNumber: string; // New input for chart status number
  @Input() chartStatus: string; // New input for chart status text (e.g., 'success', 'error', etc.)
  @Input() chartStatusPercent: string; // New input for chart status percent
  @Input() chartStatusIcon: string; // New input for chart status icon (e.g., 'up', 'down', etc.)

  constructor(private decimalPipe: DecimalPipe) { }

  formatChartStatusNumber(): string {
    return this.decimalPipe.transform(this.chartStatusNumber, '1.2-2');
  }
  formatChartStatusPercent(): string {
    return this.decimalPipe.transform(this.chartStatusPercent, '1.0-0') + '%';
  }
}

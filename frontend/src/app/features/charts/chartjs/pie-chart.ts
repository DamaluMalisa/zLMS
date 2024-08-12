import { Component, ViewChild  } from '@angular/core';
import { Chart, ChartConfiguration, ChartType,ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import items from '../../../../assets/data/global/dropdown.json';

import { default as Annotation } from 'chartjs-plugin-annotation';

@Component({
selector: 'pie-chart',
template:`
<div class="bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10 relative h-full">
  <div
    class="px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto max-sm:mb-[15px]">
    <h1
      class="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-white/[.87] capitalize">
      bar Chart</h1>
  </div>
  <div class="p-[25px] pt-0">
    <div class="hexadash-chart-container">
    <canvas baseChart class="chart"
        [data]="pieChartData"
        [type]="pieChartType"
        [options]="pieChartOptions">
      </canvas>
    </div>
  </div>
  </div>
`,
})

export class PieChartComponent {
  appItems = items.appItems;
  constructor() {
    Chart.register(Annotation)
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    }
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ],
    datasets: [ {
      data: [ 300, 500, 100 ]
    } ]
  };
  public pieChartType: ChartType = 'pie';
}

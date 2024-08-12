import { Component, ViewChild  } from '@angular/core';
import { Chart, ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import items from '../../../../assets/data/global/dropdown.json';

import { default as Annotation } from 'chartjs-plugin-annotation';

@Component({
selector: 'bar-chart',
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
        [data]="ChartData"
        [options]="ChartDataOptions"
        [type]="ChartDataType"
        height="150"
        >
    </canvas>
    </div>
  </div>
  </div>
`,
})

export class BarChartComponent {
  appItems = items.appItems;
  constructor() {
    Chart.register(Annotation)
  }

  public ChartData: ChartConfiguration['data'] = {
    datasets: [{
      data: [10, 55, 42, 30, 42, 80, 35, 10, 53, 62, 45, 78],
      borderColor: "#7811FF",
      label: "Total Orders",
      borderWidth: 2.50,
      fill: false,
      backgroundColor: "#7811FF",
      hoverBackgroundColor: "#7811FF",
      tension: 0.4,
      pointHoverBorderColor: 'white',
      pointRadius: 0,
      pointHoverRadius: 6,
      pointHitRadius: 30,
      pointStyle: 'circle',
      pointHoverBorderWidth: 2,
  },
  {
      data: [30, 45, 35, 10, 5, 60, 8, 42, 30, 70, 54, 25],
      borderColor: "#00AAFF",
      label:"Total Sales",
      borderWidth: 2.50,
      fill: false,
      backgroundColor: "#00AAFF",
      hoverBackgroundColor: "#00AAFF",
      tension: 0.4,
      pointHoverBorderColor: 'white',
      pointRadius: 0,
      pointHoverRadius: 6,
      pointHitRadius: 30,
      pointStyle: 'circle',
      pointHoverBorderWidth: 2,
  },
],
    labels: [
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
  };

  public ChartDataOptions: ChartConfiguration['options'] = {
    responsive: true,
    elements: {
      line: {
        tension: 0.4
      },
        point: {
            radius: 0,
        },
    },
    scales: {
      y: {
          beginAtZero: true,
          stacked: false,
          max: 80,
          min: 0,
          grid: {
              color: "#485e9029",
              drawTicks: false,
          },
          ticks: {
              font: {
                  size: 14,
                  family: "'Jost', sans-serif",
              },
              color: '#747474',
              padding: 15,
              stepSize: 20,
              callback(label) {
                return `${label}k`;
              },
          },
      },
      x: {
        max: 80,
        min: 0,
          grid: {
              display: true,
              color: "transparent",
              z: 1,
              drawTicks: true,
          },

          ticks: {
              font: {
                  size: 14,
                  family: "'Jost', sans-serif",
              },
              color: '#747474'
          },
      },
    },

    plugins: {
        legend: {
          display: false,
          position: "top",
          align: "center",
          labels: {
              usePointStyle: true,
              color: '#747474',
              textAlign: 'center',
              boxWidth: 20,
              boxHeight: 4,
              padding: 25,
              font: {
                  size: 16,
                  family: "'Jost', sans-serif",
              },
            },
        },
        tooltip:{
          usePointStyle: true,
          mode: 'index',
        },
        annotation: {
          annotations: [
            {
              type: 'line',
              scaleID: 'x',
              value: 'March',
              borderColor: 'orange',
              borderWidth: 2,
              label: {
                display: true,
                position: 'center',
                color: 'orange',
                content: 'LineAnno',
                font: {
                  weight: 'bold'
                }
              }
            },
          ],
        }
    },
    layout: {
        padding: {
            left: -13,
            right: -10,
            top: 0,
            bottom: 0,
        },
    },
  };

  public ChartDataType: ChartType = 'bar';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
}

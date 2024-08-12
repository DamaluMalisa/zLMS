import { Component } from '@angular/core';
import { ChartOptions } from '../../container/dashboard/demoSix/chart-options';
@Component({
  selector: 'app-demo-eight',
  templateUrl: './demo-eight.component.html',
})
export class DemoEightComponent {
  isLoading = true;
  showContent = false;

  textColor: string = 'text-current';
  rounded: string = 'rounded-[14px]';
  bgColor: string = '/10';

  ngOnInit() {
    // Simulate loading time
    this.loadData();
  }

  loadData() {
    // Simulate an asynchronous data loading operation
    setTimeout(() => {
      this.isLoading = false;
      this.showContent = true;
    }, 500);
  }

  //charts
  customChartOptions1: Partial<ChartOptions> = {
    series: [{
      name: "Total sales",
      data: [0, 26, 15, 50, 40, 55, 40, 55, 35, 80],
    }],
    chart: {
      id: "chartLine",
      height: 314,
      type: "line",
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
  customColors1: string[] = ['#8231D3']; // Custom colors for Chart 1
  customChartTitle1: string = 'Total Sales'; // Custom chart title for Chart 1
  totalTime1: string = '10 Months'; // Custom total time for Chart 1
  // Chart status data for Chart 1
  chartStatusNumber1: string = '8550';
  chartStatus1: string = 'success';
  chartStatusPercent1: string = '25';
  chartStatusIcon1: string = '../../assets/images/svg/unicons-line/arrow-up.svg';
}

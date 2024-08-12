import { Component } from '@angular/core';
import { ChartOptions } from '../../container/dashboard/demoSix/chart-options';

@Component({
  selector: 'app-demo-six',
  templateUrl: './demo-six.component.html',
})
export class DemoSixComponent {
  isLoading = true;
  showContent = false;

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

  customChartOptions1: Partial<ChartOptions> = {
    series: [{
      name: "Total sales",
      data: [0, 26, 15, 50, 40, 55, 40, 55, 35, 80],
    }],
    chart: {
      id: "chartLine",
      height: 300,
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


  customChartOptions2: Partial<ChartOptions> = {
    series: [{
      name: "Total Orders",
      data: [38, 55, 42, 36, 60, 65, 50],
    }],
    chart: {
      id: "chartLine",
      height: 300,
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
        "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"
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

  customChartOptions3: Partial<ChartOptions> = {
    series: [{
      name: "Total Subscribers",
      data: [40, 48, 40, 46, 38, 65, 58, 59],
    }],
    chart: {
      id: "chartLine",
      height: 300,
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
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021"
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
  customColors2: string[] = ['#00ba34']; // Custom colors for Chart 2
  customColors3: string[] = ['#fe8f31']; // Custom colors for Chart 2

  customChartTitle1: string = 'Total Sales'; // Custom chart title for Chart 1
  customChartTitle2: string = 'Total Orders'; // Custom chart title
  customChartTitle3: string = 'Total Subscribes'; // Custom chart title

  totalTime1: string = '10 Months'; // Custom total time for Chart 1
  totalTime2: string = '7 Days'; // Custom total time for Chart 2
  totalTime3: string = '8 years'; // Custom total time for Chart 2

  // Chart status data for Chart 1
  chartStatusNumber1: string = '8550';
  chartStatus1: string = 'success';
  chartStatusPercent1: string = '25';
  chartStatusIcon1: string = '../../assets/images/svg/unicons-line/arrow-up.svg';

  // Chart status data for Chart 1
  chartStatusNumber2: string = '10550';
  chartStatus2: string = 'success';
  chartStatusPercent2: string = '60';
  chartStatusIcon2: string = '../../assets/images/svg/unicons-line/arrow-up.svg';

  // Chart status data for Chart 1
  chartStatusNumber3: string = '2550';
  chartStatus3: string = 'danger';
  chartStatusPercent3: string = '15';
  chartStatusIcon3: string = '../../assets/images/svg/unicons-line/arrow-down.svg';

}

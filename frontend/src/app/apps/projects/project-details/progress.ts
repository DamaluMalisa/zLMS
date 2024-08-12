import {
  Component
} from '@angular/core';

@Component({
  selector: 'progress-details',
  template: `
    <div class="progress-details px-[25px] pt-[20px] pb-[17px] bg-success rounded-xl mb-[25px]" *ngFor="let item of progressList">
      <div class="flex justify-between mb-[8px]">
        <h6 class="text-white dark:text-white/[.87] font-medium text-[16px] capitalize">{{item.name}}</h6>
        <span class="text-white dark:text-white/[.87] font-medium text-[16px] capitalize">{{item.total}}%</span>
      </div>
      <nz-progress [nzPercent]="64" [nzShowInfo]="false"></nz-progress>
    </div>
    <div class="bg-white dark:bg-white/10 p-[25px] rounded-[10px] gap-[25px] flex flex-wrap xl:flex-col max-xl:justify-between">
      <div class="flex items-center gap-x-5" *ngFor="let item of progressTask">
        <a class="flex items-center justify-center bg-{{item.status}}/10 text-{{item.status}} w-[60px] h-[60px] rounded-xl" href="/">
          <span class="[&>svg]:w-[24px] [&>svg]:h-[24px]" nz-icon nzType="{{item.icon}}" nzTheme="outline"></span>
        </a>
        <div>
          <h1 class=" text-dark dark:text-white/[.87] text-[20px] font-semibold mb-[3px]">{{item.sign}}{{item.total}}</h1>
          <p class="mb-0 text-body dark:text-white/60">{{item.des}}</p>
        </div>
      </div>
    </div>
`,
styles: [`
      ::ng-deep .progress-details .ant-progress-inner{
        @apply bg-white/30;
      }
      ::ng-deep .progress-details .ant-progress-bg{
        @apply bg-white;
        }
  `]
})

export class ProgressDetailsComponent {
  progressList = [{
    name: 'progress',
    total: 64,
  }, ]

  progressTask = [
    {
      "total": 47,
      "des": "Completed tasks",
      "icon": "unordered-list",
      "status": "primary"
    },
    {
      "total": 34,
      "des": "Task Completed",
      "icon": "pie-chart",
      "status": "secondary"
    },
    {
      "total": 27500,
      "sign":"$",
      "des": "Spending",
      "icon": "layout",
      "status": "success"
    },
    {
      "total": 250,
      "des": "Overdue tasks",
      "icon": "clock-circle",
      "status": "warning"
    }
  ]
}

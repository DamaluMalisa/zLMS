
import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-calendar-mini-two',
  template: `
  <div class="bg-white dark:bg-white/10 m-0 p-0 text-theme-dark dark:text-white/60 text-[15px] rounded-10 relative ">
    <div
        class="px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto max-sm:mb-[15px]">
        <h1
          class="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-white/[.87]">
          Calendar {{ currentYear }}
        </h1>
    </div>
    <div class="px-[25px] pt-0 pb-[35px]">
      <div class="mini-calendar">
        <full-calendar [options]="calendarOptions"></full-calendar>
      </div>
    </div>
  </div>
  `,
  styles: [`
    :host ::ng-deep .mini-calendar .fc .fc-toolbar.fc-header-toolbar{
      @apply justify-center gap-[15px] mb-[10px];
    }
    :host ::ng-deep .mini-calendar .fc .fc-toolbar.fc-header-toolbar .fc-button {
      @apply bg-transparent border-0 text-theme-gray dark:text-white/[.60] shadow-none outline-none text-[20px];
    }
    :host ::ng-deep .mini-calendar .fc .fc-button .fc-icon {
      @apply text-[15px];
    }
    :host ::ng-deep .mini-calendar .fc .fc-toolbar-title{
      @apply text-[16px] font-medium text-dark dark:text-white/[.87];
    }
    :host ::ng-deep .mini-calendar .fc td{
      @apply h-[64px] w-[64px] max-w-[64px] rounded-6;
    }
    :host ::ng-deep .mini-calendar .fc th{
      @apply w-[64px];
    }
    :host ::ng-deep .mini-calendar .fc-theme-standard .fc-scrollgrid,
    :host ::ng-deep .mini-calendar .fc-theme-standard td,
    :host ::ng-deep .mini-calendar .fc-theme-standard th{
      @apply border-0;
    }
    :host ::ng-deep .mini-calendar .fc .fc-daygrid-day-frame{
      @apply flex items-center justify-center;
    }
    :host ::ng-deep .mini-calendar .fc .fc-daygrid-day.fc-day-today{
      @apply bg-primary border-primary rounded-6;
    }
    :host ::ng-deep .mini-calendar .fc .fc-day-other .fc-daygrid-day-top{
      @apply text-light dark:text-white/[.60] text-[12px] font-medium;
    }
    :host ::ng-deep .mini-calendar .fc .fc-daygrid-day:not(.fc-day-other) .fc-daygrid-day-top{
      @apply text-[12px] font-medium text-theme-gray dark:text-white/[.60];
    }
    :host ::ng-deep .mini-calendar .fc .fc-daygrid-day.fc-day-today .fc-daygrid-day-top a{
      @apply text-white;
    }
    :host ::ng-deep .mini-calendar .fc .fc-col-header-cell-cushion{
      @apply text-[13px] font-medium text-theme-gray dark:text-white/[.60];
    }
    :host ::ng-deep .mini-calendar .fc thead .fc-scroller{
      @apply overflow-hidden #{!important};
    }
  `]
})

export class AppCalendarTwoComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, listPlugin], // Add listPlugin here if you want the list view
    headerToolbar: {
      left: 'prev',
      center: 'title',
      right: 'next'
    },
    // Add any other configurations you need...
  };

  //Current Year
  currentYear: number;
  constructor(private datePipe: DatePipe) {
    this.currentYear = new Date().getFullYear();
  }
}

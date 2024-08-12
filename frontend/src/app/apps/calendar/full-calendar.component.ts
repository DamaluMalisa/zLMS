import { Component, signal, ChangeDetectorRef,TemplateRef,ViewEncapsulation  } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { NzModalService } from 'ng-zorro-antd/modal';


@Component({
  selector: 'app-OnlyCalendar',
  templateUrl: './full-calendar.component.html',
  styles: [`
  .ant-radio-inner{
    @apply dark:bg-white/10 dark:border-white/30;
  }
  .ant-radio-checked .ant-radio-inner{
    @apply dark:border-primary;
  }
  .ant-radio-input:focus + .ant-radio-inner{
    @apply dark:shadow-none;
  }
  .ant-radio.ant-radio-checked .ant-radio-inner {
    @apply border-4 after:hidden;
  }
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
`],

})
export class AppOnlyCalendar {
  radioValue = 'A';

  calendarVisible = signal(true);

  calendarOptions = signal<CalendarOptions>({
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'today,prev,title,next',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  });
  currentEvents = signal<EventApi[]>([]);

  calendarOptions2: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, listPlugin], // Add listPlugin here if you want the list view
    headerToolbar: {
      left: 'prev',
      center: 'title',
      right: 'next'
    },
    // Add any other configurations you need...
  };

  constructor(private changeDetector: ChangeDetectorRef,private modalService: NzModalService) {
  }

  handleCalendarToggle() {
    this.calendarVisible.update((bool) => !bool);
  }

  handleWeekendsToggle() {
    this.calendarOptions.mutate((options) => {
      options.weekends = !options.weekends;
    });
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents.set(events);
    this.changeDetector.detectChanges(); // workaround for pressionChangedAfterItHasBeenCheckedError
  }

  // Show modal for creating a new project
  showNewProject(newProjectContent: TemplateRef<{}>) {
    const modal = this.modalService.create({
      nzTitle: 'Create New event',
      nzContent: newProjectContent,
      nzFooter: [
        {
          label: 'Create Project',
          type: 'primary',
          onClick: () =>
            this.modalService.confirm({
              nzTitle: '<span class="text-dark dark:text-white/[.87]">Are you sure you want to create this project?</span>',
              nzOnOk: () => this.modalService.closeAll()
            })
        }
      ],
      nzWidth: 520
    });
  }

  // Inside your component class
  getEventLabelClass(event: any): string {
    return 'bg-' + event.label;
  }
}

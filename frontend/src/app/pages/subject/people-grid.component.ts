import {
  Component,
  OnInit,
  Inject, TemplateRef, ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppsService } from '../../shared/services/apps.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { TableService } from '../../shared/services/table.service';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { ContactGrid } from '../../shared/interfaces/contacts-grid.type';
import { SubjectEnrollmentService } from '../../core/services/subject-enrollment.service';
import { SubjectEnrollment } from '../../core/models/subject-enrollment.model';
import { Page } from '../../core/models/rpage.model';
import { StudentService } from 'src/app/core/services/student.service';
import { Student } from 'src/app/core/models/student.model';

@Component({
  selector: 'app-people',
  template: `
    <!-- skeleton -->
    <ng-template #loadingSkeleton>
      <nz-skeleton class="bg-white dark:bg-white/10 rounded-6 p-[30px] pt-[15px]" [nzShape]="circle" [nzActive]="true"
                   [nzParagraph]="{ rows: 7}"></nz-skeleton>
    </ng-template>
    <!-- skeleton -->
    <div nz-col nzXs="24" nzMd="12">
      <ng-template #newContactContent>
      </ng-template>
      <!-- :End New project added -->
    </div>

    <div nz-row nzGutter="25" class="mt-[4px]">
      <div nz-col nzXs="24" nzMd="12" class="mb-[25px]">
        <div class="flex items-center flex-wrap gap-[20px]  max-lg:justify-center">
          <!-- Search Box -->
<!--          <h1 class="text-dark dark:text-white/[.87] text-[22px] font-semibold mb-0">Contacts</h1>-->
<!--          <div class="3xl:w-[280px] max-ssm:w-full [&>div>div.ant-select-selector]:border-0">-->
<!--            <nz-input-group class="bg-white dark:bg-white/10 rounded-[6px] h-[40px] flex items-center px-[20px]">-->
<!--              <input class="bg-transparent border-none text-[15px] shadow-none text-dark dark:text-white/[.87] flex items-center" type="text" nz-input-->
<!--                     placeholder="Search contacts" [(ngModel)]="searchInput" (ngModelChange)="search()">-->
<!--              <i class="text-theme-gray dark:text-white/[.87]" nz-icon nzType="search"></i>-->
<!--            </nz-input-group>-->
<!--          </div>-->
          <!-- :End Search Box -->
        </div>
      </div>
    </div>
    <div nz-row nzGutter="25">
      <div nz-col nzXs="24" nzSm="12" nzXl="8" nzXXl="6" class="mb-[25px]" *ngFor="let item of ContactGrid">
        <ng-container *ngIf="showContent; else loadingSkeleton">
          <div class="bg-white dark:bg-white/10 shadow-[0_5px_20px_rgba(173,181,217,0.01)] p-[25px] rounded-10 relative">
            <figure class="m-0 text-center">
              <img class="inline-block rounded-full w-[120px] h-[120px]" src="assets/images/avatars/{{item.avatar}}" alt="img">
              <figcaption class="mt-[20px]">
                <h3 class="text-[18px] font-semibold mb-0 text-dark dark:text-white/[.87]">{{item.name}}</h3>
                <span class="text-[#8288a4] dark:text-white/60 text-[14px]">{{item.rule}}</span>
              </figcaption>
            </figure>
            <div class="mt-[20px] dark:border-white/10 border-t-1 pt-[25px] border-regular" *ngIf="item.user.length > 0">
              <ul class="flex flex-col flex-wrap gap-[14px]">
                <li *ngFor="let item of item.user">
                  <div  class="flex items-center text-[#8288a4] dark:text-white/60 gap-[12px] text-[14px] capitalize" *ngIf="item.type == 'call'">
                    <span class="text-light dark:text-white/60" nz-icon nzType="{{item.icon}}" nzTheme="outline"></span>
                    {{item.name}}
                  </div>
                  <div  class="flex items-center text-[#8288a4] dark:text-white/60 gap-[12px] text-[14px] capitalize" *ngIf="item.type == 'mail'">
                    <span class="text-light dark:text-white/60" nz-icon nzType="{{item.icon}}" nzTheme="outline"></span>
                    {{item.name}}
                  </div>
                  <div  class="flex items-center text-[#8288a4] dark:text-white/60 gap-[12px] text-[14px] capitalize" *ngIf="item.type == 'skype'">
                    <span class="text-light dark:text-white/60" nz-icon nzType="{{item.icon}}" nzTheme="outline"></span>
                    {{item.name}}
                  </div>
                  <div  class="flex items-center text-[#8288a4] dark:text-white/60 gap-[12px] text-[14px] capitalize" *ngIf="item.type == 'map'">
                    <svg-icon class="[&>svg]:w-[14px] [&>svg]:h-[14px] text-light dark:text-white/60"
                              src="assets/images/svg/feather/{{item.icon}}.svg"></svg-icon>
                    {{item.name}}
                  </div>
                </li>
              </ul>
            </div>
            <button nz-button class="bg-transparent border-none absolute top-[16px] text-light dark:text-white/60 ltr:right-[26px] rtl:left-[26px] inline-flex items-center justify-center p-0" nz-dropdown nzTrigger="click" [nzDropdownMenu]="menu">
              <svg-icon
                class=" text-light-extra dark:text-white/60 dark:group-hover:text-white/[.87] w-[24px] h-[24px] [&>svg]:w-[24px] [&>svg]:h-[24px]"
                src="assets/images/svg/feather/more-horizontal.svg"></svg-icon>
            </button>
            <nz-dropdown-menu #menu="nzDropdownMenu">
              <ul
                class="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4 capitalize"
                nz-menu nzSelectable>
                <li
                  class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87]"
                  nz-menu-item>
                  view
                </li>
                <li
                  class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87]"
                  nz-menu-item>
                  edit
                </li>
                <li
                  class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87]"
                  nz-menu-item>
                  delete
                </li>
              </ul>
            </nz-dropdown-menu>
          </div>
        </ng-container>
      </div>
    </div>
  `,
})

export class PeopleGridComponent implements OnInit {

  constructor(private ContactGridSvc: AppsService,
              private subjectEnrollmentService: SubjectEnrollmentService,
              private studentService: StudentService,
              private modalService: NzModalService,
              private tablesvc: TableService,
              private route: ActivatedRoute) {}

  view = 'contactGridView';
  ContactGridRaw: ContactGrid[];
  ContactGrid: ContactGrid[];
  searchInput: string;
  isLoading = true;
  showContent = false;
  startValue: Date | null = null;
  endValue: Date | null = null;
  students: Student[];

  // Calendar
  @ViewChild('endDatePicker') endDatePicker!: NzDatePickerComponent;

  ngOnInit(): void {
    this.ContactGridSvc.getContactGridJson().subscribe(data => {
      this.ContactGridRaw = data;
      this.ContactGrid = data;
      console.log('ContactGridRaw:', this.ContactGridRaw);
      console.log('ContactGrid:', this.ContactGrid);
    });
    // Simulate loading time
    this.loadData();
  
    const id = Number(this.route.snapshot.parent.paramMap.get('id'));
    this.studentService.getBySubjectIdAll(id).subscribe({
      next: (students: Student[]) => {
        this.students = students;
        console.log('People:', this.students);
      },
      error: (err) => {
        console.error('Error fetching subject enrollments:', err);
      },
    });
  }

  loadData() {
    // Simulate an asynchronous data loading operation
    setTimeout(() => {
      this.isLoading = false;
      this.showContent = true;
    }, 500);
  }

  search() {
    const data = this.ContactGridRaw;
    this.ContactGrid = this.tablesvc.search(this.searchInput, data );
  }

  showNewContact(newContactContent: TemplateRef<{}>) {
    const modal = this.modalService.create({
      nzTitle: 'Contact Information',
      nzContent: newContactContent,
      nzFooter: [
        {
          label: 'Add New Contact',
          type: 'primary',
          onClick: () => this.modalService.confirm(
            {
              nzTitle: 'Are you sure you want to create this project?',
              nzOnOk: () => this.modalService.closeAll()
            }
          )
        },
      ],
      nzWidth: 620
    });
  }

  // Checkbox
  log(value: string[]): void {
    console.log(value);
  }
  disabledStartDate = (startValue: Date): boolean => {
    if (!startValue || !this.endValue) {
      return false;
    }
    return startValue.getTime() > this.endValue.getTime();
  }

  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.startValue) {
      return false;
    }
    return endValue.getTime() <= this.startValue.getTime();
  }

  handleStartOpenChange(open: boolean): void {
    if (!open) {
      this.endDatePicker.open();
    }
    console.log('handleStartOpenChange', open);
  }

  handleEndOpenChange(open: boolean): void {
    console.log('handleEndOpenChange', open);
  }
}

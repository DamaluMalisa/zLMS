import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from '../../../core/models/subject.model';
import {AuthService} from '../../../core/services/auth.service';
import {SubjectService} from '../../../core/services/subject.service';

@Component({
  selector: 'dynamic',
  template: `
    <div class="bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10 relative mb-[25px]">
      <div class="py-[16px] px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] border-regular dark:border-white/10 border-b">
        <h4 class="mb-0 text-lg font-medium text-dark dark:text-white/[.87]">Active Courses</h4>
      </div>
      <div class="p-[25px]">
        <div class="flex items-center justify-center w-full mt-5 mb-[25px] max-md:flex-col max-md:justify-center gap-[15px]">
          <div class="inline-flex items-center flex-wrap w-full gap-[20px] max-md:justify-center">
            <div class="inline-flex items-center">
              <span class="ltr:mr-2 rtl:ml-2 dark:text-white/60">Id:</span>
              <input
                class="h-10 px-[20px] text-body dark:text-white/60 bg-white dark:bg-white/10 border-normal border-1 dark:border-white/10 rounded-[6px]"
                nz-input
                placeholder="Search with Id"
                [(ngModel)]="value"
                (ngModelChange)="searchById()"
              />
            </div>
            <div class="inline-flex items-center">
              <span class="ltr:mr-2 rtl:ml-2 dark:text-white/60">Status:</span>
              <nz-select
                class="min-w-[180px] capitalize [&>nz-select-top-control]:border-normal dark:[&>nz-select-top-control]:border-white/10 [&>nz-select-top-control]:bg-white [&>nz-select-top-control]:dark:bg-white/10 [&>nz-select-top-control]:shadow-none [&>nz-select-top-control]:text-dark [&>nz-select-top-control]:dark:text-white/60 [&>nz-select-top-control]:h-[40px] [&>nz-select-top-control]:flex [&>nz-select-top-control]:items-center [&>nz-select-top-control]:rounded-[6px] [&>nz-select-top-control]:px-[20px] [&>.ant-select-arrow]:text-light dark:[&>.ant-select-arrow]:text-white/60"
                [(ngModel)]="statusFilter"
                (ngModelChange)="filterByStatus()"
              >
                <nz-option nzValue="all" nzLabel="All"></nz-option>
                <nz-option nzValue="active" nzLabel="Active"></nz-option>
                <nz-option nzValue="deactivated" nzLabel="Deactivated"></nz-option>
                <nz-option nzValue="blocked" nzLabel="Blocked"></nz-option>
              </nz-select>
            </div>
          </div>
          <div class="ssm:min-w-[280px]">
            <nz-input-group class="h-10 inline-flex items-center text-body dark:text-white/60 bg-white dark:bg-white/10 border-normal border-1 dark:border-white/10 rounded-[6px] px-[20px]">
              <i class="text-light dark:text-white/[.87] text-[18px]" nz-icon nzType="search"></i>
              <input
                class="bg-transparent border-none text-[15px] shadow-none text-dark dark:text-white/[.87] flex items-center"
                type="text"
                nz-input
                placeholder="Search contacts"
                [(ngModel)]="contactSearchValue"
                (ngModelChange)="filterByContact()"
              />
            </nz-input-group>
          </div>
        </div>
        <div class="w-full overflow-x-auto">
          <nz-table #basicTable [nzData]="filteredSubjects" [nzFrontPagination]="true" [nzShowPagination]="true" class="max-h-[650px]">
            <thead>
              <tr>
                <th class="bg-regularBG dark:bg-[#323440] px-[20px] py-[16px] text-start text-dark dark:text-white/[.87] text-[15px] font-medium border-none before:hidden rounded-s-[10px] capitalize">ID</th>
                <th class="bg-regularBG dark:bg-[#323440] px-[20px] py-[16px] text-start text-dark dark:text-white/[.87] text-[15px] font-medium border-none before:hidden capitalize">Name</th>
                <th class="bg-regularBG dark:bg-[#323440] px-[20px] py-[16px] text-start text-dark dark:text-white/[.87] text-[15px] font-medium border-none before:hidden capitalize">Progress</th>
                <th class="bg-regularBG dark:bg-[#323440] px-[20px] py-[16px] text-start text-dark dark:text-white/[.87] text-[15px] font-medium border-none before:hidden capitalize">Semester</th>
                <th class="bg-regularBG dark:bg-[#323440] px-[20px] py-[16px] text-start text-dark dark:text-white/[.87] text-[15px] font-medium border-none before:hidden capitalize">Credits</th>
                <th class="bg-regularBG dark:bg-[#323440] px-[20px] py-[16px] text-start text-dark dark:text-white/[.87] text-[15px] font-medium border-none before:hidden capitalize">Instructor</th>
                <th class="bg-regularBG dark:bg-[#323440] px-[20px] py-[16px] text-start text-dark dark:text-white/[.87] text-[15px] font-medium border-none before:hidden rounded-e-[10px] capitalize ">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr class="group" *ngFor="let subject of filteredSubjects">
                <td class="ltr:pr-[20px] rtl:pl-[20px] text-dark dark:text-white/[.87] text-[15px] py-4 before:hidden border-none group-hover:bg-transparent">{{ subject.id }}</td>
                <td class="ltr:pr-[20px] rtl:pl-[20px] text-dark dark:text-white/[.87] text-[15px] py-4 before:hidden border-none group-hover:bg-transparent">
                  <a class="m-0.5 ltr:mr-[11px] rtl:ml-[11px] text-dark dark:text-white/[87] text-15 font-medium capitalize"
                     [routerLink]="['/pages/subject', subject.id]">{{ subject.name }}</a></td>
                <td class="ltr:pr-[20px] rtl:pl-[20px] text-dark dark:text-white/[.87] text-[15px] py-4 before:hidden border-none group-hover:bg-transparent">{{ subject.progress }}</td>
                <td class="ltr:pr-[20px] rtl:pl-[20px] text-dark dark:text-white/[.87] text-[15px] py-4 before:hidden border-none group-hover:bg-transparent">{{ subject.semester }}</td>
                <td class="ltr:pr-[20px] rtl:pl-[20px] text-dark dark:text-white/[.87] text-[15px] py-4 before:hidden border-none group-hover:bg-transparent">{{ subject.credits }}</td>
                <td class="ltr:pr-[20px] rtl:pl-[20px] text-dark dark:text-white/[.87] text-[15px] py-4 before:hidden border-none group-hover:bg-transparent">{{ subject.professor.lastName }}</td>
                <td class="ltr:pr-[20px] rtl:pl-[20px] text-dark dark:text-white/[.87] text-[15px] py-4 before:hidden border-none group-hover:bg-transparent">
                  <span
                    class="inline-flex items-center justify-center bg-{{ subject.status }}/10 text-{{ subject.status }} min-h-[24px] px-3 text-xs font-medium rounded-[15px] capitalize"
                  >
                    {{ subject.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </nz-table>
        </div>
      </div>
    </div>
  `,
})
export class DynamicComponent {
  value = '';
  statusFilter = '';
  contactSearchValue = '';
  subjects: Subject[] = [];
  filteredSubjects: Subject[];

  constructor(private http: HttpClient,
              public authService: AuthService,
              public subjectService: SubjectService) {}

  ngOnInit(): void {



    this.subjectService.getByStudentId(this.authService.getStudentId()).subscribe((data: any[]) => {
      this.subjects = data;
      this.filteredSubjects = data;

    });

    this.subjectService.getByTeacherId(this.authService.getTeacherId()).subscribe((data: any[]) => {
      this.subjects = data;
      this.filteredSubjects = data;

    });
  }


  searchById(): void {
    // if (this.value) {
    //   this.filteredSubjects = this.subjects.filter(
    //     (subject) => subject.id === this.value
    //   );
    // } else {
    //   this.filteredSubjects = this.subjects;
    // }

    this.filteredSubjects = this.subjects;
  }

  filterByContact(): void {
    this.filteredSubjects = this.applyFilters();
  }

  filterByStatus(): void {
    this.filteredSubjects = this.applyFilters();
  }

  private applyFilters(): Subject[] {
    return this.subjects.filter((subject) =>
      subject.name.toLowerCase().includes(this.contactSearchValue.toLowerCase())
      && (this.statusFilter === 'all' || subject.status.toLowerCase() === this.statusFilter.toLowerCase())
    );
  }
}

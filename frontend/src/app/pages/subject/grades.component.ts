import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AssignmentService} from '../../core/services/assignment.service';
import {Assignment} from '../../core/models/assignment.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AssignmentGrade} from '../../core/models/assignment-grade.model';
import {AssignmentGradeService} from '../../core/services/assignment-grade.service';
import {AssignmentsComponent} from './assignments.component';
import {SubjectEnrollmentService} from '../../core/services/subject-enrollment.service';
import {SubjectEnrollment} from '../../core/models/subject-enrollment.model';

interface Person {
  id: string;
  name: string;
  shipment: string;
  department: string;
  employeeCode: string;
  joinDate: string;
  status: string;
}
@Component({
  selector: 'app-grades',
  template: `
    <div nz-row nzGutter="25">
      <ng-template #loadingSkeleton>
        <nz-skeleton class="bg-white dark:bg-white/10 rounded-6 p-[30px] pt-[15px]" [nzShape]="circle" [nzActive]="true"
                     [nzParagraph]="{ rows: 5 }"></nz-skeleton>
      </ng-template>

      <div nz-col nzXs="24" class="mb-[25px]"z>
        <div class="bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10 relative mb-[25px]">
          <div
            class="py-[16px] px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] border-regular dark:border-white/10 border-b">
            <h4 class="mb-0 text-lg font-medium text-dark dark:text-white/[.87]">Grades</h4>
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
                    [(ngModel)]="value"/>
                </div>
                <div class="inline-flex items-center">
                  <span class="ltr:mr-2 rtl:ml-2 dark:text-white/60">Status:</span>
                  <nz-select
                    class="min-w-[180px] capitalize [&>nz-select-top-control]:border-normal dark:[&>nz-select-top-control]:border-white/10 [&>nz-select-top-control]:bg-white [&>nz-select-top-control]:dark:bg-white/10 [&>nz-select-top-control]:shadow-none [&>nz-select-top-control]:text-dark [&>nz-select-top-control]:dark:text-white/60 [&>nz-select-top-control]:h-[40px] [&>nz-select-top-control]:flex [&>nz-select-top-control]:items-center [&>nz-select-top-control]:rounded-[6px] [&>nz-select-top-control]:px-[20px] [&>.ant-select-arrow]:text-light dark:[&>.ant-select-arrow]:text-white/60"
                    [(ngModel)]="statusFilter">
                    <nz-option nzValue="all" nzLabel="All"></nz-option>
                    <nz-option nzValue="active" nzLabel="Active"></nz-option>
                    <nz-option nzValue="deactivated" nzLabel="Deactivated"></nz-option>
                    <nz-option nzValue="blocked" nzLabel="Blocked"></nz-option>
                  </nz-select>
                </div>
              </div>
              <div class="ssm:min-w-[280px]">
                <nz-input-group
                  class="h-10 inline-flex items-center text-body dark:text-white/60 bg-white dark:bg-white/10 border-normal border-1 dark:border-white/10 rounded-[6px] px-[20px]">
                  <i class="text-light dark:text-white/[.87] text-[18px]" nz-icon nzType="search"></i>
                  <input
                    class="bg-transparent border-none text-[15px] shadow-none text-dark dark:text-white/[.87] flex items-center"
                    type="text"
                    nz-input
                    placeholder="Search contacts"
                    [(ngModel)]="contactSearchValue"/>
                </nz-input-group>
              </div>
            </div>
            <div class="w-full overflow-x-auto">
              <nz-table #basicTable [nzData]="assignmentGrades" [nzFrontPagination]="true" [nzShowPagination]="true" class="max-h-[650px]">
                <thead>
                <tr>
                  <th
                    class="bg-regularBG dark:bg-[#323440] px-[20px] py-[16px] text-start text-dark dark:text-white/[.87] text-[15px] font-medium border-none before:hidden capitalize">
                    Student Name
                  </th>
                  <th *ngFor="let assignment of assignments"
                    class="bg-regularBG dark:bg-[#323440] px-[20px] py-[16px] text-start text-dark dark:text-white/[.87] text-[15px] font-medium border-none before:hidden capitalize">
                    {{ assignment.title }} <br/>
                    <p class="text-[12px] font-normal text-light dark:text-white/60">
                     Out of {{ assignment.points }}
                    </p>
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr class="group" *ngFor="let student of subjectEnrollments">
                  <td
                    class="ltr:pr-[20px] rtl:pl-[20px] text-dark dark:text-white/[.87] text-[15px] py-4 before:hidden border-none group-hover:bg-transparent">{{ student.student.firstName + ' ' + student.student.lastName }}
                  </td>
                  <td *ngFor="let assignment of assignments"
                    class="ltr:pr-[20px] rtl:pl-[20px] text-dark dark:text-white/[.87] text-[15px] py-4 before:hidden border-none group-hover:bg-transparent">{{ getGradeForStudentAndAssignment(student.student.id, assignment.id)?.grade || '---' }}
                  </td>
                </tr>
                </tbody>
              </nz-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class GradesComponent {
  value = '';
  statusFilter = '';
  contactSearchValue = '';
  people: Person[] = [];
  filteredPeople: Person[] = [];
  isLoading = true;
  showContent = false;
  assignmentGrades: AssignmentGrade[];
  assignments: Assignment[];
  subjectEnrollments: SubjectEnrollment[];

  constructor(private http: HttpClient,
              private assignmentGradeService: AssignmentGradeService,
              private assignmentService: AssignmentService,
              private subjectEnrollmentService: SubjectEnrollmentService,
              private route: ActivatedRoute,
              public router: Router) {}

  ngOnInit(): void {

    const id = Number(this.route.snapshot.parent.paramMap.get('id'));

    this.assignmentService.getBySubjectIdAll(id).subscribe({
      next: (assignments: Assignment[]) => {
        this.assignments = assignments;
        this.isLoading = false;
        this.showContent = true;
      },
      error: () => {},
    });
    this.subjectEnrollmentService.getBySubjectIdAll(id).subscribe({
      error: () => {
      },
      next: (subjectEnrollments: SubjectEnrollment[]) => {
        this.subjectEnrollments = subjectEnrollments;
        console.log(subjectEnrollments);
        this.isLoading = false;
        this.showContent = true;
      },
    });

    this.assignmentGradeService.getBySubjectIdAll(id).subscribe({
      error: () => {
      },
      next: (assignmentGrades: AssignmentGrade[]) => {
        this.assignmentGrades = assignmentGrades;
        console.log(assignmentGrades);
        this.isLoading = false;
        this.showContent = true;
      },
    });
  }

  getGradeForStudentAndAssignment(studentId: number, assignmentId: number): AssignmentGrade | undefined {
    return this.assignmentGrades.find(
      grade => grade.student.id === studentId && grade.assignmentSubmission.assignment.id === assignmentId
    );
  }
}

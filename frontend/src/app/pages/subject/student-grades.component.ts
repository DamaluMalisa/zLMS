import {
    Component,
    OnInit,
    Inject, ElementRef, ViewChild
  } from '@angular/core';
  import {
    DOCUMENT
  } from '@angular/common';
  import {ActivatedRoute, Router} from '@angular/router';
  import {Assignment} from '../../core/models/assignment.model';
  import {AssignmentService} from '../../core/services/assignment.service';
  import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
  import {SubjectService} from '../../core/services/subject.service';
  import {Subject} from '../../core/models/subject.model';
  import {AuthService} from '../../core/services/auth.service';
  import { NzMessageService } from 'ng-zorro-antd/message';
  import { WindowsFill } from '@ant-design/icons-angular/icons';
  
  @Component({
    selector: 'app-assignments',
    template: `
      <!-- skeleton -->
      <ng-template #loadingSkeleton>
        <nz-skeleton [nzActive]="true" [nzParagraph]="{ rows: 12 }" [nzShape]="circle"
                     class="bg-white dark:bg-white/10 rounded-6 p-[30px] pt-[15px]"></nz-skeleton>
      </ng-template>
      <!-- skeleton -->
      <ng-container *ngIf="showContent; else loadingSkeleton">
        <div class="text-warning px-[25px] pb-[50px] pt-[5px]" *ngIf="assignments.length === 0 && authService.validateRoles(['ROLE_STUDENT'], 'any')">
        <nz-empty></nz-empty>
        </div>
        <div class="mail-content" *ngIf="isAssignmentListOpen && assignments.length > 0">
          <div
            class="flex items-center justify-between px-[30px] py-[12px] border-b border-regular dark:border-white/10">
            <table class="w-full overflow-x-auto">
              <thead>
              <tr
                class="max-3xl:flex max-3xl:items-center max-3xl:flex-col max-3xl:justify-center max-3xl:gap-[15px]">              
                <th>
                      <div class="flex items-center [&>a]:flex [&>a]:items-center gap-[8px]">
                        <label nz-checkbox [(ngModel)]="allChecked" (ngModelChange)="updateAllChecked()"
                          [nzIndeterminate]="indeterminate"></label>
                      </div>
                    </th>
                
                <th>
                      <div>
                        <nz-input-group [nzSuffix]="suffixIconSearch"
                          class="w-full rounded-[23px] h-[44px] border-none text-[15px] flex items-center py-[0.5rem] px-[20px] bg-normalBG dark:bg-white/10">
                          <input class="font-medium bg-transparent" type="text" nz-input placeholder="Search mail" />
                        </nz-input-group>
                        <ng-template #suffixIconSearch>
                          <span class="[&>svg]:text-theme-gray dark:[&>svg]:text-white/60 " nz-icon
                            nzType="search"></span>
                        </ng-template>
                      </div>
                    </th>
  
              </tr>
              </thead>
            </table>
          </div>
          <div class="overflow-x-auto">
              <div
                class="flex items-center px-[30px] py-[15px] border-b border-regular dark:border-white/10 last:border-none "
                *ngFor="let item of assignments">
                <label class="me-[15px]" nz-checkbox [(ngModel)]="item.checked"
                  (ngModelChange)="updateSingleChecked()"></label>
                <nz-table class="w-full list-info">
                  <tr
                    class="3xl:[&>td:first-child]:w-[30%] max-3xl:[&>td:first-child]:max-w-[200px] max-3xl:[&>td:first-child]:min-w-[200px] max-lg:contents max-xl:gap-[10px] flex items-center">
                    <td (click)="viewAssignment(item)" class="list-sender px-[15px]">
                      <div class="flex items-center gap-[10px]">
                        <!-- <span
                          class="text-light-extra dark:text-white/60 [&>svg]:w-[16px] [&>svg]:h-[16px] [&.active>svg]:text-warning {{item.star}}"
                          nz-icon nzType="star" nzTheme="outline"></span> -->
                          <i class="[&>svg]:w-[14px] [&>svg]:h-[14px] text-light-extra dark:text-white/60 group-hover:text-primary" nz-icon nzType="send" theme="outline"></i>
                        <h6
                          class="mb-0 text-body dark:text-white/60 text-[15px] font-medium">
                          {{ item.title }}</h6>
                      </div>
                    </td>
                    <td class="list-content px-[15px] w-full">
                      <div class="list-msg text-start">
                        <h1 class="text-[15px] font-medium inline-flex items-center gap-[10px]">
                          <div class="text-body dark:text-white/60">
                          Points {{ item.points }}
                          </div>
                          <span
                            class="inline-flex items-center h-[22px] px-1.5 text-xs font-normal capitalize rounded-[3px] bg-deepBG dark:bg-white/10 text-body dark:text-white/60 [&.unread]:text-primary [&.unread]:bg-primary/10 {{item.inboxActive}}">status</span>
                        </h1>
                        <div class="flex items-center gap-[15px] {{item.attachShow}}">
                          <a class="inline-flex items-center bg-deepBG dark:bg-white/10 h-[30px] mt-[15px] px-5 text-light dark:text-white/60 text-[13px] rounded-[15px] gap-[6px]"
                            download="" href="#">
                            <span nz-icon nzType="link" nzTheme="outline"></span>
                            Available {{ item.availableFrom | date: 'medium' }}
                          </a>
                          <a class="inline-flex items-center bg-deepBG dark:bg-white/10 h-[30px] mt-[15px] px-5 text-light dark:text-white/60 text-[13px] rounded-[15px] gap-[6px]"
                            download="" href="#">
                            <span nz-icon nzType="link" nzTheme="outline"></span>
                            Due {{ item.dueDate | date: 'medium' }}
                          </a>
                          </div>
                      </div>
                    </td>
                    <td class="list-date px-[15px] xl:text-end max-lg:text-end whitespace-nowrap">
                      <span
                        style="font-size: 18px;"
                        class="w-[18px] h-[18px] ltr:mr-[10px] rtl:ml-[10px] rounded-full"
                        [ngClass]="{
                          'bg-green-500': item.available,
                          'text-gray-600 dark:text-gray-400': !item.available
                        }"
                        nz-icon nzType="check-circle" nzTheme="outline">
                      </span>
                      </td>
                  </tr>
                </nz-table>
              </div>
            </div>
        </div>
      </ng-container>
    `,
    styles: [`
      [nz-radio] {
        display: block;
      }
      :host ::ng-deep .ant-radio-inner{
        @apply dark:bg-white/10 dark:border-white/30;
      }
      :host ::ng-deep .ant-radio-checked .ant-radio-inner{
        @apply dark:border-primary;
      }
      :host ::ng-deep .ant-radio-input:focus + .ant-radio-inner{
        @apply dark:shadow-none;
      }
      :host ::ng-deep .ant-input{
        @apply dark:bg-white/10 dark:border-white/30;
      }
      :host ::ng-deep nz-select nz-select-top-control {
        @apply border-none shadow-none #{!important};
      }
      :host ::ng-deep .ant-form-item-extra{
        @apply text-dark dark:text-white/[.87];
      }
      :host ::ng-deep .ant-picker-separator{
        @apply text-dark dark:text-white/[.87]
      }
    `]
  })
  
  export class StudentGradesComponent implements OnInit {
    constructor(private assignmentService: AssignmentService,
                public authService: AuthService,
                private subjectService: SubjectService,
                @Inject(DOCUMENT) private document: Document,
                private route: ActivatedRoute,
                private message: NzMessageService,
                public router: Router,
                private fb: FormBuilder) {}
  
    subject: Subject[];
    assignments: Assignment[];
    isLoading = true;
    showContent = false;
    allChecked = false;
    indeterminate = false;
    isAssignmentListOpen = true;
    createButtonClicked = false;
    validateForm: FormGroup;
    collapsePanelClass = 'mb-1 font-medium text-dark bg-transparent dark:text-white/[.87] text-15 border-regular border-1 dark:border-white/10 rounded-6 [&>.ant-collapse-content]:border-none [&>.ant-collapse-header]:px-[20px] [&>.ant-collapse-header]:py-[18px] aria-expanded:[&>.ant-collapse-header]:border-b-1 [&>.ant-collapse-header]:border-regular dark:[&>.ant-collapse-header]:border-white/10';
    inputClass = 'w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60';
    isValid: boolean;
    startValue: Date | null = null;
    endValue: Date | null = null;
    endOpen = false;
    radioValue = 'A';
    editorContent = '';
    @ViewChild('editor') editor!: ElementRef;
  
    showDiv = true;
  
    ngOnInit(): void {
  
      const id = Number(this.route.snapshot.parent.paramMap.get('id'));
      this.subjectService.getById([id]).subscribe({
        next: (subject: Subject[]) => {
          this.subject = subject;
        },
        error: () => {},
      });
      this.assignmentService.getBySubjectIdAll(id).subscribe({
        next: (assignments: Assignment[]) => {
          this.assignments = assignments;
          this.isLoading = false;
          this.showContent = true;
        },
        error: () => {},
      });
  
    }
  
  
  
    viewAssignment(assignment: Assignment) {
      if (this.authService.validateRoles(['ROLE_STUDENT'], 'any')) {
        this.router.navigate(['/pages/subject', this.route.snapshot.parent.paramMap.get('id'), 'take-assignment', assignment.id]).catch(error => {
          console.error('Navigation error:', error);
        });
      } else if (this.authService.validateRoles(['ROLE_TEACHER'], 'any')) {
        this.router.navigate(['/pages/subject', this.route.snapshot.parent.paramMap.get('id'), 'assignment', assignment.id]).catch(error => {
          console.error('Navigation error:', error);
        });
      }
    }
  
  
    
  
  }
  
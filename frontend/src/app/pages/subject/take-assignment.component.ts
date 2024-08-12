import {
  Component,
  OnInit,
  Inject, TemplateRef
} from '@angular/core';
import {
  DOCUMENT
} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {Assignment} from '../../core/models/assignment.model';
import {Student} from '../../core/models/student.model';
import {AssignmentService} from '../../core/services/assignment.service';
import {BundleNavigationService} from '../../core/services/bundle-navigation.service';
import {AssignmentSubmissionService} from '../../core/services/assignment-submission.service';
import {AssignmentSubmission} from '../../core/models/assignment-submission.model';
import {AuthService} from '../../core/services/auth.service';
import {StudentService} from '../../core/services/student.service';
import {NzMessageService} from 'ng-zorro-antd/message';
import {NzUploadChangeParam, NzUploadFile} from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-assignment',
  template: `
    <!-- skeleton -->
    <ng-template #loadingSkeleton>
      <nz-skeleton [nzActive]="true" [nzParagraph]="{ rows: 12 }" [nzShape]="circle"
                   class="bg-white dark:bg-white/10 rounded-6 p-[30px] pt-[15px]"></nz-skeleton>
    </ng-template>
    <!-- skeleton -->
    <ng-container *ngIf="showContent; else loadingSkeleton">
      <ng-container *ngIf="assignment">
        <div class="mail-content bg-white dark:bg-[#1b1c29] rounded-[10px]">
          <div
            class="flex items-center justify-between max-3xl:justify-center px-[30px] py-[12px] border-b border-regular dark:border-white/10">
            <table class="w-full overflow-x-auto">
              <thead>
              <tr
                class="max-3xl:flex max-3xl:items-center max-3xl:flex-col max-3xl:justify-center max-3xl:gap-[15px]">
                <th class="text-start sm:w-[4%]">
                  <a
                    class="inline-flex items-center justify-center bg-transparent text-light-extra dark:text-white/60 w-[38px] h-[38px] rounded-full hover:bg-primary/10 hover:text-primary dark:hover:text-primary"
                    (click)="closeAssignment()">
                        <span class="[&>svg]:w-[12px] [&>svg]:h-[12px]" nz-icon nzType="arrow-left"
                              nzTheme="outline"></span>
                  </a>
                </th>
                <th>
                  <div class="flex items-center">
                    <a aria-current="page"
                       class="inline-flex items-center justify-center bg-transparent text-light-extra dark:text-white/60 w-[38px] h-[38px] rounded-full hover:bg-primary/10 hover:text-primary dark:hover:text-primary active"
                       (click)="refresh()" nzTooltipTitle="Refresh" nzTooltipPlacement="bottomRight" nz-tooltip>
                      <span nz-icon nzType="reload" nzTheme="outline"></span>
                    </a>
                  </div>
                </th>
                <th>
                </th>
              </tr>
              </thead>
            </table>
          </div>
          <div class="xs:px-[25px]">
            <div class=" py-[30px] px-[25px]  border-b border-regular dark:border-white/10">
              <div class="flex items-center justify-between flex-wrap sm:gap-[15px] sm:y-[1px] max-sm:gap-[5px]">
                <h6 class="text-dark dark:text-white/[.87] text-[24px] font-semibold leading-[30px] mb-[5px]">
                  {{ assignment[0].title }}
                </h6>
              </div>
              <div class="flex-wrap items-center justify-between md:mb-[20px] md:mt-5 flex max-md:mb-[30px] gap-y-[20px]">
                <div class="flex items-center media  gap-5">
                  <div class="ms-[10]">
                  </div>
                </div>
              </div>
              <div class="px-[80px] max-sm:px-0">
                <div class="xs:mb-[17px] text-[17px] leading-[24px] max-xs:mb-[30px">
  <p [innerHTML]="assignment[0].assignmentContent" class="inline-block mb-[15px] text-body dark:text-white/60"></p>
</div>
                  <div class="pt-[54px] border-regular dark:border-white/10">
                  <div class="overflow-x-auto mb-5">
                    <table class="ic-Table assignment_dates max-w-full w-full">
                      <thead>
                        <tr class="border-b border-regular dark:border-white/10">
                          <th scope="col" class="font-semibold text-lg py-4 px-6">Due</th>
                          <th scope="col" class="font-semibold text-lg py-4 px-6">Created</th>
                          <th scope="col" class="font-semibold text-lg py-4 px-6">Available from</th>
                          <th scope="col" class="font-semibold text-lg py-4 px-6">Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b border-regular dark:border-white/10">
                          <td class="py-3 px-6">{{ assignment[0].dueDate | date: 'medium' }}</td>
                          <td class="py-3 px-6">{{ assignment[0].timestamp | date: 'medium' }}</td>
                          <td class="py-3 px-6">{{ assignment[0].availableFrom | date: 'medium' }}</td>
                          <td class="py-3 px-6">{{ assignment[0].points }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>





                    <!--                    <div *ngIf="showButton && isAssignmentTaken">-->
                    <div class="max-sm:px-0" *ngIf="!showButton && !takeAssignmentButton">
                      <div
                        class="static  bg-white dark:bg-[#212e3d] pt-[54px] border-1 border-normal dark:border-white/10 rounded-10 dark:shadow-none z-998 sm:min-w-[400px]">
                        <div class="relative px-[30px] max-ssm:px-[15px] editor-style1">
                          <div *ngIf="isValid && isDarkMode(); then thenTemplateName else elseTemplateName"></div>
                          <ng-template #thenTemplateName>
                            <editor id="editor" (ngModelChange)="modelChangeFn($event)" [(ngModel)]="editorContent"
                                    apiKey="9ao97tdbbojmeeefmu2vif9zvwfh1xj75ae0r4q32r483gto" [init]="{
                          promotion: false,
                          base_url: '/tinymce',
                          suffix: '.min',
                          plugins: 'lists link image table code help wordcount',
                          toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen preview save print | insertfile image media template link anchor codesample | ltr rtl',
                          skin: 'oxide-dark',
                          content_css: 'dark'
                        }"></editor>
                          </ng-template>
                          <ng-template #elseTemplateName>
                            <editor id="editor" (ngModelChange)="modelChangeFn($event)" [(ngModel)]="editorContent"
                                    apiKey="9ao97tdbbojmeeefmu2vif9zvwfh1xj75ae0r4q32r483gto" #editor [init]="{
                          promotion: false,
                          base_url: '/tinymce',
                          suffix: '.min',
                          plugins: 'lists link image table code help wordcount',
                          toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen preview save print | insertfile image media template link anchor codesample | ltr rtl'
                        }"></editor>
                          </ng-template>
                        </div>
                        <div
                          class="flex items-center justify-between mx-[30px] pt-[20px] pb-[30px] border-t border-regular dark:border-white/10">
                        </div>
                      </div>
                    </div>

                    <div class="max-sm:px-0" *ngIf="!showButton && !uploadContentButton">

                      <nz-upload
                        class="upload-list-inline"
                        nzListType="picture"
                        nzType="drag"
                        [nzMultiple]="false"
                        [nzFileList]="fileList"
                        [nzData]="{ 'userId': userId }"
                        nzAction="http://localhost:8080/api/subject-service/files/upload"
                        (nzChange)="handleChange($event)"
                      >
                        <p class="text-center mb-[20px]">
                          <svg-icon class="[&>svg]:w-[70px] [&>svg]:h-[70px] text-light-extra dark:text-white/60 inline-block" src="assets/images/svg/unicons-line/upload.svg"></svg-icon>
                        </p>
                        <p class="text-[20px] font-medium text-dark dark:text-white/[.87]">Drop File or <strong class="text-primary">Browse</strong></p>
                      </nz-upload>


                      </div>
                    </div>
                    <div class="mt-[25px] flex justify-center" *ngIf="showButton">

                      <button
                        class="bg-primary hover:bg-primary-hbr inline-flex items-center outline-none shadow-none w-fit duration-300 text-white capitalize px-[20px] text-[15px] border-primary hover:border-primary-hbr rounded-[5px] gap-[8px] h-[46px]"
                        nz-button nzType="primary" *ngIf="!hasStudentTakenAssignment()" (click)="takeAssignment()">
                        <span>Take Assignment</span>
                        <span nz-icon nzType="arrow-right" nzTheme="outline"></span>
                      </button>


                      <button
                        class="bg-primary hover:bg-primary-hbr inline-flex items-center outline-none shadow-none w-fit duration-300 text-white capitalize px-[20px] text-[15px] border-primary hover:border-primary-hbr rounded-[5px] gap-[8px] h-[46px]"
                        nz-button nzType="primary" *ngIf="!hasStudentTakenAssignment()" (click)="uploadContent()">
                        <span>Upload Content</span>
                        <span nz-icon nzType="upload" nzTheme="outline"></span>
                      </button>


                    </div>
                    <div nz-row nzGutter="25" class="mt-[25px]" *ngIf="!showButton">
                      <div nz-col nzXs="24" nzMd="12" class="mb-[25px]">
                        <div class="flex items-center justify-center md:justify-start">
                          <button
                            class="inline-flex items-center h-[46px] px-[20px] gap-x-1 text-body border dark:text-white/60 dark:hover:text-white dark:border-white/10 rounded hover:bg-primary hover:text-white group transition duration-150 dark:bg-transparent"
                            nz-button (click)="cancelAssignment()">
                            <span>Cancel</span>
                            <span nz-icon nzType="arrow-left" nzTheme="outline"></span>
                          </button>
                        </div>
                      </div>
                      <div nz-col nzXs="24" nzMd="12" class="mb-[25px]">
                        <!-- New Contact -->
                        <div class="flex items-center justify-center md:justify-end">
                          <button
                            class="bg-primary hover:bg-primary-hbr inline-flex items-center outline-none shadow-none w-fit duration-300 text-white capitalize px-[20px] text-[15px] border-primary hover:border-primary-hbr rounded-[5px] gap-[8px] h-[46px]"
                            nz-button nzType="primary" (click)="submitAssignment()">
                            <span>Submit Assignment</span>
                            <span nz-icon nzType="arrow-right" nzTheme="outline"></span>
                          </button>
                        </div>
                        <!-- end: New Contact -->
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          <div
            class="flex items-start justify-between flex-wrap mb-[50px] p-[30px] shadow-[0_15px_40px_rgba(116,116,116,0.06)] gap-y-[10px]">
            <nav class="xs:ps-[100px] pb-[30px]">
              <ul class="flex items-center flex-wrap max-xs:justify-center gap-2.5 mb-0">
                <li>
                  <button nz-button (click)="navigateToPrevious()"
                          [disabled]="bundleNavigationService.currentIndex === 0"
                          class="inline-flex items-center h-10 px-[20px] gap-x-1 text-body border dark:text-white/60 dark:hover:text-white dark:border-white/10 rounded hover:bg-primary hover:text-white group transition duration-150 dark:bg-transparent">
                    <svg-icon class="[&>svg]:w-[16px] [&>svg]:h-[16px] group-hover:text-white"
                              src="assets/images/svg/feather/corner-up-left.svg"></svg-icon>
                    Previous
                  </button>
                </li>
                <li>
                  <button nz-button (click)="navigateToNext()"
                          [disabled]="bundleNavigationService.currentIndex === bundleNavigationService.materials.length - 1"
                          class="inline-flex items-center h-10 px-[20px] gap-x-1 text-body border dark:text-white/60 dark:hover:text-white dark:border-white/10 rounded hover:bg-primary hover:text-white group transition duration-150 dark:bg-transparent">
                    <svg-icon class="[&>svg]:w-[16px] [&>svg]:h-[16px] group-hover:text-white"
                              src="assets/images/svg/feather/corner-up-right.svg"></svg-icon>
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
<!--        </div>-->
      </ng-container>
    </ng-container>
  `,

  styles: [
    `
      [nz-button] {
        margin-inline-end: 8px;
      }
      :host ::ng-deep .ant-upload.ant-upload-drag {
        @apply border-2 border-dashed border-normal dark:border-white/10 rounded-10 h-auto mb-[15px] bg-regularBG dark:bg-white/10;
      }

      :host ::ng-deep .ant-upload.ant-upload-drag .ant-upload-btn {
        @apply min-h-[278px];
      }

      :host ::ng-deep .ant-upload-list-picture .ant-upload-list-item-thumbnail {
        @apply flex items-center justify-center;
      }

      :host ::ng-deep .ant-upload-list-picture .ant-upload-list-item {
        @apply rounded-6 py-[8px] px-[15px] border-regular dark:border-white/30;
      }

      :host ::ng-deep .upload-list-inline .ant-upload-animate-enter {
        animation-name: uploadAnimateInlineIn;
      }

      :host ::ng-deep .upload-list-inline .ant-upload-animate-leave {
        animation-name: uploadAnimateInlineOut;
      }

      :host ::ng-deep .ant-upload-list-picture .ant-upload-list-item-error {
        @apply border-danger dark:border-danger;
      }
    `
  ]
})

export class TakeAssignmentComponent implements OnInit {
  constructor(private assignmentService: AssignmentService,
              private assignmentSubmissionService: AssignmentSubmissionService,
              private msg: NzMessageService,
              private authService: AuthService,
              private service: StudentService,
              protected bundleNavigationService: BundleNavigationService,
              private message: NzMessageService,
              @Inject(DOCUMENT) private document: Document,
              private route: ActivatedRoute,
              public router: Router) {
  }

  assignment: Assignment[];
  showContent = false;
  isLoading = true;
  isValid: boolean;
  editorContent = '';
  showButton = true;
  takeAssignmentButton = true;
  uploadContentButton = true;
  student: Student[];
  userId: number;
  fileList: NzUploadFile[] = [];
  assignmentSubmissions: AssignmentSubmission[];


  ngOnInit(): void {

    console.log('Hello this is an assignment');
    this.service.getById([this.authService.getStudentId()]).subscribe((data: any[]) => {
      this.student = data;
      this.userId = this.authService.getUserId();
    });
    const assignmentId = Number(this.route.snapshot.paramMap.get('id'));
    this.assignmentService.getById([assignmentId]).subscribe({
      next: (assignment: Assignment[]) => {
        this.assignment = assignment;
        const currentMaterialIndex = this.bundleNavigationService.materials.findIndex(
          (material) => 'id' in material && material.id === assignment[0].id
        );
        this.bundleNavigationService.setCurrentIndex(currentMaterialIndex);
      },
      error: () => {
      },
    });
    this.assignmentSubmissionService.getByStudentIdAll(this.authService.getStudentId())
      .subscribe((data: AssignmentSubmission[]) => {
        this.assignmentSubmissions = data;
      });
    this.isLoading = false;
    this.showContent = true;
    console.log('Component initialized');
    const storedFiles = localStorage.getItem('uploadedFiles');
    if (storedFiles) {
      this.fileList = JSON.parse(storedFiles);
      console.log('Loaded files from local storage:', this.fileList);
    }
  }

  hasStudentTakenAssignment(): boolean {
    return this.assignmentSubmissions.some(
      submission => submission.student.id === this.student[0].id && submission.assignment.id === this.assignment[0].id
    );
  }

  navigateToPrevious(): void {
    this.bundleNavigationService.navigateToPrevious();
  }

  navigateToNext(): void {
    console.log('hello');
    this.bundleNavigationService.navigateToNext();
  }

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    console.log('handleChange called with file:', file, 'fileList:', fileList);

    const status = file.status;
    console.log('File status:', status);

    if (status !== 'uploading') {
      console.log('File is not uploading:', file, fileList);
    }
    if (status === 'done') {
      console.log('File upload done:', file);
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      console.error('File upload error:', file);
      this.msg.error(`${file.name} file upload failed.`);
    }

    this.fileList = [...fileList];
    console.log('Updated fileList:', this.fileList);
    this.storeFilesLocally();
  }

  private storeFilesLocally(): void {
    console.log('Storing files locally:', this.fileList);
    localStorage.setItem('uploadedFiles', JSON.stringify(this.fileList));
  }


  /* Editor */
  isDarkMode(): boolean {
    return this.document.body.classList.contains('dark');
  }

  modelChangeFn(e) {
    this.editorContent = e;
  }


  submitAssignment(): void {
    const assignmentSubmission: AssignmentSubmission = {
      content: this.editorContent,
      submissionTimestamp: new Date(),
      student: this.student[0],
      assignment: this.assignment[0],
    };
    this.assignmentSubmissionService.create(assignmentSubmission).subscribe(
      (response) => {
        this.createMessage('success');
        const subjectId = this.route.snapshot.parent.paramMap.get('id');
        this.router.navigate(['/pages/subject', subjectId, 'assignments']).catch(error => {
          console.error('Navigation error:', error);
        });
      },
      (error) => {
        console.error('Error creating assignment:', error);
      }
    );
    this.showButton = true;
  }

  createMessage(type: string): void {
    this.message.create(type, `${type} Submitting Assignment`);
  }


  takeAssignment(): void {
    this.showButton = false;
    this.takeAssignmentButton = false;
  }

  uploadContent(): void {
    this.showButton = false;
    this.uploadContentButton = false;
  }

  cancelAssignment(): void {
    this.showButton = true;
    this.takeAssignmentButton = true;
    this.uploadContentButton = true;
  }

  closeAssignment() {
    const subjectId = this.route.snapshot.parent.paramMap.get('id');
    this.router.navigate(['/pages/subject', subjectId, 'assignments']).catch(error => {
      console.error('Navigation error:', error);
    });
  }

  refresh() {
    window.location.reload();
  }
}

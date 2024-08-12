import {
  Component,
  OnInit,
  Inject, TemplateRef
} from '@angular/core';
import {
  DOCUMENT
} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {Student} from '../../core/models/student.model';
import {AuthService} from '../../core/services/auth.service';
import {StudentService} from '../../core/services/student.service';
import {NzMessageService} from 'ng-zorro-antd/message';
import {SubjectAnnouncementService} from '../../core/services/subject-announcement.service';
import {SubjectAnnouncement} from '../../core/models/subject-announcement.model';
import {Assignment} from '../../core/models/assignment.model';

@Component({
  selector: 'app-announcement',
  template: `
    <!-- skeleton -->
    <ng-template #loadingSkeleton>
      <nz-skeleton [nzActive]="true" [nzParagraph]="{ rows: 12 }" [nzShape]="circle"
                   class="bg-white dark:bg-white/10 rounded-6 p-[30px] pt-[15px]"></nz-skeleton>
    </ng-template>
    <!-- skeleton -->
    <ng-container *ngIf="showContent; else loadingSkeleton">
      <div *ngIf="announcement">
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
                    (click)="closeAnnouncement()">
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
                  {{ announcement[0].title }}
                </h6>
              </div>
              <div class="flex-wrap items-center justify-between md:mb-[20px] md:mt-5 flex max-md:mb-[30px] gap-y-[20px]">
                <div class="flex items-center media  gap-5">
                  <nz-avatar class="2xl:w-[60px] 2xl:h-[60px] min-w-[50px] h-[50px] rounded-full" nzIcon="user"></nz-avatar>
                  <div class="ms-[10]">
                    <h6 class="mb-1 text-base font-medium text-dark dark:text-white/[.87]">{{announcement[0].teacher.firstName}} {{announcement[0].teacher.lastName}}</h6>
                    <div class="flex items-center gap-[5px] text-light dark:text-white/60" nz-dropdown>
                      To All
                      <span nz-icon nzType="down"></span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center max-xs:flex-wrap gap-[20px]">
                  <div class="flex items-center text-light dark:text-white/60">
                    {{ announcement[0].timestamp | date: 'medium' }}
                  </div>
                </div>
              </div>


              <div>
                <div class="px-[80px] max-sm:px-0">
                  <div class="xs:mb-[17px] text-[15px] leading-[24px] max-xs:mb-[30px]">
                    <p [innerHTML]="announcement[0].content" class="inline-block mb-[15px] text-body dark:text-white/60"></p>
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
                  <button nz-button (click)="toggleDiv()"
                          class="inline-flex items-center h-10 px-[20px] gap-x-1 text-body border dark:text-white/60 dark:hover:text-white dark:border-white/10 rounded hover:bg-primary hover:text-white group transition duration-150 dark:bg-transparent"
                          href="#">
                    <svg-icon class="[&>svg]:w-[16px] [&>svg]:h-[16px] group-hover:text-white"
                              src="assets/images/svg/feather/corner-up-left.svg"></svg-icon>
                    Reply
                  </button>
                </li>
              </ul>
            </nav>

            <div class="py-[30px] px-[30px]" *ngIf="showDiv">
              <div class="flex gap-5 max-xs:flex-wrap">
                <img class="w-[50px] h-[50px] rounded-full" src="assets/images/avatars/thumbs.png"
                     alt="thumbs">
                <div class="pt-[54px] border-t border-normal dark:border-white/10">
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
                        <div class="flex items-center gap-[15px]">
                          <button nz-button class="h-[44px] px-[20px] rounded-4 bg-primary text-white border-primary">
                            <span>Send</span>
                          </button>
                          <a href="#" class="text-[13px] text-theme-gray dark:text-white/60 hover:text-primary"><span
                            nz-icon nzType="link" nzTheme="outline"></span></a>
                          <a href="#" class="text-[13px] text-theme-gray dark:text-white/60 hover:text-primary">
                            <span nz-icon nzType="question-circle" nzTheme="outline"></span>
                          </a>
                        </div>
                        <div class="flex items-center">
                          <a href="#" class="
                      text-[15px] text-theme-gray dark:text-white/60 hover:text-primary">
                            <span nz-icon nzType="delete" nzTheme="outline"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </ng-container>
  `,

  styles: [
    `
      [nz-button] {
        margin-inline-end: 8px;
      }
    `
  ]
})

export class AnnouncementComponent implements OnInit {
  constructor(private announcementService: SubjectAnnouncementService,
              private authService: AuthService,
              private service: StudentService,
              private message: NzMessageService,
              @Inject(DOCUMENT) private document: Document,
              private route: ActivatedRoute,
              public router: Router) {
  }

  announcement: SubjectAnnouncement[];
  showContent = false;
  isLoading = true;
  isValid: boolean;
  showDiv = false;
  editorContent = '';
  student: Student[];


  ngOnInit(): void {
    this.service.getById([this.authService.getStudentId()]).subscribe((data: any[]) => {
      this.student = data;
    });
    const announcementId = Number(this.route.snapshot.paramMap.get('id'));
    this.announcementService.getById([announcementId]).subscribe({
      next: (announcement: SubjectAnnouncement[]) => {
        this.announcement = announcement;
      },
      error: () => {
      },
    });
    this.isLoading = false;
    this.showContent = true;
  }


  /* Editor */
  isDarkMode(): boolean {
    return this.document.body.classList.contains('dark');
  }

  modelChangeFn(e) {
    this.editorContent = e;
  }


  createMessage(type: string): void {
    this.message.create(type, `${type} Submitting Announcement`);
  }



  closeAnnouncement() {
    const subjectId = this.route.snapshot.parent.paramMap.get('id');
    this.router.navigate(['/pages/subject', subjectId, 'announcements']).catch(error => {
      console.error('Navigation error:', error);
    });
  }

  toggleDiv() {
    this.showDiv = !this.showDiv;
  }

  refresh() {
    window.location.reload();
  }
}

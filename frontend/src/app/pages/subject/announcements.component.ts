import {
  Component,
  OnInit,
  Inject, ViewChild, ElementRef
} from '@angular/core';
import {
  DOCUMENT
} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {SubjectAnnouncement} from '../../core/models/subject-announcement.model';
import {SubjectAnnouncementService} from '../../core/services/subject-announcement.service';
import {formatDistance} from 'date-fns';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from '../../core/models/subject.model';
import {SubjectService} from '../../core/services/subject.service';
import {AnnouncementComment} from '../../core/models/announcement-comment.model';
import {NzMessageService} from 'ng-zorro-antd/message';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-announcements',
  template: `
       <div class="text-warning px-[25px] pb-[50px] pt-[5px]" *ngIf="announcements.length === 0 && !createButtonClicked && authService.validateRoles(['ROLE_TEACHER'], 'any')">
      <nz-empty
      [nzNotFoundContent]="contentTpl"
      [nzNotFoundFooter]="footerTpl"
    >
      <ng-template #contentTpl>
        <span class="text-[15px] font-normal text-theme-gray dark:text-white/60 capitalize">No Data</span>
      </ng-template>
      <ng-template #footerTpl>
        <button nz-button class="bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" (click)="createAnnouncement()">Create Announcement</button>
      </ng-template>
    </nz-empty>
      </div>
      <div class="text-warning px-[25px] pb-[50px] pt-[5px]" *ngIf="announcements.length === 0 && authService.validateRoles(['ROLE_STUDENT'], 'any')">
      <nz-empty></nz-empty>
      </div>
      <div class="mail-content" *ngIf="isAnnouncementListOpen && announcements.length > 0">
        <div
          class="flex items-center justify-between px-[30px] py-[12px] border-b border-regular dark:border-white/10">
          <table class="w-full overflow-x-auto">
            <thead>
            <tr
              class="max-3xl:flex max-3xl:items-center max-3xl:flex-col max-3xl:justify-center max-3xl:gap-[15px]">
              <!-- <th>
                    <div class="flex items-center [&>a]:flex [&>a]:items-center gap-[8px]">
                      <label nz-checkbox [(ngModel)]="allChecked" (ngModelChange)="updateAllChecked()"
                        [nzIndeterminate]="indeterminate"></label>
                    </div>
                  </th> -->
              
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
                  <th>
              <div *ngIf="authService.validateRoles(['ROLE_TEACHER'], 'any')" class="flex items-center justify-end max-md:justify-center">
                    <button class="min-w-min rounded-[23px] h-[44px] border-none text-[15px] flex items-center py-[0.5rem] px-[20px] text-sm text-white font-semibold bg-primary border-primary gap-[6px]"
                            nz-button (click)="createAnnouncement()">
                      <i nz-icon nzType="plus"></i>
                      <span class="m-0">Page</span>
                    </button>
                  </div>
              </th>
            </thead>
          </table>
        </div>
        <div class="overflow-x-auto">
          <div
            class="flex items-center px-[30px] py-[15px] border-b border-regular dark:border-white/10 last:border-none "
            *ngFor="let item of announcements">
            <nz-comment nzAuthor=" {{ item.teacher.firstName }} {{ item.teacher.lastName }}" [nzDatetime]="time">
              <nz-avatar nz-comment-avatar nzIcon="user" nzSrc="//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></nz-avatar>
              <nz-comment-content>
                <p class="text-[15px] font-normal text-light dark:text-white/60" (click)="viewAnnouncement(item)">
                 {{ item.title }}
                </p>
              </nz-comment-content>
              <nz-comment-action>
                <i nz-tooltip nzTooltipTitle="Like" nz-icon nzType="like" [nzTheme]="likes > 0 ? 'twotone' : 'outline'" (click)="like()"></i>
                <span class="count like">{{ likes }}</span>
              </nz-comment-action>
              <nz-comment-action>
                <i nz-tooltip nzTooltipTitle="Dislike" nz-icon nzType="dislike" [nzTheme]="dislikes > 0 ? 'twotone' : 'outline'" (click)="dislike()"></i>
                <span class="count dislike">{{ dislikes }}</span>
              </nz-comment-action>
              <nz-comment-action>Reply</nz-comment-action>
            </nz-comment>
          </div>
        </div>
      </div>
      <ng-container>
        <div class="mail-content bg-white dark:bg-[#1b1c29] rounded-[10px]" *ngIf="createButtonClicked">
          <div
            class="flex items-center justify-between max-3xl:justify-center px-[30px] py-[12px] border-b border-regular dark:border-white/10">
            <table class="w-full overflow-x-auto">
              <thead>
              <tr
                class="max-3xl:flex max-3xl:items-center max-3xl:flex-col max-3xl:justify-center max-3xl:gap-[15px]">
                <th class="text-start sm:w-[4%]">
                  <a
                    class="inline-flex items-center justify-center bg-transparent text-light-extra dark:text-white/60 w-[38px] h-[38px] rounded-full hover:bg-primary/10 hover:text-primary dark:hover:text-primary"
                    (click)="cancelAnnouncement()">
                        <span class="[&>svg]:w-[12px] [&>svg]:h-[12px]" nz-icon nzType="arrow-left"
                              nzTheme="outline"></span>
                  </a>
                </th>
                <th>
                  <div class="flex items-center">
                    <a aria-current="page"
                       class="inline-flex items-center justify-center bg-transparent text-light-extra dark:text-white/60 w-[38px] h-[38px] rounded-full hover:bg-primary/10 hover:text-primary dark:hover:text-primary active"
                       href="/" nzTooltipTitle="Refresh" nzTooltipPlacement="bottomRight" nz-tooltip>
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
              <div>
                <div class="px-[80px] max-sm:px-0">
                  <nz-form-label class="flex items-center font-medium dark:text-white/60" [nzSm]="6" [nzXs]="24" nzFor="Announcement Content"
                                 nzRequired>Announcement Title
                  </nz-form-label>
                  <div
                    class="static  bg-white dark:bg-[#212e3d] pt-[54px] border-1 border-normal dark:border-white/10 rounded-10 dark:shadow-none z-998 sm:min-w-[400px]">
                    <div class="relative px-[30px] max-ssm:px-[15px] editor-style1">
                      <div *ngIf="isValid && isDarkMode(); then thenTemplateName else elseTemplateName"></div>
                      <ng-template #thenTemplateName>
                        <editor id="editor" (ngModelChange)="modelChangeFn($event)" [(ngModel)]="editorContent" apiKey="9ao97tdbbojmeeefmu2vif9zvwfh1xj75ae0r4q32r483gto" #editor [init]="{
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
                        <editor id="editor" (ngModelChange)="modelChangeFn($event)" [(ngModel)]="editorContent" apiKey="9ao97tdbbojmeeefmu2vif9zvwfh1xj75ae0r4q32r483gto"  #editor [init]="{
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
                  <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
                    <nz-form-item>
                      <nz-form-label class="flex items-center font-medium dark:text-white/60" [nzSm]="6" [nzXs]="24" nzFor="Announcement Title"
                                     nzRequired>Announcement Title
                      </nz-form-label>
                      <input
                        class="resize-none w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60 hover:border-primary bg-transparent" formControlName="title" id="title"
                        nz-input/>
                    </nz-form-item>
                    <div class="pt-[54px] border-t border-normal dark:border-white/10">
                      <nz-form-item class="flex mb-[20px] items-center font-medium dark:text-white/60" nz-row>
                        <nz-form-control [nzSpan]="14" [nzOffset]="6">
                          <button nz-button
                                  class="bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] w-full flex items-center justify-center rounded-[4px] px-[20px] h-[44px] duration-300"
                                  type="submit">
                            Create
                          </button>
                        </nz-form-control>
                      </nz-form-item>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex items-start justify-between flex-wrap mb-[50px] p-[30px] shadow-[0_15px_40px_rgba(116,116,116,0.06)] gap-y-[10px]">
          </div>
        </div>
      </ng-container>
`,
  styles: [
    `
      :host ::ng-deep .ant-comment-content-author-name{
        @apply text-theme-gray dark:text-white/[.87] text-[12px];
      }
      :host ::ng-deep .ant-comment-content-author-time{
        @apply text-light dark:text-white/60 text-[12px];
      }
      :host ::ng-deep .ant-comment-actions > li > span{
        @apply text-light-extra dark:text-white/60 text-[12px] flex items-center gap-[8px];
      }
      :host ::ng-deep .ant-comment-actions li{
        @apply relative me-[8px];
      }
      :host ::ng-deep .ant-comment-actions li:not(:last-child)::after{
        @apply absolute top-[50%] ltr:end-0 rtl:left-[-9px] h-[12px] w-[1px] bg-normal dark:bg-white/10 -translate-y-1/2 content-[''];
      }
    `
  ]
})

export class AnnouncementsComponent implements OnInit {
  constructor(private announcementService: SubjectAnnouncementService,
              public authService: AuthService,
              private subjectService: SubjectService,
              @Inject(DOCUMENT) private document: Document,
              private message: NzMessageService,
              private fb: FormBuilder,
              public router: Router,
              private route: ActivatedRoute) {}

  announcements: SubjectAnnouncement[];
  subject: Subject[];
  isAnnouncementListOpen = true;
  inputClass = 'w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60';
  allChecked = false;
  indeterminate = false;
  likes = 0;
  dislikes = 0;
  time = formatDistance(new Date(), new Date());
  createButtonClicked = false;
  startValue: Date | null = null;
  endValue: Date | null = null;
  endOpen = false;
  validateForm: FormGroup;
  isValid: boolean;
  editorContent = '';
  @ViewChild('editor') editor!: ElementRef;

  ngOnInit(): void {

    const id = Number(this.route.snapshot.parent.paramMap.get('id'));
    this.subjectService.getById([id]).subscribe({
      next: (subject: Subject[]) => {
        this.subject = subject;
      },
      error: () => {},
    });
    this.announcementService.getBySubjectIdAll(id).subscribe({
      next: (announcements: SubjectAnnouncement[]) => {
        this.announcements = announcements;
      },
      error: () => {},
    });

    this.validateForm = this.fb.group({
      title: [null, [Validators.required]]
    });

    this.editor.nativeElement.value = '';

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
      this.endOpen = true;
    }
    console.log('handleStartOpenChange', open, this.endOpen);
  }

  handleEndOpenChange(open: boolean): void {
    console.log(open);
    this.endOpen = open;
  }

  viewAnnouncement(announcement: SubjectAnnouncement) {
    this.router.navigate(['/pages/subject', this.route.snapshot.parent.paramMap.get('id'), 'announcement', announcement.id]).catch(error => {
      console.error('Navigation error:', error);
    });
  }

  /* Editor */
  isDarkMode(): boolean {
    return this.document.body.classList.contains('dark');
  }

  createAnnouncement() {
    this.isAnnouncementListOpen = false;
    this.createButtonClicked = true;
  }

  cancelAnnouncement() {
    this.isAnnouncementListOpen = true;
    this.createButtonClicked = false;
  }

  modelChangeFn(e) {
    this.editorContent = e;
  }

  createMessage(type: string): void {
    this.message.create(type, `${type} Submitting Assignment`);
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }

    if (!this.validateForm.valid) {
      return;
    }
    const formData = this.validateForm.value;
    const announcement: SubjectAnnouncement = {
      title: formData.title,
      content: this.editorContent,
      timestamp: new Date(),
      teacher: this.subject[0].professor,
      subject: this.subject[0],
      announcementComments: null,
    };
    this.announcementService.create(announcement).subscribe(
      (response) => {
        this.validateForm.reset();
        this.createMessage('success');
        this.createButtonClicked = false;
        const subjectId = this.route.snapshot.parent.paramMap.get('id');
        this.router.navigate(['/pages/subject', subjectId, 'announcements']).then(() => {
          window.location.reload();
        }).catch(error => {
          console.error('Navigation error:', error);
        });
      },
      (error) => {
        console.error('Error creating announcement:', error);
      }
    );
  }

  like(): void {
    this.likes = 1;
    this.dislikes = 0;
  }

  dislike(): void {
    this.likes = 0;
    this.dislikes = 1;
  }
}

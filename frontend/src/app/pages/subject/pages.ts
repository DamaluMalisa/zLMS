import {
  Component,
  OnInit,
  Inject, ViewChild, ElementRef
} from '@angular/core';
import {
  DOCUMENT
} from '@angular/common';
import {PageModel} from '../../core/models/page-model.model';
import {PageModelService} from '../../core/services/page.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from '../../core/models/subject.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SubjectService} from '../../core/services/subject.service';
import {NzMessageService} from 'ng-zorro-antd/message';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-pages',
  template: `
    <!-- skeleton -->
    <ng-template #loadingSkeleton>
      <nz-skeleton [nzActive]="true" [nzParagraph]="{ rows: 12 }" [nzShape]="circle"
                   class="bg-white dark:bg-white/10 rounded-6 p-[30px] pt-[15px]"></nz-skeleton>
    </ng-template>
    <!-- skeleton -->
    <ng-container *ngIf="showContent; else loadingSkeleton">
    <div class="text-warning px-[25px] pb-[50px] pt-[5px]" *ngIf="pages.length === 0 && !createButtonClicked && authService.validateRoles(['ROLE_TEACHER'], 'any')">
      <nz-empty
      [nzNotFoundContent]="contentTpl"
      [nzNotFoundFooter]="footerTpl"
    >
      <ng-template #contentTpl>
        <span class="text-[15px] font-normal text-theme-gray dark:text-white/60 capitalize">No Data</span>
      </ng-template>
      <ng-template #footerTpl>
        <button nz-button class="bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" (click)="createPage()">Create Page</button>
      </ng-template>
    </nz-empty>
      </div>
      <div class="text-warning px-[25px] pb-[50px] pt-[5px]" *ngIf="pages.length === 0 && authService.validateRoles(['ROLE_STUDENT'], 'any')">
      <nz-empty></nz-empty>
      </div>
      <div class="mail-content" *ngIf="isPageListOpen && pages.length > 0">
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
                  <th>
              <div *ngIf="authService.validateRoles(['ROLE_TEACHER'], 'any')" class="flex items-center justify-end max-md:justify-center">
                    <button class="min-w-min rounded-[23px] h-[44px] border-none text-[15px] flex items-center py-[0.5rem] px-[20px] text-sm text-white font-semibold bg-primary border-primary gap-[6px]"
                            nz-button (click)="createPage()">
                      <i nz-icon nzType="plus"></i>
                      <span class="m-0">Page</span>
                    </button>
                  </div>
              </th>

            </tr>
            </thead>
          </table>
        </div>
        <div class="overflow-x-auto">
            <div
              class="flex items-center px-[30px] py-[15px] border-b border-regular dark:border-white/10 last:border-none "
              *ngFor="let item of pages">
              <label class="me-[15px]" nz-checkbox [(ngModel)]="item.checked"
                (ngModelChange)="updateSingleChecked()"></label>
              <nz-table class="w-full list-info">
                <tr (click)="viewPage(item)"
                  class="3xl:[&>td:first-child]:w-[30%] max-3xl:[&>td:first-child]:max-w-[200px] max-3xl:[&>td:first-child]:min-w-[200px] max-lg:contents max-xl:gap-[10px] flex items-center">
                  <td class="list-sender px-[15px]">
                    <div  class="flex items-center gap-[10px]">
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
                        <p class="m-0 list-text text-body dark:text-white/60 max-lg:mt-[15px] max-lg:mb-[10px]">
                        {{formatBody(item.pageContent | truncate:8 )}}</p>
                        </div>
                        <span
                          class="inline-flex items-center h-[22px] px-1.5 text-xs font-normal capitalize rounded-[3px] bg-deepBG dark:bg-white/10 text-body dark:text-white/60 [&.unread]:text-primary [&.unread]:bg-primary/10 {{item.inboxActive}}">status</span>
                      </h1>       
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
                    <td class="list-date px-[15px] xl:text-end max-lg:text-end whitespace-nowrap" *ngIf="authService.validateRoles(['ROLE_TEACHER'], 'any')">
                        <a nz-dropdown nzTrigger="click" [nzDropdownMenu]="menu">
                          <svg-icon
                            class="text-light dark:text-white/60 dark:group-hover:text-white/[.87] w-[24px] h-[24px] [&>svg]:w-[24px] [&>svg]:h-[24px]"
                            src="assets/images/svg/feather/more-vertical.svg"></svg-icon>
                        </a>
                        <nz-dropdown-menu #menu="nzDropdownMenu">
                          <ul
                            class="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4 capitalize"
                            nz-menu nzSelectable>
                            <li
                              class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87] gap-[6px]"
                              nz-menu-item>
                              edit
                            </li>
                            <li
                              class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87] gap-[6px]"
                              nz-menu-item>
                              leave
                            </li>
                            <li
                              class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87] gap-[6px]"
                              nz-menu-item>
                              delete
                            </li>
                          </ul>
                        </nz-dropdown-menu>
                      </td>
                </tr>
              </nz-table>
            </div>
          </div>
        <ng-template #headerTemplate>
          <span>Pages</span>
        </ng-template>
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
                    (click)="cancelAssignment()">
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
                  <nz-form-label class="flex items-center font-medium dark:text-white/60" [nzSm]="6" [nzXs]="24" nzFor="Page Content"
                                 nzRequired>Page Content
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
                      <nz-form-label class="flex items-center font-medium dark:text-white/60" [nzSm]="6" [nzXs]="24" nzFor="Assignment Title"
                                     nzRequired>Page Title
                      </nz-form-label>
                      <input
                        class="resize-none w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60 hover:border-primary bg-transparent" formControlName="title" id="title"
                        nz-input/>
                    </nz-form-item>
                    <div class="pt-[54px] border-t border-normal dark:border-white/10">
                      <nz-form-item>
                        <nz-form-label class="flex items-center font-medium dark:text-white/60" [nzSm]="6" [nzXs]="24" nzRequired
                                       nzFor="from">Available From
                        </nz-form-label>
                        <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="The input is not valid date!">
                          <nz-date-picker
                            class="{{inputClass}}"
                            formControlName="from" id="from"
                            [nzDisabledDate]="disabledStartDate"
                            nzShowTime
                            nzFormat="yyyy/MM/dd HH:mm:ss"
                            nzPlaceHolder="Start"
                            (nzOnOpenChange)="handleStartOpenChange($event)"
                          >
                          </nz-date-picker>
                        </nz-form-control>
                      </nz-form-item>
                      <nz-form-item class="flex mb-[20px] items-center font-medium dark:text-white/60" nz-row>
                        <nz-form-control [nzSpan]="14" [nzOffset]="6">
                          <button nz-button
                                  class="bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] w-full flex items-center justify-center rounded-[4px] px-[20px] h-[44px] duration-300"
                                  type="submit">
                            Create
                          </button>
                        </nz-form-control>
                      </nz-form-item>
                      <nz-form-item class="flex mb-[20px] items-center font-medium dark:text-white/60" nz-row>
                        <nz-form-control [nzSpan]="14" [nzOffset]="6">
                          <button nz-button
                                  class="bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] w-full flex items-center justify-center rounded-[4px] px-[20px] h-[44px] duration-300"
                                  (click)="submitAndPublish()">
                            Create & Publish
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

export class Page implements OnInit {
  constructor(private pageService: PageModelService,
              public authService: AuthService,
              private subjectService: SubjectService,
              private fb: FormBuilder,
              @Inject(DOCUMENT) private document: Document,
              private message: NzMessageService,
              private route: ActivatedRoute,
              public router: Router) {}
  pages: PageModel[];
  allChecked = false;
  endValue: Date | null = null;
  indeterminate = false;
  isPageListOpen = true;
  createButtonClicked = false;
  isValid: boolean;
  collapsePanelClass = 'mb-1 font-medium text-dark bg-transparent dark:text-white/[.87] text-15 border-regular border-1 dark:border-white/10 rounded-6 [&>.ant-collapse-content]:border-none [&>.ant-collapse-header]:px-[20px] [&>.ant-collapse-header]:py-[18px] aria-expanded:[&>.ant-collapse-header]:border-b-1 [&>.ant-collapse-header]:border-regular dark:[&>.ant-collapse-header]:border-white/10';
  inputClass = 'w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60';
  subject: Subject[];
  isLoading = true;
  showContent = false;
  validateForm: FormGroup;
  @ViewChild('editor') editor!: ElementRef;
  endOpen = false;
  editorContent = '';

  ngOnInit(): void {
    const id = Number(this.route.snapshot.parent.paramMap.get('id'));
    this.subjectService.getById([id]).subscribe({
      next: (subject: Subject[]) => {
        this.subject = subject;
      },
      error: () => {},
    });
    this.pageService.getBySubjectIdAll(id).subscribe({
      next: (pages: PageModel[]) => {
        this.pages = pages;
        this.isLoading = false;
        this.showContent = true;
      },
      error: () => {},
    });
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      from: [null, [Validators.required]],
    });

    this.editor.nativeElement.value = 'Hello World';

  }


  disabledStartDate = (startValue: Date): boolean => {
    if (!startValue || !this.endValue) {
      return false;
    }
    return startValue.getTime() > this.endValue.getTime();
  }

  handleStartOpenChange(open: boolean): void {
    if (!open) {
      this.endOpen = true;
    }
  }


  /* Editor */
  isDarkMode(): boolean {
    return this.document.body.classList.contains('dark');
  }



  formatBody = function(body: string) {
    return body.replace(/<(?:.|\n)*?>/gm, ' ');
  };

  createPage() {
    this.isPageListOpen = false;
    this.createButtonClicked = true;
  }


  cancelPage() {
    this.isPageListOpen = true;
    this.createButtonClicked = false;
  }

  viewPage(page: PageModel) {
    this.router.navigate(['/pages/subject', this.route.snapshot.parent.paramMap.get('id'), 'page', page.id]).catch(error => {
      console.error('Navigation error:', error);
    });
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
    const page: PageModel = {
      title: formData.title,
      pageContent: this.editorContent,
      timestamp: new Date(),
      availableFrom: formData.from,
      available: false,
      teacher: this.subject[0].professor,
      subject: this.subject[0],
      bundle: null,
    };
    this.pageService.create(page).subscribe(
      (response) => {
        this.validateForm.reset();
        this.createMessage('success');
        const subjectId = this.route.snapshot.parent.paramMap.get('id');
        this.router.navigate(['/pages/subject', subjectId, 'assignments']).catch(error => {
          console.error('Navigation error:', error);
        });
      },
      (error) => {
        console.error('Error creating Page:', error);
      }
    );
  }

  submitAndPublish(): void {
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
    const page: PageModel = {
      title: formData.title,
      pageContent: this.editorContent,
      timestamp: new Date(),
      availableFrom: formData.from,
      available: true,
      teacher: this.subject[0].professor,
      subject: this.subject[0],
      bundle: null,
    };
    this.pageService.create(page).subscribe(
      (response) => {
        this.validateForm.reset();
        this.createMessage('success');
        const subjectId = this.route.snapshot.parent.paramMap.get('id');
        this.router.navigate(['/pages/subject', subjectId, 'assignments']).catch(error => {
          console.error('Navigation error:', error);
        });
      },
      (error) => {
        console.error('Error creating Page:', error);
      }
    );
  }
}

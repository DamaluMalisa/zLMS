import {
  Component,
  OnInit,
  Inject, ElementRef, ViewChild
} from '@angular/core';
import {
  DOCUMENT
} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {Quiz} from '../../core/models/quiz.model';
import {QuizService} from '../../core/services/quiz.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SubjectService} from '../../core/services/subject.service';
import {Subject} from '../../core/models/subject.model';
import {AuthService} from '../../core/services/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { WindowsFill } from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-quizzes',
  template: `
    <!-- skeleton -->
    <ng-template #loadingSkeleton>
      <nz-skeleton [nzActive]="true" [nzParagraph]="{ rows: 12 }" [nzShape]="circle"
                   class="bg-white dark:bg-white/10 rounded-6 p-[30px] pt-[15px]"></nz-skeleton>
    </ng-template>
    <!-- skeleton -->
    <ng-container *ngIf="showContent; else loadingSkeleton">
      <div class="text-warning px-[25px] pb-[50px] pt-[5px]" *ngIf="quizzes.length === 0 && !createButtonClicked && authService.validateRoles(['ROLE_TEACHER'], 'any')">
      <nz-empty
      [nzNotFoundContent]="contentTpl"
      [nzNotFoundFooter]="footerTpl"
    >
      <ng-template #contentTpl>
        <span class="text-[15px] font-normal text-theme-gray dark:text-white/60 capitalize">No Data</span>
      </ng-template>
      <ng-template #footerTpl>
        <button nz-button class="bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" (click)="createQuiz()">Create Quiz</button>
      </ng-template>
    </nz-empty>
      </div>
      <div class="text-warning px-[25px] pb-[50px] pt-[5px]" *ngIf="quizzes.length === 0 && authService.validateRoles(['ROLE_STUDENT'], 'any')">
      <nz-empty></nz-empty>
      </div>
      <div class="mail-content" *ngIf="isQuizListOpen && quizzes.length > 0">
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
                            nz-button (click)="createQuiz()">
                      <i nz-icon nzType="plus"></i>
                      <span class="m-0">Quiz</span>
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
              *ngFor="let item of quizzes">
              <label class="me-[15px]" nz-checkbox [(ngModel)]="item.checked"
                (ngModelChange)="updateSingleChecked()"></label>
              <nz-table class="w-full list-info">
                <tr (click)="viewQuiz(item)"
                  class="3xl:[&>td:first-child]:w-[30%] max-3xl:[&>td:first-child]:max-w-[200px] max-3xl:[&>td:first-child]:min-w-[200px] max-lg:contents max-xl:gap-[10px] flex items-center">
                  <td class="list-sender px-[15px]">
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
                        Points {{ item.totalPoints }}
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
                              <span class="m-0.5 ltr:mr-[11px] rtl:ml-[11px] text-dark dark:text-white/[87] text-15 font-medium capitalize" (click)="grader(item)">Grade</span>
                            </li>
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
          <span>Quizzes</span>
        </ng-template>
      </div>
    </ng-container>
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
                  (click)="cancelQuiz()">
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
          <div class="mb-9">
            <nav>
              <ul class="flex items-center border-b gap-x-9 max-sm:gap-x-6 border-normal dark:border-white/10">
                  <li *ngFor="let tab of tabs">
                    <button class="block relative pt-6 pb-4 text-base max-sm:text-sm font-medium after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-0 after:w-full after:h-px cursor-pointer text-light dark:text-white/60 after:bg-transparent [&.active]:after:bg-dark [&.active]:text-dark dark:[&.active]:after:bg-white/90 dark:[&.active]:text-white/[.87]" nz-tab [nzTitle]="tab.title" (click)="selectTab(tab.key, tab.title)" [class.active]="selectedTab === tab.key">
                        {{ tab.title }}
                    </button>
                  </li>
              </ul>
            </nav>
          </div>
          <div [ngSwitch]="selectedTab">
          <!-- Quiz Tab -->
            <div *ngSwitchCase="'quiz'">
              <div class="px-[80px] max-sm:px-0">
                <nz-form-label class="flex items-center font-medium dark:text-white/60" [nzSm]="6" [nzXs]="24" nzFor="Quiz Content"
                               nzRequired>Quiz Title
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
                <form nz-form [formGroup]="validateForm" (ngSubmit)="onSubmit()">
                  <nz-form-item>
                    <nz-form-label class="flex items-center font-medium dark:text-white/60" [nzSm]="6" [nzXs]="24" nzFor="Quiz Title"
                                   nzRequired>Quiz Title
                    </nz-form-label>
                    <input
                      class="resize-none w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60 hover:border-primary bg-transparent" formControlName="title" id="title"
                      nz-input/>
                  </nz-form-item>
                  <div class="pt-[54px] border-t border-normal dark:border-white/10">

                    <nz-form-item>
                      <nz-form-label class="flex items-center font-medium dark:text-white/60" [nzSm]="6" [nzXs]="24" nzRequired
                                     nzFor="points">Points
                      </nz-form-label>
                      <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="The input is not valid E-mail!">
                        <input class="{{inputClass}}" nz-input formControlName="points" id="points"/>
                      </nz-form-control>
                    </nz-form-item>
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
                    <nz-form-item>
                      <nz-form-label class="flex items-center font-medium dark:text-white/60" [nzSm]="6" [nzXs]="24" nzRequired
                                     nzFor="due">Due
                      </nz-form-label>
                      <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="The input is not valid date!">
                        <nz-date-picker
                          class="{{inputClass}}"
                          formControlName="due" id="due"
                          [nzDisabledDate]="disabledEndDate"
                          nzShowTime
                          nzFormat="yyyy/MM/dd HH:mm:ss"
                          nzPlaceHolder="End"
                          [nzOpen]="endOpen"
                          (nzOnOpenChange)="handleEndOpenChange($event)"
                        >
                        </nz-date-picker>
                      </nz-form-control>
                    </nz-form-item>
                    <nz-form-item>
                      <nz-form-label class="flex items-center font-medium dark:text-white/60" [nzSm]="6" [nzXs]="24" nzFor="submission"
                                     nzRequired>Submission
                      </nz-form-label>
                      <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="Please select submission mode!">
                        <nz-radio-group formControlName="submission" id="submission" class="{{inputClass}}">
                          <label class="dark:text-white/[.87]" nz-radio nzValue="manual">On Paper / Physical</label>
                          <label class="dark:text-white/[.87]" nz-radio nzValue="online">Online</label>
                        </nz-radio-group>
                      </nz-form-control>
                    </nz-form-item>
                  </div>
                </form>
              </div>
            </div>



          <!-- Question Tab -->
              <div *ngSwitchCase="'question'">
               <div class="px-[80px] max-sm:px-0 ">
                <nz-form-item>
                      <nz-form-label class="flex items-center font-medium dark:text-white/60" [nzSm]="6" [nzXs]="24" nzRequired
                                     nzFor="points">Question Type
                      </nz-form-label>
                      <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="The input is not valid E-mail!">
                        <!-- <input class="{{inputClass}}" nz-input formControlName="points" id="points"/> -->
                        <nz-select class="min-w-[260px] capitalize [&>nz-select-top-control]:border-none [&>nz-select-top-control]:bg-white [&>nz-select-top-control]:dark:bg-white/10 [&>nz-select-top-control]:shadow-none [&>nz-select-top-control]:text-dark [&>nz-select-top-control]:dark:text-white/60 [&>nz-select-top-control]:h-[40px] [&>nz-select-top-control]:flex [&>nz-select-top-control]:items-center [&>nz-select-top-control]:rounded-[4px] [&>nz-select-top-control]:px-[20px]" name="basicSelect" ngModel="multipleChoice">
                          <nz-option nzValue="multipleChoice" nzLabel="Multiple Choice"></nz-option>
                          <nz-option nzValue="trueOrFalse" nzLabel="True or False"></nz-option>
                          <nz-option nzValue="fillInBlanks" nzLabel="Fill in Blanks"></nz-option>
                        </nz-select>
                      </nz-form-control>
                    </nz-form-item>
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
                <form nz-form [formGroup]="quizForm" (ngSubmit)="onSubmit()">
                    <div class="pt-[54px] border-t border-normal dark:border-white/10">
                      <div formArrayName="possibleAnswers">
                        <div *ngFor="let answer of possibleAnswers.controls; let i = index" [formGroupName]="i">
                          <nz-form-item>
                            <nz-form-label class="flex items-center font-medium dark:text-white/60" [nzSm]="6" [nzXs]="24" nzRequired nzFor="answer">Possible Answer</nz-form-label>
                            <nz-form-control [nzSm]="14" [nzXs]="24">
                              <input  class="{{inputClass}}" nz-input formControlName="answer"/>
                              <nz-radio-group formControlName="correct">
                                <label class="font-medium dark:text-white/60" nz-radio nzValue="{{i}}">Correct</label>
                              </nz-radio-group>
                              <button type="button" class="font-medium dark:text-white/60" (click)="removeAnswerOption(i)">Remove</button>
                            </nz-form-control>
                          </nz-form-item>
                        </div>
                      </div>
                    <button type="button" class=" dark:text-white/60" (click)="addAnswerOption()">Add Answer Option</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex items-start justify-end it flex-wrap mb-[50px] p-[30px] shadow-[0_15px_40px_rgba(116,116,116,0.06)] gap-y-[10px]">
          <div class="flex items-center gap-[8px]">
                  <button class="capitalize text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn gap-[8px] dark:text-white/[.87] dark:hover:text-primary dark:bg-transparent" nz-button nzType="default">
                    <span nz-icon nzType="edit" nzTheme="outline"></span>
                    <span> Cancel</span>
                  </button>
                  <button (click)="onSubmit(true)" class="capitalize text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn gap-[8px] dark:text-white/[.87] dark:hover:text-primary dark:bg-transparent" nz-button nzType="default">
                    <span nz-icon nzType="edit" nzTheme="outline"></span>
                    <span> Create & Publish</span>
                  </button>
                  <button (click)="onSubmit()" class="capitalize bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button nzType="primary">
                    <span nz-icon nzType="check-circle" nzTheme="outline"></span>
                    <span>Create</span>
                  </button>
                </div>
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

export class QuizzesComponent implements OnInit {
  constructor(private quizService: QuizService,
              public authService: AuthService,
              private subjectService: SubjectService,
              @Inject(DOCUMENT) private document: Document,
              private route: ActivatedRoute,
              private message: NzMessageService,
              public router: Router,
              private fb: FormBuilder) {
                this.quizForm = this.fb.group({
                  questionType: ['', Validators.required],
                  possibleAnswers: this.fb.array([])
                });
              }

  subject: Subject[];
  quizzes: Quiz[];
  isLoading = true;
  showContent = false;
  allChecked = false;
  indeterminate = false;
  selectedPage: number = null;
  isQuizListOpen = true;
  createButtonClicked = false;
  quizForm: FormGroup;
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

  // Quiz creation
  selectedTab: string = 'quiz';
  tabTitle: string = 'Quiz';

  tabs = [
    { key: 'quiz', title: 'Quiz' },
    { key: 'question', title: 'Question(s)' },
  ];

  selectTab(tab: string, title: string) {
    this.selectedTab = tab;
    this.tabTitle = title;
  }

  get possibleAnswers() {
    return this.quizForm.get('possibleAnswers') as FormArray;
  }

  addAnswerOption() {
    this.possibleAnswers.push(this.fb.group({
      answer: ['', Validators.required],
      correct: [false]
    }));
  }

  removeAnswerOption(index: number) {
    this.possibleAnswers.removeAt(index);
  }


  ngOnInit(): void {

    const id = Number(this.route.snapshot.parent.paramMap.get('id'));
    this.subjectService.getById([id]).subscribe({
      next: (subject: Subject[]) => {
        this.subject = subject;
        console.log(this.subject);
      },
      error: () => {},
    });
    this.quizService.getBySubjectIdAll(id).subscribe({
      next: (quizzes: Quiz[]) => {
        this.quizzes = quizzes;
        this.isLoading = false;
        this.showContent = true;
        console.log(this.quizzes);
        console.log(this.showContent);
      },
      error: () => {},
    });

    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      points: [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
      from: [null, [Validators.required]],
      due: [null, [Validators.required]],
      submission: [null, [Validators.required]]
    });

    this.editor.nativeElement.value = 'Hello World';
    console.log(this.editor.nativeElement.value);

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


  /* Editor */
  isDarkMode(): boolean {
    return this.document.body.classList.contains('dark');
  }


  createQuiz() {
      this.router.navigate(
        ['/pages/subject', this.route.snapshot.parent.paramMap.get('id'), 'create-quiz'],
      ).catch(error => {
        console.error('Navigation error:', error);
      });
    
  
  }

  cancelQuiz() {
    this.isQuizListOpen = true;
    this.createButtonClicked = false;
  }

  viewQuiz(quiz: Quiz) {
    if (this.authService.validateRoles(['ROLE_STUDENT'], 'any')) {
      this.router.navigate(['/pages/subject', this.route.snapshot.parent.paramMap.get('id'), 'view-quiz', quiz.id]).catch(error => {
        console.error('Navigation error:', error);
      });
    } else if (this.authService.validateRoles(['ROLE_TEACHER'], 'any')) {
      this.router.navigate(['/pages/subject', this.route.snapshot.parent.paramMap.get('id'), 'quiz', quiz.id]).catch(error => {
        console.error('Navigation error:', error);
      });
    }
  }


  modelChangeFn(e) {
    this.editorContent = e;
  }
  onSubmit(publish: boolean): void {
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
    const quiz: Quiz = {
      title: formData.title,
      description: this.editorContent,
      timestamp: new Date(),
      dueDate: formData.due,
      availableFrom: formData.from,
      totalPoints: +formData.points,
      submission: formData.submission,
      available: publish,
      teacher: this.subject[0].professor,
      subject: this.subject[0],
      bundle: null,
    };
  
    this.quizService.create(quiz).subscribe(
      (response) => {
        console.log('Quiz created successfully:', response);
        this.createMessage('success');
        const subjectId = this.route.snapshot.parent.paramMap.get('id');
        this.validateForm.reset();
        this.editorContent = '';
        this.router.navigate(['/pages/subject', subjectId, 'quizzes']).then(() => {
          window.location.reload();
        });
      },
      (error) => {
        console.error('Error creating quiz:', error);
      }
    );
  }
  



  grader(quiz: Quiz) {
    this.router.navigate(
      ['/changelog/grader', quiz.id],
    ).catch(error => {
      console.error('Navigation error:', error);
    });
  }



  createMessage(type: string): void {
    this.message.create(type, `${type} Quiz created successfully:`);
  }


}

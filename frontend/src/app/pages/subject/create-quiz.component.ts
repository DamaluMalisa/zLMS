import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {Quiz} from '../../core/models/quiz.model';
import {QuizService} from '../../core/services/quiz.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SubjectService} from '../../core/services/subject.service';
import {Subject} from '../../core/models/subject.model';
import {AuthService} from '../../core/services/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { WindowsFill } from '@ant-design/icons-angular/icons';
import { MultipleChoiceQuestionService } from 'src/app/core/services/multiple-choice-question.service';
import { MultipleChoiceQuestion } from 'src/app/core/models/multiple-choice-question';
import { TrueOrFalseQuestionService } from 'src/app/core/services/true-or-false-questio.service';
import { FillInBlankQuestionService } from 'src/app/core/services/fill-in-blank-question.service';
import { TrueOrFalseQuestion } from 'src/app/core/models/true-or-false-question';
import { FillInBlankQuestion } from '../../core/models/fill-in-blank-question';
import { QuestionAssignment } from '../../core/models/question-assignment.model';
import { QuestionAssignmentService } from 'src/app/core/services/question-assignment.service';

@Component({
  selector: 'app-create-quiz',
  template: `
    <!-- skeleton -->
    <ng-template #loadingSkeleton>
      <nz-skeleton [nzActive]="true" [nzParagraph]="{ rows: 12 }" [nzShape]="circle"
                   class="bg-white dark:bg-white/10 rounded-6 p-[30px] pt-[15px]"></nz-skeleton>
    </ng-template>
    <!-- skeleton -->
    <ng-container *ngIf="showContent; else loadingSkeleton">
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
                </nz-form-label>1
                <div
                  class="static  bg-white dark:bg-[#212e3d] pt-[54px] border-1 border-normal dark:border-white/10 rounded-10 dark:shadow-none z-998 sm:min-w-[400px]">
                  <div class="relative px-[30px] max-ssm:px-[15px] editor-style1">
                    <div *ngIf="isValid && isDarkMode(); then thenTemplateName else elseTemplateName"></div>
                    <ng-template #thenTemplateName>
                      <editor id="editor" (ngModelChange)="_modelChangeFn($event)" [(ngModel)]="editorContent" apiKey="9ao97tdbbojmeeefmu2vif9zvwfh1xj75ae0r4q32r483gto" #editor [init]="{
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
                      <editor id="editor" (ngModelChange)="_modelChangeFn($event)" [(ngModel)]="editorContent" apiKey="9ao97tdbbojmeeefmu2vif9zvwfh1xj75ae0r4q32r483gto"  #editor [init]="{
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

                    <!-- <nz-form-item>
                      <nz-form-label class="flex items-center font-medium dark:text-white/60" [nzSm]="6" [nzXs]="24" nzRequired
                                     nzFor="points">Points
                      </nz-form-label>
                      <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="The input is not valid E-mail!">
                        <input class="{{inputClass}}" nz-input formControlName="points" id="points"/>
                      </nz-form-control>
                    </nz-form-item> -->
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
                    <!-- <nz-form-item>
                      <nz-form-label class="flex items-center font-medium dark:text-white/60" [nzSm]="6" [nzXs]="24" nzFor="submission"
                                     nzRequired>Submission
                      </nz-form-label>
                      <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="Please select submission mode!">
                        <nz-radio-group formControlName="submission" id="submission" class="{{inputClass}}">
                          <label class="dark:text-white/[.87]" nz-radio nzValue="manual">On Paper / Physical</label>
                          <label class="dark:text-white/[.87]" nz-radio nzValue="online">Online</label>
                        </nz-radio-group>
                      </nz-form-control>
                    </nz-form-item> -->
                  </div>
                </form>
                <div  class="flex items-start justify-end it flex-wrap mb-[50px] p-[30px] shadow-[0_15px_40px_rgba(116,116,116,0.06)] gap-y-[10px]">
          <div class="flex items-center gap-[8px]">
                  <button class="capitalize text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn gap-[8px] dark:text-white/[.87] dark:hover:text-primary dark:bg-transparent" nz-button nzType="default">
                    <span nz-icon nzType="close" nzTheme="outline"></span>
                    <span> Cancel</span>
                  </button>
                  <button (click)="onSubmit(false)" class="capitalize text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn gap-[8px] dark:text-white/[.87] dark:hover:text-primary dark:bg-transparent" nz-button nzType="default">
                    <span nz-icon nzType="save" nzTheme="outline"></span>
                    <span> Save Quiz</span>
                  </button>
                  <!-- <button (click)="onSubmit()" class="capitalize bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button nzType="primary">
                    <span nz-icon nzType="check-circle" nzTheme="outline"></span>
                    <span>Create</span>
                  </button> -->
                </div>
        </div>
              </div>
            </div>

<div *ngSwitchCase="'question'">
  <form class="px-[80px] max-sm:px-0" [formGroup]="quizForm">
    <div formArrayName="questions">
      <div *ngFor="let question of questions.controls; let qIndex = index" [formGroupName]="qIndex">
        <div *ngIf="currentFocusedIndex === qIndex">
        <nz-card nzType="inner" class="mt-4 border border-gray-300" nzTitle="Question {{qIndex + 1}}" [nzExtra]="extraTemplate1">
        <ng-template #extraTemplate1>
    <div class="flex items-center space-x-2">
      <!-- Question Type Selector -->
      <nz-form-item class="flex items-center m-0">
        <nz-form-label class="font-medium dark:text-white/60 m-0" nzRequired nzFor="questionType">Type</nz-form-label>
        <nz-form-control class="m-0">
          <nz-select class="min-w-[80px] capitalize" formControlName="questionType" (ngModelChange)="updateQuestionForm(question, $event)">
            <nz-option nzValue="multipleChoice" nzLabel="Multiple Choice"></nz-option>
            <nz-option nzValue="trueOrFalse" nzLabel="True or False"></nz-option>
            <nz-option nzValue="fillInBlanks" nzLabel="Fill In Blank"></nz-option>
          </nz-select>
        </nz-form-control>
      </nz-form-item>

      <!-- Points Input -->
      <nz-form-item class="flex items-center m-0">
        <nz-form-label class="font-medium dark:text-white/60 m-0" nzRequired nzFor="points">Pts</nz-form-label>
        <nz-form-control class="m-0">
          <input type="number" class="w-12 h-8 text-center border border-gray-300 dark:border-gray-700" nz-input formControlName="points" />
        </nz-form-control>
      </nz-form-item>
    </div>
  </ng-template>

        <!-- Question Description Editor -->
        <nz-form-item class="w-full">
    <nz-form-label class="font-medium dark:text-white/60 mb-2" nzRequired nzFor="questionDescription">Question Description</nz-form-label>
    <nz-form-control class="w-full">
      <div class="static bg-transparent dark:bg-transparent z-998">
        <div class="relative px-[30px] max-ssm:px-[15px] editor-style1">
          <editor
            [id]="'editor' + qIndex"
            (ngModelChange)="modelChangeFn($event, qIndex)"
            [(ngModel)]="questions.at(qIndex).get('questionContent').value"
            [ngModelOptions]="{standalone: true}"
            apiKey="9ao97tdbbojmeeefmu2vif9zvwfh1xj75ae0r4q32r483gto"
            [init]="getEditorConfig(qIndex)"
            class="w-full"
          ></editor>
        </div>
      </div>
    </nz-form-control>
  </nz-form-item>

        <!-- Possible Answers -->
        <nz-divider class="border-gray-300 dark:border-gray-700 dark:text-white/60" nzOrientation="left" [nzText]="'Possible Answer '"></nz-divider>
        <div formArrayName="possibleAnswers">
          <div *ngFor="let answer of question.get('possibleAnswers').controls; let aIndex = index" [formGroupName]="aIndex">
            <nz-form-item>
              <nz-form-control [nzSm]="14" [nzXs]="24">
                <div class="flex items-center">
                  <input class="{{inputClass}}" nz-input formControlName="answer" [disabled]="questions.at(qIndex).get('questionType').value === 'trueOrFalse' || questions.at(qIndex).get('questionType').value === 'fillInBlanks'" />
                  <span nz-icon nzType="minus-circle-o" class="cursor-pointer m-2 text-2xl text-gray-900 transition-colors duration-300 hover:text-gray-700" (click)="removeAnswerOption(qIndex, aIndex)" *ngIf="questions.at(qIndex).get('questionType').value !== 'trueOrFalse' && questions.at(qIndex).get('questionType').value !== 'fillInBlanks'"></span>
                </div>
                <nz-radio-group formControlName="correct" *ngIf="questions.at(qIndex).get('questionType').value !== 'fillInBlanks'">
                  <label class="font-medium dark:text-white/60" nz-radio nzValue="true">Correct</label>
                </nz-radio-group>
              </nz-form-control>
            </nz-form-item>
          </div>
        </div>

        <button nz-button nzType="dashed" class="{{inputClass}} font-medium dark:text-white/60" type="button" (click)="addAnswerOption(qIndex)" *ngIf="questions.at(qIndex).get('questionType').value !== 'trueOrFalse' && questions.at(qIndex).get('questionType').value !== 'fillInBlanks'"><span nz-icon nzType="plus"></span> Add Answer Option</button>
        <div class="flex mt-4 items-center gap-[8px]">
                  <button (click)="removeQuestionBlock(qIndex)" class="capitalize text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn gap-[8px] dark:text-white/[.87] dark:hover:text-primary dark:bg-transparent" nz-button nzType="default">
                    <span nz-icon nzType="close" nzTheme="outline"></span>
                    <!-- <span> Cancel</span> -->
                  </button>
                  <button (click)="minimizeAll()" class="capitalize text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn gap-[8px] dark:text-white/[.87] dark:hover:text-primary dark:bg-transparent" nz-button nzType="default">
                    <span nz-icon nzType="minus" nzTheme="outline"></span>
                    <!-- <span> Minimize</span> -->
                  </button>
                  <button (click)="saveQuestion(qIndex)" class="capitalize bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" nz-button nzType="primary">
                    <span nz-icon nzType="check-circle" nzTheme="outline"></span>
                    <span>Update Question</span>
                  </button>
                </div>
      </nz-card>
    </div>

        <!-- Minimized View -->
        <div *ngIf="currentFocusedIndex !== qIndex" class="minimized-view">
  <nz-card nzType="inner" class="mt-4 border border-gray-300" nzTitle="Question {{ qIndex + 1 }}" [nzExtra]="extraTemplate">
    <p class="text-lg text-black mb-4 font-medium">{{ formatBody(questions.at(qIndex).get('questionContent').value | truncate: 20) }}</p>
    <p>Pts {{ questions.at(qIndex).get('points').value }}</p>

    <!-- Display based on question type -->
    <ng-container [ngSwitch]="questions.at(qIndex).get('questionType').value">

      <!-- Display for Multiple Choice -->
      <div *ngSwitchCase="'multipleChoice'">
        <nz-divider class="border-gray-300 dark:border-gray-700 dark:text-white/60" nzOrientation="left" [nzText]="'Options'"></nz-divider>
        <div formArrayName="possibleAnswers">
          <div *ngFor="let answer of questions.at(qIndex).get('possibleAnswers').controls; let aIndex = index" [formGroupName]="aIndex">
            <nz-radio [nzDisabled]="true" [nzChecked]="answer.get('correct').value">
              {{ 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[aIndex] }}. {{ answer.get('answer').value }}
            </nz-radio>
          </div>
        </div>
      </div>

      <!-- Display for True or False -->
      <div *ngSwitchCase="'trueOrFalse'">
        <nz-divider class="border-gray-300 dark:border-gray-700 dark:text-white/60" nzOrientation="left" [nzText]="'Options'"></nz-divider>
        <nz-radio-group [formControl]="questions.at(qIndex).get('selectedAnswer')" [nzDisabled]="true">
          <nz-radio nzValue="true" [nzChecked]="questions.at(qIndex).get('possibleAnswers').at(0).get('correct').value">True</nz-radio>
          <nz-radio nzValue="false" [nzChecked]="questions.at(qIndex).get('possibleAnswers').at(1).get('correct').value">False</nz-radio>
        </nz-radio-group>
      </div>

      <!-- Display for Fill In Blanks -->
      <div *ngSwitchCase="'fillInBlanks'">
        <nz-divider class="border-gray-300 dark:border-gray-700 dark:text-white/60" nzOrientation="left" [nzText]="'Answer'"></nz-divider>
        <input nz-input [value]="questions.at(qIndex).get('possibleAnswers').at(0).get('answer').value" disabled />
      </div>

    </ng-container>
  </nz-card>

  <!-- Extra Template -->
  <ng-template #extraTemplate>
    <div class="flex items-center space-x-2">
      <a (click)="toggleFocus(qIndex)" nz-tooltip nzTooltipTitle="Edit"><span nz-icon nzType="edit"></span></a>
      <a (click)="removeQuestionBlock(qIndex)" nz-tooltip nzTooltipTitle="Delete"><span nz-icon nzType="close"></span></a>
    </div>
  </ng-template>
</div>



      </div>
    </div>

    <!-- Add Question Block Button -->
    <div class="flex justify-end mt-6">
      <button nz-button nzType="dashed" class=" {{inputClass}} px-[80px] max-sm:px-0 font-mediumdark:text-white/60" type="button" (click)="addQuestionBlock()"><span nz-icon nzType="plus"></span>Add Question Block</button>
    </div>
  </form>
</div>


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

export class CreateQuizComponent implements OnInit {
  constructor(private quizService: QuizService,
              public authService: AuthService,
              private subjectService: SubjectService,
              private multipleChoiceQuestionService: MultipleChoiceQuestionService,
              private trueOrFalseQuestionService: TrueOrFalseQuestionService,
              private fillInBlankQuestionService: FillInBlankQuestionService,
              private questionAssignmentService: QuestionAssignmentService,
              @Inject(DOCUMENT) private document: Document,
              private route: ActivatedRoute,
              private message: NzMessageService,
              public router: Router,
              private fb: FormBuilder) {
                this.quizForm = this.fb.group({
                  questions: this.fb.array([])
                });
                this._EditvalidateForm = this.fb.group({
                  title: [null, [Validators.required]],
                  from: [null, [Validators.required]],
                  due: [null, [Validators.required]],
                  // Add other form controls as needed
                });
              }

  quizId: number;
  questionId: number; // Hold the ID of the quiz being edited, if in editing mode
  editingMode: boolean = false; // Flag to indicate whether in editing mode or creation mode
  _EditvalidateForm: FormGroup; // Form group for quiz data
  subject: Subject[];
  quizzes: Quiz[];
  isLoading = true;
  showContent = false;
  allChecked = false;
  indeterminate = false;
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
  currentFocusedIndex: number = 0;

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

  ngOnInit(): void {
    // this.addQuestionBlock();
    const id = Number(this.route.snapshot.parent.paramMap.get('id'));
    this.subjectService.getById([id]).subscribe({
      next: (subject: Subject[]) => {
        this.subject = subject;
      },
      error: () => {},
    });
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.editingMode = true;
        this.quizId = +params['id'];
        // Load existing quiz data for editing
        this.loadQuizDataForEditing(this.quizId);
      } else {
        this.editingMode = false;
      }
    });
    this.loadData();
    // this.printQuestions();
    

    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      from: [null, [Validators.required]],
      due: [null, [Validators.required]],
    });

    this.editor.nativeElement.value = 'Hello World';

  }

  loadQuizDataForEditing(id: number): void {
    this.quizService.getById([id]).subscribe(
      (quiz: Quiz[]) => {
        this.preloadQuizData(quiz[0]);
  
        // Fetch questions associated with the quiz
        this.questionAssignmentService.getByQuizIdAll(id).subscribe(
          (questionAssignments: QuestionAssignment[]) => {
            this.preloadQuestionsData(questionAssignments);
          },
          (error) => {
            console.error('Error fetching questions for quiz:', error);
          }
        );
      },
      (error) => {
        console.error('Error fetching quiz for editing:', error);
      }
    );
  }

  preloadQuestionsData(questionAssignments: QuestionAssignment[]): void {
    questionAssignments.forEach(assignment => {
      let questionGroup;
  
      if (assignment.multipleChoiceQuestion) {
        const question = assignment.multipleChoiceQuestion;
        questionGroup = this.fb.group({
          questionType: ['multipleChoice', Validators.required],
          questionContent: [question.questionDescription, Validators.required],
          possibleAnswers: this.fb.array(
            question.options.map(option => this.fb.group({
              answer: [option, Validators.required],
              correct: [option === question.correctAnswer, Validators.required]
            }))
          ),
          points: [question.points, Validators.required],
        });
      } else if (assignment.trueOrFalseQuestion) {
        const question = assignment.trueOrFalseQuestion;
        questionGroup = this.fb.group({
          questionType: ['trueOrFalse', Validators.required],
          questionContent: [question.questionDescription, Validators.required],
          possibleAnswers: this.fb.array([
            this.fb.group({
              answer: [{ value: 'True', disabled: true }, Validators.required],
              correct: [question.correctAnswer === true, Validators.required]
            }),
            this.fb.group({
              answer: [{ value: 'False', disabled: true }, Validators.required],
              correct: [question.correctAnswer === false, Validators.required]
            })
          ]),
          points: [question.points, Validators.required],
        });
      } else if (assignment.fillInBlankQuestion) {
        const question = assignment.fillInBlankQuestion;
        questionGroup = this.fb.group({
          questionType: ['fillInBlanks', Validators.required],
          questionContent: [question.questionDescription, Validators.required],
          possibleAnswers: this.fb.array([
            this.fb.group({
              answer: [question.correctAnswer, Validators.required],
              correct: [true]
            })
          ]),
          points: [question.points, Validators.required],
        });
      }
  
      questionGroup.get('questionType')!.valueChanges.subscribe(value => {
        this.updateQuestionForm(questionGroup, value);
      });
  
      this.questions.push(questionGroup);
    });
  }
  
  

  preloadQuizData(quiz: Quiz): void {
    this.validateForm.patchValue({
      title: quiz.title,
      from: quiz.availableFrom,
      due: quiz.dueDate,
    });
    this.editorContent = quiz.description;
  }

  get questions() {
    return this.quizForm.get('questions') as FormArray;
  }

  addQuestionBlock() {
    const questionGroup = this.fb.group({
      questionType: ['multipleChoice', Validators.required],
      questionContent: ['', Validators.required],
      possibleAnswers: this.fb.array([
        this.createAnswerOption(),
        this.createAnswerOption(),
        this.createAnswerOption(),
        this.createAnswerOption()
      ]),
      points: [1, Validators.required],  // Added default points control
    });

    questionGroup.get('questionType')!.valueChanges.subscribe(value => {
      this.updateQuestionForm(questionGroup, value);
    });

    this.questions.push(questionGroup);
    this.currentFocusedIndex = this.questions.length - 1;
  }

  updateQuestionForm(questionGroup: FormGroup, questionType: string): void {
    const possibleAnswers = questionGroup.get('possibleAnswers') as FormArray;
  
    if (questionType === 'multipleChoice') {
      while (possibleAnswers.length < 4) {
        possibleAnswers.push(this.createAnswerOption());
      }
      while (possibleAnswers.length > 4) {
        possibleAnswers.removeAt(possibleAnswers.length - 1);
      }
    } else if (questionType === 'trueOrFalse') {
      possibleAnswers.clear();
      possibleAnswers.push(this.fb.group({
        answer: [{ value: 'True', disabled: true }, Validators.required],
        correct: [false, Validators.required]
      }));
      possibleAnswers.push(this.fb.group({
        answer: [{ value: 'False', disabled: true }, Validators.required],
        correct: [false, Validators.required]
      }));
    } else if (questionType === 'fillInBlanks') {
      possibleAnswers.clear();
      possibleAnswers.push(this.fb.group({
        answer: ['', Validators.required],
        correct: [true]
      }));
    }
  }
  

  removeQuestionBlock(questionIndex: number) {
    this.questions.removeAt(questionIndex);
    if (this.currentFocusedIndex >= this.questions.length) {
      this.currentFocusedIndex = this.questions.length - 1;
    }
  }

  addAnswerOption(questionIndex: number) {
    const answerOptions = this.questions.at(questionIndex).get('possibleAnswers') as FormArray;
    answerOptions.push(this.fb.group({
      answer: ['', Validators.required],
      correct: [false, Validators.required]
    }));
  }

  createAnswerOption(): FormGroup {
    return this.fb.group({
      answer: ['', Validators.required],
      correct: [false, Validators.required]
    });
  }

  removeAnswerOption(questionIndex: number, answerIndex: number) {
    const answerOptions = this.questions.at(questionIndex).get('possibleAnswers') as FormArray;
    answerOptions.removeAt(answerIndex);
  }

  saveQuestion(qIndex: number) {
    const questionFormGroup = this.questions.at(qIndex) as FormGroup;
  
    if (!questionFormGroup.valid) {
      return;
    }
  
    const formData = questionFormGroup.value;
    const questionType = formData.questionType;
  
    if (questionType === 'multipleChoice') {
      const multipleChoiceQuestion: MultipleChoiceQuestion = {
        points: +formData.points,
        questionDescription: formData.questionContent,
        correctAnswer: formData.possibleAnswers.find((a: any) => a.correct).answer,
        options: formData.possibleAnswers.map((a: any) => a.answer)
      };
  
      this.multipleChoiceQuestionService.create(multipleChoiceQuestion).subscribe(
        (response) => {
          console.log('MCQ created successfully:', response);
          this.message.success('MCQ created successfully');
  
          const questionId = response.id;
          const quizId = this.quizId;
  
          this.quizService.addMultipleChoiceQuestionToQuiz(quizId, questionId, qIndex).subscribe(
            (addResponse) => {
              console.log('Question added to quiz successfully:', addResponse);
              this.message.success('Question added to quiz successfully');
              this.minimizeAll();
            },
            (addError) => {
              console.error('Error adding question to quiz:', addError);
              this.message.error('Error adding question to quiz');
            }
          );
        },
        (error) => {
          console.error('Error creating MCQ:', error);
          this.message.error('Error creating MCQ');
        }
      );
    } else if (questionType === 'trueOrFalse') {
      const trueOrFalseQuestion: TrueOrFalseQuestion = {
        points: +formData.points,
        questionDescription: formData.questionContent,
        correctAnswer: formData.possibleAnswers.find((a: any) => a.correct).answer === 'True'
      };
  
      this.trueOrFalseQuestionService.create(trueOrFalseQuestion).subscribe(
        (response) => {
          console.log('TOF created successfully:', response);
          this.message.success('TOF created successfully');

          const questionId = response.id;
          const quizId = this.quizId;
  
          this.quizService.addTrueOrFalseQuestionToQuiz(quizId, questionId, qIndex).subscribe(
            (addResponse) => {
              console.log('Question added to quiz successfully:', addResponse);
              this.message.success('Question added to quiz successfully');
              this.minimizeAll();
            },
            (addError) => {
              console.error('Error adding question to quiz:', addError);
              this.message.error('Error adding question to quiz');
            }
          );
        },
        (error) => {
          console.error('Error creating TOF:', error);
          this.message.error('Error creating TOF');
        }
      );
    } else if (questionType === 'fillInBlanks') {
      const fillInBlankQuestion: FillInBlankQuestion = {
        points: +formData.points,
        questionDescription: formData.questionContent,
        correctAnswer: formData.possibleAnswers[0].answer
      };
  
      this.fillInBlankQuestionService.create(fillInBlankQuestion).subscribe(
        (response) => {
          console.log('FIB created successfully:', response);
          this.message.success('FIB created successfully');

          const questionId = response.id;
          const quizId = this.quizId;
  
          this.quizService.addFillInBlankQuestionToQuiz(quizId, questionId, qIndex).subscribe(
            (addResponse) => {
              console.log('Question added to quiz successfully:', addResponse);
              this.message.success('Question added to quiz successfully');
              this.minimizeAll();
            },
            (addError) => {
              console.error('Error adding question to quiz:', addError);
              this.message.error('Error adding question to quiz');
            }
          );
        },
        (error) => {
          console.error('Error creating FIB:', error);
          this.message.error('Error creating FIB');
        }
      );
    }
  }
  
  loadData() {
    setTimeout(() => {
      this.isLoading = false;
      this.showContent = true;
    }, 10);
  }


 toggleFocus(index: number): void {
  this.currentFocusedIndex = index;
  const questionGroup = this.questions.at(index) as FormGroup;
  const questionType = questionGroup.get('questionType')!.value;
  this.updateQuestionForm(questionGroup, questionType);
}


  minimizeAll() {
    this.currentFocusedIndex = -1;
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


  cancelQuiz() {
      this.router.navigate(
        ['/pages/subject', this.route.snapshot.parent.paramMap.get('id'), 'quizzes'],
      ).catch(error => {
        console.error('Navigation error:', error);
      });
    
  }

  modelChangeFn(content: string, questionIndex: number) {
    console.log("content");
    console.log(content);
    this.questions.at(questionIndex).get('questionContent').setValue(content);
    console.log(this.questions.at(questionIndex).get('questionContent'));
  }

  getEditorConfig(index: number) {
    return {
      promotion: false,
      base_url: '/tinymce',
      suffix: '.min',
      plugins: 'lists link image table code help wordcount',
      toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen preview save print | insertfile image media template link anchor codesample | ltr rtl',
      // skin: index % 2 === 0 ? 'oxide-dark' : 'oxide', 
      // content_css: index % 2 === 0 ? 'dark' : 'default'
    };
  }

  formatBody = function(body: string) {
    return body.replace(/<(?:.|\n)*?>/gm, ' ');
  };


  _modelChangeFn(e) {
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
      // totalPoints: +formData.points,
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
  


  createMessage(type: string): void {
    this.message.create(type, `${type} Quiz created successfully:`);
  }


}

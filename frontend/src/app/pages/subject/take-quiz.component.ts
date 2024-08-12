import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizAttemptService } from '../../core/services/quiz-attempt.service';
import { QuestionAssignmentService } from '../../core/services/question-assignment.service';
import { QuestionAnswerService } from '../../core/services/question-answer.service';
import { QuizAttempt } from '../../core/models/quiz-attempt.model';
import { QuestionAssignment } from '../../core/models/question-assignment.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { Quiz } from 'src/app/core/models/quiz.model';
import { QuizService } from 'src/app/core/services/quiz.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-take-quiz',
  template: `
  <!-- skeleton -->
  <ng-template #loadingSkeleton>
      <nz-skeleton [nzActive]="true" [nzParagraph]="{ rows: 12 }" [nzShape]="'circle'"
                   class="bg-white dark:bg-white/10 rounded-6 p-[30px] pt-[15px]"></nz-skeleton>
    </ng-template>
    <!-- skeleton -->
    <div *ngIf="showContent; else loadingSkeleton">
      <div class="mail-content bg-white dark:bg-[#1b1c29] rounded-[10px]">
        <div class="flex items-center justify-between max-3xl:justify-center px-[30px] py-[12px] border-b border-regular dark:border-white/10">
          <table class="w-full overflow-x-auto">
            <thead>
              <tr class="max-3xl:flex max-3xl:items-center max-3xl:flex-col max-3xl:justify-center max-3xl:gap-[15px]">
                <th class="text-start sm:w-[4%]">
                  <a class="inline-flex items-center justify-center bg-transparent text-light-extra dark:text-white/60 w-[38px] h-[38px] rounded-full hover:bg-primary/10 hover:text-primary dark:hover:text-primary"
                     (click)="cancelQuiz()">
                    <span class="[&>svg]:w-[12px] [&>svg]:h-[12px]" nz-icon nzType="arrow-left" nzTheme="outline"></span>
                  </a>
                </th>
                <th>
                  <div class="flex items-center">
                    <a aria-current="page" class="inline-flex items-center justify-center bg-transparent text-light-extra dark:text-white/60 w-[38px] h-[38px] rounded-full hover:bg-primary/10 hover:text-primary dark:hover:text-primary active"
                       href="/" nzTooltipTitle="Refresh" nzTooltipPlacement="bottomRight" nz-tooltip>
                      <span nz-icon nzType="reload" nzTheme="outline"></span>
                    </a>
                  </div>
                </th>
                <th></th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="xs:px-[25px]">
          <div class="py-[30px] px-[25px] border-b border-regular dark:border-white/10">
            <div class="mb-9">
            <div class="xs:px-[25px]">
              <div class="py-[30px] px-[25px] border-b border-regular dark:border-white/10">
                <div class="flex items-center justify-between flex-wrap sm:gap-[15px] sm:y-[1px] max-sm:gap-[5px]">
                  <h6 class="text-dark dark:text-white/[.87] text-[24px] font-semibold leading-[30px] mb-[5px]">
                    {{quiz?.title}}
                  </h6>
                </div>
                <div class="flex-wrap items-center justify-between md:mb-[20px] md:mt-5 flex max-md:mb-[30px] gap-y-[20px]">
                  <div class="flex items-center media gap-5">
                    <div class="ms-[10]">
                      <p class="text-sm text-gray-500 dark:text-gray-400">Started Quiz At: {{ quizAttempt?.timestamp | date: 'short' }}</p>
                      <p class="text-sm text-gray-500 dark:text-gray-400">Elapsed Time: {{ elapsedTime }}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="px-[0px] max-sm:px-0">
                    <div class="xs:mb-[17px] text-[20px] leading-[24px] max-xs:mb-[30px">
                      <h6 class="text-dark dark:text-white/[.87] text-[20px] font-semibold leading-[24px] mb-[15px]">Quiz Description/Instructions</h6>
                      <p [innerHTML]="quiz.description" class="inline-block mb-[15px] text-body dark:text-white/60 overflow-y-auto p-4"></p>
                    </div>
                    <div *ngFor="let question of questions">
                      <nz-card nzType="inner" class="mt-4 border border-gray-300" nzTitle="Question {{ question.index + 1 }}" [nzExtra]="extraTemplate">
                        <p [innerHTML]="question.content" class="text-lg text-black mb-4 font-medium"></p>
                        <ng-container [ngSwitch]="question.type">
                          <div *ngSwitchCase="'multipleChoice'">
                            <nz-radio-group [(ngModel)]="question.selectedAnswer" (ngModelChange)="saveAnswer(question)">
                              <label *ngFor="let answer of question.answers" nz-radio [nzValue]="answer.text">
                                {{ answer.text }}
                              </label>
                            </nz-radio-group>
                          </div>
                          <div *ngSwitchCase="'trueOrFalse'">
                            <nz-radio-group [(ngModel)]="question.selectedAnswer" (ngModelChange)="saveAnswer(question)">
                              <label nz-radio [nzValue]="'True'">True</label>
                              <label nz-radio [nzValue]="'False'">False</label>
                            </nz-radio-group>
                          </div>
                          <div *ngSwitchCase="'fillInBlanks'">
                            <input nz-input [(ngModel)]="question.studentAnswer" (ngModelChange)="saveAnswer(question)" />
                          </div>
                        </ng-container>
                      </nz-card>
                      <ng-template #extraTemplate>
                        <p class="mt-2">Pts {{ question.points }}</p>
                      </ng-template>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-end gap-[8px]">
              <button (click)="submitQuiz()" class="capitalize text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn gap-[8px] dark:text-white/[.87] dark:hover:text-primary dark:bg-transparent" nz-button nzType="default">
                <span nz-icon nzType="save" nzTheme="outline"></span>
                <span> Save Quiz</span>
              </button>  
            </div>
          </div>
          <div class="text-center mt-4"></div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    [nz-radio] {
      display: block;
    }
    input {
      width: 100px;
      margin-left: 10px;
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
  `]
})
export class TakeQuizComponent implements OnInit {
  quizAttempt: QuizAttempt | null = null;
  questions: any[] = [];
  showContent = false;
  quiz: Quiz;
  elapsedTime: string = '';
  private timerSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quizAttemptService: QuizAttemptService,
    public authService: AuthService,
    private quizService: QuizService,
    private questionAssignmentService: QuestionAssignmentService,
    private questionAnswerService: QuestionAnswerService
  ) {}

  ngOnInit() {
    this.startQuiz();
  }

  startQuiz() {
    const studentId = this.authService.getStudentId(); // Replace with actual student ID
    const quizId = Number(this.route.snapshot.paramMap.get('id')); // Assuming quiz ID is passed in the route
    this.quizService.getById([quizId]).subscribe(quiz => {
      this.quiz = quiz[0];
      console.log('Quiz loaded:', this.quiz);
    });

    this.quizAttemptService.startQuizAttempt(studentId, quizId).subscribe(
      (attempt) => {
        this.quizAttempt = attempt;
        console.log('Quiz attempt started:', this.quizAttempt);
        this.loadQuestions(attempt.quiz.id);
        this.showContent = true;
        this.startTimer();
      },
      (error) => {
        console.error('Error starting quiz attempt:', error);
      }
    );
  }

  startTimer() {
    if (this.quizAttempt) {
      const startTime = new Date(this.quizAttempt.timestamp).getTime();
      this.timerSubscription = interval(1000).subscribe(() => {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - startTime;
        this.elapsedTime = this.formatElapsedTime(elapsedTime);
      });
    }
  }

  formatElapsedTime(milliseconds: number): string {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours}h ${minutes}m ${seconds}s`;
  }


  loadQuestions(quizId: number) {
    this.questionAssignmentService.getByQuizIdAll(quizId).subscribe(
      (questions) => {
        console.log('Questions loaded:', questions);
        this.questions = this.mapQuestionAssignments(questions);
      },
      (error) => {
        console.error('Error loading questions:', error);
      }
    );
  }

  mapQuestionAssignments(assignments: QuestionAssignment[]): any[] {
    return assignments.map((assignment, index) => {
      let questionData: any = {};
      if (assignment.multipleChoiceQuestion) {
        questionData = {
          type: 'multipleChoice',
          id: assignment.id, // Using the actual question ID
          index,
          content: assignment.multipleChoiceQuestion.questionDescription,
          answers: assignment.multipleChoiceQuestion.options.map((option) => ({
            text: option,
          })),
          points: assignment.multipleChoiceQuestion.points,
          selectedAnswer: null,
        };
      } else if (assignment.trueOrFalseQuestion) {
        questionData = {
          type: 'trueOrFalse',
          index,
          id: assignment.id, // Using the actual question ID
          content: assignment.trueOrFalseQuestion.questionDescription,
          points: assignment.trueOrFalseQuestion.points,
          selectedAnswer: null,
        };
      } else if (assignment.fillInBlankQuestion) {
        questionData = {
          type: 'fillInBlanks',
          id: assignment.id, // Using the actual question ID
          index,
          content: assignment.fillInBlankQuestion.questionDescription,
          points: assignment.fillInBlankQuestion.points,
          studentAnswer: '',
        };
      } else {
        console.warn('Unknown question type:', assignment);
      }
      console.log('Mapped question:', questionData);
      return questionData;
    });
  }

  saveAnswer(question: any) {
    if (!this.quizAttempt) return;

    const studentId = this.authService.getStudentId(); // Replace with actual student ID
    const quizAttemptId = this.quizAttempt.id;
    const answer = question.type === 'fillInBlanks' ? question.studentAnswer : question.selectedAnswer;

    console.log('Saving answer:', { quizAttemptId, questionId: question.id, answer });

    this.questionAnswerService.processQuestionAnswer(quizAttemptId, question.id, answer).subscribe(
      (response) => {
        console.log('Answer saved successfully:', response);
      },
      (error) => {
        console.error('Error saving answer:', error);
      }
    );
  }

  cancelQuiz() {
    this.router.navigate(['/quizzes']);
  }


  submitQuiz() {
    if (!this.quizAttempt) return;
        const subjectId = this.route.snapshot.parent.paramMap.get('id');
        this.router.navigate(['/pages/subject', subjectId, 'quiz-result', this.quizAttempt?.id]);
      }


}

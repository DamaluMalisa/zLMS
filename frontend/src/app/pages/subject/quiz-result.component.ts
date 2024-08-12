import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizAttemptService } from '../../core/services/quiz-attempt.service';
import { QuestionAssignmentService } from '../../core/services/question-assignment.service';
import { QuestionAnswerService } from '../../core/services/question-answer.service';
import { QuizAttempt } from '../../core/models/quiz-attempt.model';
import { QuestionAssignment } from '../../core/models/question-assignment.model';
import { QuestionAnswer } from '../../core/models/question-answer.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { Quiz } from 'src/app/core/models/quiz.model';
import { QuizService } from 'src/app/core/services/quiz.service';

@Component({
  selector: 'app-take-quiz',
  template: `
  <div *ngIf="quizAttempt && quiz">
    <div class="mail-content bg-white dark:bg-[#1b1c29] rounded-[10px]">
      <div class="flex items-center justify-between max-3xl:justify-center px-[30px] py-[12px] border-b border-regular dark:border-white/10">
        <table class="w-full overflow-x-auto">
          <thead>
            <tr class="max-3xl:flex max-3xl:items-center max-3xl:flex-col max-3xl:justify-center max-3xl:gap-[15px]">
              <th class="text-start sm:w-[4%]">
                <a class="inline-flex items-center justify-center bg-transparent text-light-extra dark:text-white/60 w-[38px] h-[38px] rounded-full hover:bg-primary/10 hover:text-primary dark:hover:text-primary" (click)="goBack()">
                  <span class="[&>svg]:w-[12px] [&>svg]:h-[12px]" nz-icon nzType="arrow-left" nzTheme="outline"></span>
                </a>
              </th>
              <th>
                <div class="flex items-center">
                  <h6 class="text-dark dark:text-white/[.87] text-[24px] font-semibold leading-[30px] mb-[5px]">
                    {{quiz?.title}}
                  </h6>
                </div>
              </th>
              <th></th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="xs:px-[25px]">
        <div class="py-[30px] px-[25px] border-b border-regular dark:border-white/10">
          <div class="xs:px-[25px]">
            <div class="py-[30px] px-[25px] border-b border-regular dark:border-white/10">
              <div class="xs:mb-[17px] text-[20px] leading-[24px] max-xs:mb-[30px">
                <h6 class="text-dark dark:text-white/[.87] text-[20px] font-semibold leading-[24px] mb-[15px]">Quiz Description/Instructions</h6>
                <p [innerHTML]="quiz.description" class="inline-block mb-[15px] text-body dark:text-white/60 overflow-y-auto p-4"></p>
              </div>
              <!-- <div class="quiz-analytics">
            <div class="stat">
              <h6>Time Taken:</h6>
              <p>{{ timeTaken }} minutes</p>
            </div>
            <div class="stat">
              <h6>Points Gained:</h6>
              <p>{{ pointsGained }} / {{ totalPoints }}</p>
            </div>
            <div class="stat">
              <h6>Overall Score:</h6>
              <p>{{ (pointsGained / totalPoints * 100) | number:'1.0-2' }}%</p>
            </div>
          </div> -->
              <div *ngFor="let question of questions">
                <nz-card nzType="inner" class="mt-5 border border-gray-300" [ngClass]="{'bg-green-100': question?.isCorrect, 'bg-red-100': question?.isCorrect === false}" nzTitle="Question {{ question.index + 1 }}" [nzExtra]="extraTemplate">
                  <p [innerHTML]="question.content" class="text-lg text-black mb-4 font-medium"></p>
                  <ng-container [ngSwitch]="question.type">
                    <div *ngSwitchCase="'multipleChoice'">
                      <nz-radio-group [(ngModel)]="question.studentAnswer" disabled>
                        <label *ngFor="let answer of question.answers" nz-radio [nzValue]="answer.text">
                          {{ answer.text }}
                        </label>
                      </nz-radio-group>
                      <p class="text-primary">Correct Answer: {{ question.correctAnswer }}</p>
                    </div>
                    <div *ngSwitchCase="'trueOrFalse'">
                      <nz-radio-group [(ngModel)]="question.studentAnswer" disabled>
                        <label nz-radio [nzValue]="'True'">True</label>
                        <label nz-radio [nzValue]="'False'">False</label>
                      </nz-radio-group>
                      <p class="text-primary">Correct Answer: {{ question.correctAnswer }}</p>
                    </div>
                    <div *ngSwitchCase="'fillInBlanks'">
                      <input nz-input [(ngModel)]="question.studentAnswer" disabled />
                      <p class="text-primary">Correct Answer: {{ question.correctAnswer }}</p>
                    </div>
                  </ng-container>
                </nz-card>
                <ng-template #extraTemplate>
                  <span class="status-indicator" [ngClass]="{'correct': question?.isCorrect, 'incorrect': question?.isCorrect === false}">
                    <span *ngIf="question?.isCorrect" nz-icon nzType="check-circle" nzTheme="fill" class="mr-2"></span>
                    <span *ngIf="question?.isCorrect === false" nz-icon nzType="close-circle" nzTheme="fill" class="mr-2"></span>
                    {{ question?.isCorrect ? 'Correct' : 'Incorrect' }}
                  </span>
                </ng-template>
              </div>
            </div>
          </div>
        </div>
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
    :host ::ng-deep .ant-radio-inner {
      @apply dark:bg-white/10 dark:border-white/30;
    }
    :host ::ng-deep .ant-radio-checked .ant-radio-inner {
      @apply dark:border-primary;
    }
    :host ::ng-deep .ant-radio-input:focus + .ant-radio-inner {
      @apply dark:shadow-none;
    }
    :host ::ng-deep .ant-input {
      @apply dark:bg-white/10 dark:border-white/30;
    }
    .status-indicator.correct {
      color: green;
      font-weight: bold;
      display: flex;
      align-items: center;
    }
    .status-indicator.incorrect {
      color: red;
      font-weight: bold;
      display: flex;
      align-items: center;
    }
    .quiz-analytics {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    .quiz-analytics .stat {
      flex: 1;
      text-align: center;
    }
    .quiz-analytics .stat h6 {
      font-size: 18px;
      margin-bottom: 5px;
    }
    .quiz-analytics .stat p {
      font-size: 16px;
      margin: 0;
    }
  `]
})
export class QuizResultComponent implements OnInit {
  quizAttempt: QuizAttempt | null = null;
  questions: any[] = [];
  quiz: Quiz;
  timeTaken: number = 0;
  pointsGained: number = 0;
  totalPoints: number = 0;

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
    this.loadQuizResult();
  }

  loadQuizResult() {
    const attemptId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Attempt ID:', attemptId);  // Debug log
    this.quizAttemptService.getById([attemptId]).subscribe(
      (attempt) => {
        console.log('Quiz Attempt Loaded:', attempt);  // Debug log
        this.quizAttempt = attempt[0];
        this.quiz = attempt[0].quiz;
        this.loadQuestionsAndAnswers(attempt[0].quiz.id);
      },
      (error) => {
        console.error('Error loading quiz attempt:', error);
      }
    );
  }

  loadQuestionsAndAnswers(quizId: number) {
    console.log('Loading questions and answers for Quiz ID:', quizId);  // Debug log
    this.questionAssignmentService.getByQuizIdAll(quizId).subscribe(
      (questions) => {
        console.log('Questions Loaded:', questions);  // Debug log
        this.questionAnswerService.getByQuizAttemptIdAll(this.quizAttempt.id).subscribe(
          (answers) => {
            console.log('Answers Loaded:', answers);
            this.questions = this.mapQuestionsAndAnswers(questions, answers);
            console.log( 'questions:', this.questions);
          },
          (error) => {
            console.error('Error loading answers:', error);
          }
        );
      },
      (error) => {
        console.error('Error loading questions:', error);
      }
    );
  }

  mapQuestionsAndAnswers(assignments: QuestionAssignment[], answers: QuestionAnswer[]): any[] {
    return assignments.map((assignment, index) => {
      let questionData: any = {};
      // Find the answer that corresponds to the current assignment
      let answer = answers.find(a => {
        if (a.multipleChoiceQuestion && assignment.multipleChoiceQuestion) {
          return a.multipleChoiceQuestion.id === assignment.multipleChoiceQuestion.id;
        } else if (a.trueOrFalseQuestion && assignment.trueOrFalseQuestion) {
          return a.trueOrFalseQuestion.id === assignment.trueOrFalseQuestion.id;
        } else if (a.fillInBlankQuestion && assignment.fillInBlankQuestion) {
          return a.fillInBlankQuestion.id === assignment.fillInBlankQuestion.id;
        }
        return false;
      });
  
      console.log('Assignment:', assignment);
      console.log('Matching Answer:', answer);
  
      if (assignment.multipleChoiceQuestion) {
        questionData = {
          type: 'multipleChoice',
          id: assignment.id,
          index,
          content: assignment.multipleChoiceQuestion.questionDescription,
          answers: assignment.multipleChoiceQuestion.options.map((option) => ({
            text: option,
          })),
          points: assignment.multipleChoiceQuestion.points,
          correctAnswer: assignment.multipleChoiceQuestion.correctAnswer,
          studentAnswer: answer ? answer.studentAnswer : '',
          isCorrect: answer ? answer.correct : null,
        };
      } else if (assignment.trueOrFalseQuestion) {
        questionData = {
          type: 'trueOrFalse',
          id: assignment.id,
          index,
          content: assignment.trueOrFalseQuestion.questionDescription,
          points: assignment.trueOrFalseQuestion.points,
          correctAnswer: assignment.trueOrFalseQuestion.correctAnswer,
          studentAnswer: answer ? answer.studentAnswer : '',
          isCorrect: answer ? answer.correct : null,
        };
      } else if (assignment.fillInBlankQuestion) {
        questionData = {
          type: 'fillInBlanks',
          id: assignment.id,
          index,
          content: assignment.fillInBlankQuestion.questionDescription,
          points: assignment.fillInBlankQuestion.points,
          correctAnswer: assignment.fillInBlankQuestion.correctAnswer,
          studentAnswer: answer ? answer.studentAnswer : '',
          isCorrect: answer ? answer.correct : null,
        };
      } else {
        console.warn('Unknown question type:', assignment);
      }
  
      console.log('Mapped Question Data:', questionData);
      return questionData;
    });
  }

  calculateTimeTaken() {
    if (this.quizAttempt) {
      const startTime = new Date(this.quizAttempt.timestamp).getTime();
      const endTime = new Date().getTime();
      const duration = (endTime - startTime) / 60000;
      this.timeTaken = Math.round(duration);
    }
  }

  calculatePoints(answers: QuestionAnswer[]) {
    this.pointsGained = answers.reduce((sum, answer) => sum + (answer.isCorrect ? answer.score : 0), 0);
    this.totalPoints = this.quiz?.totalQuiz || 0;
  }
  
  goBack() {
    this.router.navigate(['/quizzes']);
  }
}

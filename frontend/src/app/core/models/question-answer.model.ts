import { FillInBlankQuestion } from './fill-in-blank-question';
import { MultipleChoiceQuestion } from './multiple-choice-question';
import { QuizAttempt } from './quiz-attempt.model';
import { TrueOrFalseQuestion } from './true-or-false-question';
import { Base } from './base.model';

export interface QuestionAnswer extends Base {
  quizAttempt: QuizAttempt;
  multipleChoiceQuestion: MultipleChoiceQuestion;
  trueOrFalseQuestion: TrueOrFalseQuestion;
  fillInBlankQuestion: FillInBlankQuestion;
  timestamp: Date;
  studentAnswer: string;
  isCorrect: boolean;
  score: number;
}

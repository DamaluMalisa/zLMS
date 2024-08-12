import { Base } from './base.model';
import { Quiz } from './quiz.model';
import { MultipleChoiceQuestion } from './multiple-choice-question';
import { TrueOrFalseQuestion } from './true-or-false-question';
import { FillInBlankQuestion } from './fill-in-blank-question';

export interface QuestionAssignment extends Base {
  quiz: Quiz;
  multipleChoiceQuestion: MultipleChoiceQuestion;
  trueOrFalseQuestion: TrueOrFalseQuestion;
  fillInBlankQuestion: FillInBlankQuestion;
  timestamp: Date;
  order: number;
}

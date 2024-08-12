import { Base } from './base.model';

export interface MultipleChoiceQuestion extends Base {
  questionDescription: string;
  correctAnswer: string;
  points: number;
  options: string[];
}

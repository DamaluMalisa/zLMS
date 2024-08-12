import { Base } from './base.model';

export interface FillInBlankQuestion extends Base {
  questionDescription: string;
  correctAnswer: string;
  points: number;
}

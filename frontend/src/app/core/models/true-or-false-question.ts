import { Base } from './base.model';

export interface TrueOrFalseQuestion extends Base {
  questionDescription: string;
  correctAnswer: boolean;
  points: number;
}

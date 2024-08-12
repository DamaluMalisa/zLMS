import { Base } from './base.model';
import { Student } from './student.model';
import { Quiz } from './quiz.model';

export interface QuizAttempt extends Base {
  timestamp: Date;
  student: Student;
  quiz: Quiz;
  score: number;
}

import { Base } from './base.model';
import {Student} from './student.model';
import {QuizSubmission} from './quiz-submission.model';

export interface QuizGrade extends Base {
  student: Student;
  quizSubmission: QuizSubmission;
  grade: number;
  feedback: string;
}

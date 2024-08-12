import { Base } from './base.model';
import {Student} from './student.model';
import {Quiz} from './quiz.model';

export interface QuizSubmission extends Base {
  student: Student;
  quiz: Quiz;
  content: string;
  submissionTimestamp: Date;
}

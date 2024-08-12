import { Base } from './base.model';
import {Student} from './student.model';
import {AssignmentSubmission} from './assignment-submission.model';

export interface AssignmentGrade extends Base {
  student: Student;
  assignmentSubmission: AssignmentSubmission;
  grade: number;
  feedback: string;
}

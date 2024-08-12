import { Base } from './base.model';
import {Student} from './student.model';
import {Assignment} from './assignment.model';

export interface AssignmentSubmission extends Base {
  student: Student;
  assignment: Assignment;
  content: string;
  submissionTimestamp: Date;
}

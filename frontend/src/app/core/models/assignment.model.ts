import { Base } from './base.model';
import { Teacher } from './teacher.model';
import { Subject } from './subject.model';
import {Bundle} from './bundle.model';

export interface Assignment extends Base {
  title: string;
  assignmentContent: string;
  timestamp: Date;
  dueDate: Date;
  availableFrom: Date;
  available: boolean;
  points: number;
  teacher: Teacher;
  subject: Subject;
  bundle: Bundle;
}

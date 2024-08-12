import { Base } from './base.model';
import { Teacher } from './teacher.model';
import { Subject } from './subject.model';
import {Bundle} from './bundle.model';

export interface Quiz extends Base {
  title: string;
  description: string;
  timestamp: Date;
  dueDate: Date;
  availableFrom: Date;
  // totalPoints: number;
  available: boolean;
  teacher: Teacher;
  subject: Subject;
  bundle: Bundle;
}

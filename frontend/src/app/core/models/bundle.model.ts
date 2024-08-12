import { Base } from './base.model';
import { Teacher } from './teacher.model';
import { Subject } from './subject.model';
export interface Bundle extends Base {
  title: string;
  description: string;
  timestamp: string;
  subject: Subject;
  teacher: Teacher;
}

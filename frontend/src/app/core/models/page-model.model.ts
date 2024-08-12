import { Base } from './base.model';
import { Teacher } from './teacher.model';
import { Subject } from './subject.model';
import {Bundle} from './bundle.model';

export interface PageModel extends Base {
  title: string;
  pageContent: string;
  availableFrom: Date;
  available: boolean;
  timestamp: Date;
  teacher: Teacher;
  subject: Subject;
  bundle: Bundle;
}

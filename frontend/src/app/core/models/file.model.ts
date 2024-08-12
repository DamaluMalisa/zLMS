import { Base } from './base.model';
import { Teacher } from './teacher.model';
import { Subject } from './subject.model';
import {Bundle} from './bundle.model';

export interface File extends Base {
  fileName: string;
  contentType: string;
  filePath: string;
  uploadTimestamp: Date;
  subject: Subject;
  teacher: Teacher;
  bundle: Bundle;
}

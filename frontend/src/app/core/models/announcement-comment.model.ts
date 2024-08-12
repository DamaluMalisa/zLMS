import { Base } from './base.model';
import {Student} from './student.model';
import {SubjectAnnouncement} from './subject-announcement.model';

export interface AnnouncementComment extends Base {
  student: Student;
  subjectAnnouncement: SubjectAnnouncement;
  timestamp: Date;
  content: string;
}

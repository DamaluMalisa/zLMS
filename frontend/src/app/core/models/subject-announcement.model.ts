import { Base } from './base.model';
import { Teacher } from './teacher.model';
import { Subject } from './subject.model';
import {AnnouncementComment} from './announcement-comment.model';

export interface SubjectAnnouncement extends Base {
  title: string;
  content: string;
  timestamp: Date;
  teacher: Teacher;
  subject: Subject;
  announcementComments: AnnouncementComment;
}

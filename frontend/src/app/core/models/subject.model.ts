import { Base } from './base.model';
import { getStudyProgramDisplay, StudyProgram } from './study-program.model';
import { Teacher } from './teacher.model';

export interface Subject extends Base {
  name: string;
  description: string;
  status: string;
  tasks: string;
  progress: number;
  startDate: string;
  endDate: string;
  semester: number;
  credits: number;
  ects: number;
  studyProgram: StudyProgram;
  professor: Teacher;
  assistant: Teacher;
}

export function getSubjectDisplay(subject: Subject): string {
  if (!subject) { return ''; }

  return subject.name;
}

export function getSubjectWithStudyProgramDisplay(subject: Subject): string {
  if (!subject) { return ''; }

  return `${subject.name} (${getStudyProgramDisplay(subject.studyProgram)})`;
}

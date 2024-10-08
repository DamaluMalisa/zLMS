import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseComponent } from '../directives/base-component';
import { EntityAttribute } from '../../core/models/entity-attribute.model';
import { Subject } from '../../core/models/subject.model';
import { getStudyProgramDisplay } from '../../core/models/study-program.model';
import { getTeacherDisplay } from '../../core/models/teacher.model';
import { StudyProgramService } from '../../core/services/study-program.service';
import { TeacherService } from '../../core/services/teacher.service';
import { SubjectService } from '../../core/services/subject.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-subjects',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectsComponent extends BaseComponent<Subject> implements OnInit {
  title: string = 'Subjects';
  name: string = 'subject';
  attributes: EntityAttribute[] = [
    {
      key: 'id',
      name: 'ID',
      type: 'id',
    },
    {
      key: 'name',
      name: 'Name',
      type: 'text',
      required: true,
    },
    {
      key: 'description',
      name: 'Description',
      type: 'lob',
      required: true,
    },
    {
      key: 'credits',
      name: 'Credits',
      type: 'number',
      required: true,
    },
    {
      key: 'start-date',
      name: 'Start Date',
      type: 'string',
      required: true,
    },
    {
      key: 'end-date',
      name: 'End Date',
      type: 'string',
      required: true,
    },
    {
      key: 'status',
      name: 'Status',
      type: 'text',
      required: true,
    },
    {
      key: 'semester',
      name: 'Semester',
      type: 'number',
      required: true,
      validators: [Validators.min(1), Validators.max(8)],
      errorMessage: 'Please enter semester between 1 and 8',
    },
    {
      key: 'tasks',
      name: 'Tasks',
      type: 'number',
      required: true,
    },
    {
      key: 'subjects',
      name: 'ECTS',
      type: 'number',
      required: true,
      validators: [Validators.min(1), Validators.max(10)],
      errorMessage: 'Please enter ECTS between 1 and 10',
    },
    {
      key: 'studyProgram',
      name: 'Study program',
      type: 'select',
      required: true,
      display: getStudyProgramDisplay,
    },
    {
      key: 'professor',
      name: 'Professor',
      type: 'select',
      required: true,
      display: getTeacherDisplay,
    },
    {
      key: 'assistant',
      name: 'Assistant',
      type: 'select',
      required: true,
      display: getTeacherDisplay,
    },
  ];

  constructor(
    public override dialog: MatDialog,
    public override service: SubjectService,
    public studyProgramService: StudyProgramService,
    public teacherService: TeacherService
  ) {
    super();
  }

  ngOnInit(): void {
    this.getPage(this.tableData);
    this.getOptions('studyProgram', this.studyProgramService);
    this.getOptions('professor', this.teacherService);
    this.getOptions('assistant', this.teacherService);
  }
}

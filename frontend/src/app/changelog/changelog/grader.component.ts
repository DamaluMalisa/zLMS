import {Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {AssignmentService} from '../../core/services/assignment.service';
import {SubjectService} from '../../core/services/subject.service';
import {DOCUMENT} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Assignment} from '../../core/models/assignment.model';
import {AssignmentSubmissionService} from '../../core/services/assignment-submission.service';
import {AssignmentSubmission} from '../../core/models/assignment-submission.model';
import {SubjectEnrollmentService} from '../../core/services/subject-enrollment.service';
import {SubjectEnrollment} from '../../core/models/subject-enrollment.model';
import {AssignmentGrade} from '../../core/models/assignment-grade.model';
import {AssignmentGradeService} from '../../core/services/assignment-grade.service';
import {Editor} from 'tinymce';
import * as tinymce from 'tinymce';


@Component({
  templateUrl: 'grader.component.html',
  styles: [`

  `]
})

export class GraderComponent {
  constructor(private assignmentService: AssignmentService,
              private assignmentGradeService: AssignmentGradeService,
              private subjectEnrollmentService: SubjectEnrollmentService,
              private assignmentSubmissionService: AssignmentSubmissionService,
              private subjectService: SubjectService,
              private fb: FormBuilder,
              @Inject(DOCUMENT) private document: Document,
              private route: ActivatedRoute,
              public router: Router) {
  }

  assignment: Assignment[];
  assignmentSubmissions: AssignmentSubmission[];
  assignmentGrades: AssignmentGrade[];
  isLoading = true;
  showContent = false;
  subjectEnrollments: SubjectEnrollment[];
  studentHasBeenGraded = false;
  selectedStudentId: number;
  submissionContent: string;
  validateForm: FormGroup;
  isValid: boolean;
  @ViewChild('editor') editor!: Editor;

  public editorConfig = {
    promotion: false,
    license_key: 'gpl',
    readonly: false,
    base_url: '/tinymce',
    suffix: '.min',
    plugins: 'lists link searchreplace media emoticons save insertdatetime autosave image table code help wordcount',
    toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen preview save print | insertfile image media template link anchor codesample | ltr rtl',
    font_formats: 'Arial=arial,helvetica,sans-serif;Comic Sans MS=comic sans ms,sans-serif;Jost=Jost, sans-serif',
    setup: (editor: Editor) => {
      this.editor = editor;
      editor.on('init', () => {
        editor.setContent(this.submissionContent);
      });
    }

  };


  ngOnInit(): void {


    // this.service.getById([this.authService.getStudentId()]).subscribe((data: any[]) => {
    //   this.student = data;
    // });
    const assignmentId = Number(this.route.snapshot.paramMap.get('id'));
    this.assignmentService.getById([assignmentId]).subscribe({
      next: (assignment: Assignment[]) => {
        this.assignment = assignment;
        console.log(this.assignment);
      },
      error: () => {
      },
    });

    this.assignmentGradeService.getByAssignmentIdAll(assignmentId).subscribe((data: AssignmentGrade[]) => {
      this.assignmentGrades = data;
    });


    this.assignmentSubmissionService.getByAssignmentIdAll(assignmentId).subscribe({
      next: (assignmentSubmissions: AssignmentSubmission[]) => {
        this.assignmentSubmissions = assignmentSubmissions;
        console.log('Assignment Submissions:', this.assignmentSubmissions);
        if (this.assignmentSubmissions.length > 0) {
          this.selectedStudentId = this.assignmentSubmissions[0].student.id;
          this.submissionContent = this.assignmentSubmissions[0].content;
        }
      },
      error: () => {
      },
    });

    this.validateForm = this.fb.group({
      grade: [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
      comments: [null, [Validators.required]]
    });


    this.isLoading = false;
    this.showContent = true;
  }

  // hasStudentBeenGraded(studentId: number): boolean {
  //   return this.assignmentGrades.some(
  //     grade => grade.student.id === studentId && grade.assignmentSubmission.assignment.id === this.assignment[0].id
  //   );
  // }

  ngAfterViewInit(): void {
    const subjectId = this.assignment[0].subject.id;
    console.log(subjectId);
    this.subjectEnrollmentService.getBySubjectIdAll(subjectId).subscribe({
      error: () => {
      },
      next: (subjectEnrollments: SubjectEnrollment[]) => {
        this.subjectEnrollments = subjectEnrollments;
        console.log(subjectEnrollments);
        console.log(subjectEnrollments);
      },
    });
    // this.editor.on('init', () => {
    //   this.editor.setContent(this.submissionContent);
    // });

  }

  hasStudentBeenGraded(studentId: number): boolean {
    const hasBeenGraded = this.assignmentGrades.some(
      grade => grade.student.id === studentId && grade.assignmentSubmission.assignment.id === this.assignment[0].id
    );
    console.log(`Student with ID ${studentId} has ${hasBeenGraded ? '' : 'not '}been graded for the assignment.`);
    this.studentHasBeenGraded = hasBeenGraded;
    return hasBeenGraded;
  }


  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }

    if (!this.validateForm.valid) {
      return;
    }
    const formData = this.validateForm.value;
    const assignmentGrade: AssignmentGrade = {
      feedback: formData.comments,
      timestamp: new Date(),
      grade: +formData.grade,
      assignmentSubmission: this.assignmentSubmissions[
        this.assignmentSubmissions.findIndex(submission => {
          return submission.student.id.toString().trim() === this.selectedStudentId.toString().trim();
        })],
      student: this.assignmentSubmissions[
        this.assignmentSubmissions.findIndex(submission => {
          return submission.student.id.toString().trim() === this.selectedStudentId.toString().trim();
        })].student,
    };
    console.log(assignmentGrade);
    this.assignmentGradeService.create(assignmentGrade).subscribe(
      (response) => {
        console.log('Assignment created successfully:', response);
        this.validateForm.reset();
      },
      (error) => {
        console.error('Error creating assignment:', error);
      }
    );

    const currentIndex = this.assignmentSubmissions.findIndex(submission => {
      return submission.student.id.toString().trim() === this.selectedStudentId.toString().trim();
    });

    // Move to next index (loop back to 0 if at the end)
    const nextIndex = (currentIndex + 1) % this.assignmentSubmissions.length;

    // Update selectedStudentId and submissionContent
    this.selectedStudentId = this.assignmentSubmissions[nextIndex].student.id;
    this.submissionContent = this.assignmentSubmissions[nextIndex].content;
  }

  updateContent(selectedId: number): void {
    this.selectedStudentId = selectedId;
    const submissionIndex = this.assignmentSubmissions.findIndex(enrollment => {
      return enrollment.student.id.toString().trim() === selectedId.toString().trim();
    });
    if (submissionIndex !== -1) {
      this.submissionContent = this.assignmentSubmissions[submissionIndex].content;
    } else {
      this.submissionContent = '';
    }
  }

  modelChangeFn(e) {
    this.submissionContent = e;
  }

  // tslint:disable-next-line:typedef
  closeGrader() {
    const assignmentId = this.route.snapshot.paramMap.get('id');
    const subjectId = this.assignment[0].subject.id;
    this.router.navigate(['/pages/subject', subjectId, 'assignment', assignmentId]).then(() => {
      window.location.reload();
    }).catch(error => {
      console.error('Navigation error:', error);
    });
  }
}

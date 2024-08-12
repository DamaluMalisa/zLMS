import { Injectable } from '@angular/core';
import { ExamRealization } from '../models/exam-realization.model';
import { Page } from '../models/rpage.model';
import { SubjectEnrollment } from '../models/subject-enrollment.model';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import {Assignment} from '../models/assignment.model';

@Injectable({
  providedIn: 'root',
})
export class SubjectEnrollmentService extends RestService<SubjectEnrollment> {
   constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/subject-service/subject-enrollments`;
   }

  getBySubjectId(
    id: number,
    params?: any
  ): Observable<Page<SubjectEnrollment>> {
    return this.http.get<Page<SubjectEnrollment>>(`${this.url}/subject/${id}`, {
      params,
    });
  }

  getByStudentId(
    id: number,
    params?: any
  ): Observable<Page<SubjectEnrollment>> {
    return this.http.get<Page<SubjectEnrollment>>(`${this.url}/student/${id}`, {
      params,
    });
  }


  getStudentIdsBySubjectId(subjectId: number): Observable<number[]> {
    return this.http.get<number[]>( `${this.url}/subject/${subjectId}/student-id/all`);
  }

  getBySubjectIdAll(id: number): Observable<SubjectEnrollment[]> {
    return this.http.get<SubjectEnrollment[]>( `${this.url}/subject/${id}/all`);
  }

  updateGrade(
    id: number,
    value: SubjectEnrollment
  ): Observable<SubjectEnrollment> {
    return this.http.patch<SubjectEnrollment>(`${this.url}/${id}/grade`, value);
  }
}

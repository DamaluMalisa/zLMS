import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import {AssignmentGrade} from '../models/assignment-grade.model';
import {Page} from '../models/rpage.model';

@Injectable({
  providedIn: 'root',
})
export class AssignmentGradeService extends RestService<AssignmentGrade> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/subject-service/assignment-grades`;
  }

  getByStudentIdAll(id: number): Observable<AssignmentGrade[]> {
    return this.http.get<AssignmentGrade[]>(`${this.url}/student/${id}/all`);
  }

  getByStudentId(id: number, params?: any): Observable<Page<AssignmentGrade>> {
    return this.http.get<Page<AssignmentGrade>>(`${this.url}/student/${id}`, {
      params,
    });
  }

  getByAssignmentIdAll(id: number): Observable<AssignmentGrade[]> {
    return this.http.get<AssignmentGrade[]>(`${this.url}/assignment/${id}/all`);
  }

  getBySubjectIdAll(id: number): Observable<AssignmentGrade[]> {
    return this.http.get<AssignmentGrade[]>(`${this.url}/subject/${id}/all`);
  }

  getByAssignmentSubmissionIdAll(id: number): Observable<AssignmentGrade[]> {
    return this.http.get<AssignmentGrade[]>(`${this.url}/assignment-submission/${id}/all`);
  }

  getByAssignmentSubmissionId(id: number, params?: any): Observable<Page<AssignmentGrade>> {
    return this.http.get<Page<AssignmentGrade>>(`${this.url}/assignment-submission/${id}`, {
      params,
    });
  }
}

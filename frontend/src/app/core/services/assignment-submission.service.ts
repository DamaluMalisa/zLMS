import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import {AssignmentSubmission} from '../models/assignment-submission.model';
import {Page} from '../models/rpage.model';

@Injectable({
  providedIn: 'root',
})
export class AssignmentSubmissionService extends RestService<AssignmentSubmission> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/subject-service/assignment-submissions`;
  }

  getByStudentIdAll(id: number): Observable<AssignmentSubmission[]> {
    return this.http.get<AssignmentSubmission[]>(`${this.url}/student/${id}/all`);
  }

  getByStudentId(id: number, params?: any): Observable<Page<AssignmentSubmission>> {
    return this.http.get<Page<AssignmentSubmission>>(`${this.url}/student/${id}`, {
      params,
    });
  }

  getByAssignmentIdAll(id: number): Observable<AssignmentSubmission[]> {
    return this.http.get<AssignmentSubmission[]>(`${this.url}/assignment/${id}/all`);
  }

  getByAssignmentId(id: number, params?: any): Observable<Page<AssignmentSubmission>> {
    return this.http.get<Page<AssignmentSubmission>>(`${this.url}/assignment/${id}`, {
      params,
    });
  }
}

import { Injectable } from '@angular/core';
import { ExamTerm } from '../models/exam-term.model';
import { Page } from '../models/rpage.model';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExamTermService extends RestService<ExamTerm> {
   constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/exam-service/exam-terms`;
   }
  getBySubjectIdAll(id: number): Observable<ExamTerm[]> {
    return this.http.get<ExamTerm[]>(`${this.url}/subject/${id}/all`);
  }

  getByTeacherIdAll(id: number): Observable<ExamTerm[]> {
    return this.http.get<ExamTerm[]>(`${this.url}/teacher/${id}/all`);
  }

  getByStudentId(id: number, params?: any): Observable<Page<ExamTerm>> {
    return this.http.get<Page<ExamTerm>>(`${this.url}/student/${id}`, {
      params,
    });
  }
}

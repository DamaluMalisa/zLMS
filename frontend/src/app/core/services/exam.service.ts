import { Injectable } from '@angular/core';
import { Exam } from '../models/exam.model';
import { Page } from '../models/rpage.model';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExamService extends RestService<Exam> {
   constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/exam-service/exams`;
   }
  getBySubjectIdAll(id: number): Observable<Exam[]> {
    return this.http.get<Exam[]>(`${this.url}/subject/${id}/all`);
  }

  getBySubjectId(id: number, params?: any): Observable<Page<Exam>> {
    return this.http.get<Page<Exam>>(`${this.url}/subject/${id}`, {
      params,
    });
  }
}

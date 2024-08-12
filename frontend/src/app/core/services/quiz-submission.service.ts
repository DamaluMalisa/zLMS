import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import {QuizSubmission} from '../models/quiz-submission.model';
import {Page} from '../models/rpage.model';

@Injectable({
  providedIn: 'root',
})
export class QuizSubmissionService extends RestService<QuizSubmission> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/subject-service/quiz-submissions`;
  }

  getByStudentIdAll(id: number): Observable<QuizSubmission[]> {
    return this.http.get<QuizSubmission[]>(`${this.url}/student/${id}/all`);
  }

  getByStudentId(id: number, params?: any): Observable<Page<QuizSubmission>> {
    return this.http.get<Page<QuizSubmission>>(`${this.url}/student/${id}`, {
      params,
    });
  }

  getByQuizIdAll(id: number): Observable<QuizSubmission[]> {
    return this.http.get<QuizSubmission[]>(`${this.url}/quiz/${id}/all`);
  }

  getByQuizId(id: number, params?: any): Observable<Page<QuizSubmission>> {
    return this.http.get<Page<QuizSubmission>>(`${this.url}/quiz/${id}`, {
      params,
    });
  }
}

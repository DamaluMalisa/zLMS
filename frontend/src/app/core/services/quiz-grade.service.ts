import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import {QuizGrade} from '../models/quiz-grade.model';
import {Page} from '../models/rpage.model';

@Injectable({
  providedIn: 'root',
})
export class QuizGradeService extends RestService<QuizGrade> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/subject-service/quiz-grades`;
  }

  getByStudentIdAll(id: number): Observable<QuizGrade[]> {
    return this.http.get<QuizGrade[]>(`${this.url}/student/${id}/all`);
  }

  getByStudentId(id: number, params?: any): Observable<Page<QuizGrade>> {
    return this.http.get<Page<QuizGrade>>(`${this.url}/student/${id}`, {
      params,
    });
  }

  getByQuizSubmissionIdAll(id: number): Observable<QuizGrade[]> {
    return this.http.get<QuizGrade[]>(`${this.url}/quiz-submission/${id}/all`);
  }

  getByQuizSubmissionId(id: number, params?: any): Observable<Page<QuizGrade>> {
    return this.http.get<Page<QuizGrade>>(`${this.url}/quiz-submission/${id}`, {
      params,
    });
  }
}

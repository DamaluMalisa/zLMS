import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RestService } from './rest.service';
import { Quiz } from '../models/quiz.model';
import { Page } from '../models/rpage.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService extends RestService<Quiz> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/assessment-service/quizzes`;
  }

  getByBundleIdAll(id: number): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(`${this.url}/bundle/${id}/all`);
  }

  getByBundleId(id: number, params?: any): Observable<Page<Quiz>> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        httpParams = httpParams.set(key, params[key]);
      });
    }
    return this.http.get<Page<Quiz>>(`${this.url}/bundle/${id}`, {
      params: httpParams,
    });
  }

  getBySubjectIdAll(id: number): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(`${this.url}/subject/${id}/all`);
  }

  getBySubjectId(id: number, params?: any): Observable<Page<Quiz>> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        httpParams = httpParams.set(key, params[key]);
      });
    }
    return this.http.get<Page<Quiz>>(`${this.url}/subject/${id}`, {
      params: httpParams,
    });
  }

  addMultipleChoiceQuestionToQuiz(quizId: number, questionId: number, order: number): Observable<void> {
    return this.http.post<void>(`${this.url}/${quizId}/multiple-choice/${questionId}`, null, {
      params: new HttpParams().set('order', order.toString()),
    });
  }

  addTrueOrFalseQuestionToQuiz(quizId: number, questionId: number, order: number): Observable<void> {
    return this.http.post<void>(`${this.url}/${quizId}/true-or-false/${questionId}`, null, {
      params: new HttpParams().set('order', order.toString()),
    });
  }

  addFillInBlankQuestionToQuiz(quizId: number, questionId: number, order: number): Observable<void> {
    return this.http.post<void>(`${this.url}/${quizId}/fill-in-blank/${questionId}`, null, {
      params: new HttpParams().set('order', order.toString()),
    });
  }
}

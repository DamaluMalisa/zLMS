import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { QuestionAnswer } from '../models/question-answer.model';
import { Observable } from 'rxjs';
import { Page } from '../models/rpage.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionAnswerService extends RestService<QuestionAnswer> {
   constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/assessment-service/question-answers`;
}
processQuestionAnswer(quizAttemptId: number, questionAssignmentId: number, studentAnswer: string): Observable<QuestionAnswer> {
  const endpoint = `${this.url}/process-question-answer/${quizAttemptId}/${questionAssignmentId}`;
  return this.http.post<QuestionAnswer>(endpoint, studentAnswer, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
  }
  getByQuizAttemptIdAll(id: number): Observable<QuestionAnswer[]> {
    return this.http.get<QuestionAnswer[]>(`${this.url}/quiz-attempt/${id}/all`);
  }

  getByQuizAttemptId(id: number, params?: any): Observable<Page<QuestionAnswer>> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        httpParams = httpParams.set(key, params[key]);
      });
    }
    return this.http.get<Page<QuestionAnswer>>(`${this.url}/quiz-attempt/${id}`, {
      params: httpParams,
    });
  }
}


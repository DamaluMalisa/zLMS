import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuizAttempt } from '../models/quiz-attempt.model';
import { RestService } from './rest.service';
import { Page } from '../models/rpage.model';
import { QuestionAnswer } from '../models/question-answer.model';

@Injectable({
  providedIn: 'root'
})
  export class QuizAttemptService extends RestService<QuizAttempt> {
    constructor(httpClient: HttpClient) {
      super(httpClient);
      this.url = `${this.url}/assessment-service/quiz-attempts`;
    }

  startQuizAttempt(studentId: number, quizId: number): Observable<QuizAttempt> {
    return this.http.post<QuizAttempt>(`${this.url}/start/${studentId}/${quizId}`, { studentId, quizId });
  }


  getByStudent(id: number): Observable<QuizAttempt[]> {
    return this.http.get<QuizAttempt[]>(`${this.url}/student/${id}`);
  }

  getByQuizIdAll(id: number): Observable<QuizAttempt[]> {
    return this.http.get<QuizAttempt[]>(`${this.url}/quiz/${id}/all`);
  }

 
  getByQuizId(id: number, params?: any): Observable<Page<QuizAttempt>> {
    return this.http.get<Page<QuizAttempt>>(`${this.url}/quiz/${id}`, {
      params,
    });
  }
}

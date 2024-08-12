import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RestService } from './rest.service';
import { QuestionAssignment } from '../models/question-assignment.model';
import { Page } from '../models/rpage.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionAssignmentService extends RestService<QuestionAssignment> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/assessment-service/question-assignments`;
  }

  getByQuizIdAll(quizId: number): Observable<QuestionAssignment[]> {
    return this.http.get<QuestionAssignment[]>(`${this.url}/quiz/${quizId}/all`);
  }

  getByQuizId(id: number, params?: any): Observable<Page<QuestionAssignment>> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        httpParams = httpParams.set(key, params[key]);
      });
    }
    return this.http.get<Page<QuestionAssignment>>(`${this.url}/quiz/${id}`, {
      params: httpParams,
    });
  }

}

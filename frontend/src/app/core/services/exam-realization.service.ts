import { Injectable } from '@angular/core';
import { ExamRealization } from '../models/exam-realization.model';
import { Page } from '../models/rpage.model';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExamRealizationService extends RestService<ExamRealization> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/exam-service/exam-periods`;
  }

  getByExamTermIdAllPdf(id: number): Observable<Blob> {
    return this.http.get(`${this.url}/exam-term/${id}/all/pdf`, {
      responseType: 'blob',
    });
  }

  getByExamTermId(id: number, params?: any): Observable<Page<ExamRealization>> {
    return this.http.get<Page<ExamRealization>>(`${this.url}/exam-term/${id}`, {
      params,
    });
  }

  getByStudentId(id: number, params?: any): Observable<Page<ExamRealization>> {
    return this.http.get<Page<ExamRealization>>(`${this.url}/student/${id}`, {
      params,
    });
  }

  createByExamTermId(id: number[]): Observable<ExamRealization[]> {
    return this.http.post<ExamRealization[]>(`${this.url}/exam-term/${id}`, {});
  }

  updateScore(id: number, value: ExamRealization): Observable<ExamRealization> {
    return this.http.patch<ExamRealization>(`${this.url}/${id}/score`, value);
  }

  updateScoreByExamTermId(
    id: number,
    value: string
  ): Observable<ExamRealization[]> {
    return this.http.patch<ExamRealization[]>(
      `${this.url}/exam-term/${id}/score`,
      value,
      {
        headers: {
          'Content-Type': 'application/xml',
        },
      }
    );
  }
}

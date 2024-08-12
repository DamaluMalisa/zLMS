import { Injectable } from '@angular/core';
import { ExamPeriod } from '../models/exam-period.model';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExamPeriodService extends RestService<ExamPeriod> {
   constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/exam-service/exam-periods`;
}}

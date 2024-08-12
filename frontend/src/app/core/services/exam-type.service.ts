import { Injectable } from '@angular/core';
import { ExamType } from '../models/exam-type.model';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExamTypeService extends RestService<ExamType> {
   constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/exam-service/exam-types`;
}}

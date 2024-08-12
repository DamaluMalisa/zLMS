import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { FillInBlankQuestion } from '../models/fill-in-blank-question'; 
@Injectable({
  providedIn: 'root',
})
export class FillInBlankQuestionService extends RestService<FillInBlankQuestion> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/assessment-service/fill-in-blank-questions`;
  }
}

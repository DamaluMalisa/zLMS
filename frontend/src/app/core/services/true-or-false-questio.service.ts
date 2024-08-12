import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { TrueOrFalseQuestion } from '../models/true-or-false-question';
@Injectable({
  providedIn: 'root',
})
export class TrueOrFalseQuestionService extends RestService<TrueOrFalseQuestion> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/assessment-service/true-or-false-questions`;
  }
}

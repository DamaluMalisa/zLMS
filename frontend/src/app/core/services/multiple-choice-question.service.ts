import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { MultipleChoiceQuestion } from '../models/multiple-choice-question';

@Injectable({
  providedIn: 'root',
})
export class MultipleChoiceQuestionService extends RestService<MultipleChoiceQuestion> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/assessment-service/multiple-choice-questions`;
  }
}

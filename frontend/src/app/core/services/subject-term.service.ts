import { Injectable } from '@angular/core';
import { Page } from '../models/rpage.model';
import { SubjectTerm } from '../models/subject-term.model';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SubjectTermService extends RestService<SubjectTerm> {
   constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/subject-service/subject-terms`;
   }

  getBySubjectIdAll(id: number): Observable<SubjectTerm[]> {
    return this.http.get<SubjectTerm[]>(`${this.url}/subject/${id}/all`);
  }

  getBySubjectId(id: number, params?: any): Observable<Page<SubjectTerm>> {
    return this.http.get<Page<SubjectTerm>>(`${this.url}/subject/${id}`, {
      params,
    });
  }
}

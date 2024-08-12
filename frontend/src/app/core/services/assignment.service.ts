import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import {Assignment} from '../models/assignment.model';
import {Page} from '../models/rpage.model';

@Injectable({
  providedIn: 'root',
})
export class AssignmentService extends RestService<Assignment> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/subject-service/assignments`;
  }

  getByBundleIdAll(id: number): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${this.url}/bundle/${id}/all`);
  }

  getByBundleId(id: number, params?: any): Observable<Page<Assignment>> {
    return this.http.get<Page<Assignment>>(`${this.url}/bundle/${id}`, {
      params,
    });
  }

  getBySubjectIdAll(id: number): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${this.url}/subject/${id}/all`);
  }

  getBySubjectId(id: number, params?: any): Observable<Page<Assignment>> {
    return this.http.get<Page<Assignment>>(`${this.url}/subject/${id}`, {
      params,
    });
  }
}

import { Injectable } from '@angular/core';
import { Thesis } from '../models/thesis.model';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ThesisService extends RestService<Thesis> {
   constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/faculty-service/theses`;
   }

  getByStudentId(id: number): Observable<Thesis> {
    return this.http.get<Thesis>(`${this.url}/student/${id}`);
  }
}

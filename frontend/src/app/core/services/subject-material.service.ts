import { Injectable } from '@angular/core';
import { Page } from '../models/rpage.model';
import { SubjectMaterial } from '../models/subject-material.model';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SubjectMaterialService extends RestService<SubjectMaterial> {
   constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/subject-service/subject-materials`;
   }

  getBySubjectIdAll(id: number): Observable<SubjectMaterial[]> {
    return this.http.get<SubjectMaterial[]>(`${this.url}/subject/${id}/all`);
  }

  getBySubjectId(id: number, params?: any): Observable<Page<SubjectMaterial>> {
    return this.http.get<Page<SubjectMaterial>>(`${this.url}/subject/${id}`, {
      params,
    });
  }
}

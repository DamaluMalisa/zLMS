import { Injectable } from '@angular/core';
import { Subject } from '../models/subject.model';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SubjectService extends RestService<Subject> {
   constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/subject-service/subjects`;
   }

  getByStudyProgramId(id: number): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.url}/study-program/${id}/all`);
  }

  getByTeacherId(id: number): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.url}/teacher/${id}/all`);
  }

  getByStudentId(id: number): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.url}/student/${id}/all`);
  }

  updateSyllabus(id: number, syllabus: string): Observable<Subject> {
    return this.http.patch<Subject>(`${this.url}/${id}/syllabus`, syllabus);
  }
}

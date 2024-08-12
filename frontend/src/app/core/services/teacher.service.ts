import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher.model';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TeacherService extends RestService<Teacher> {
   constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/faculty-service/teachers`;
   }

  getAllXml(): Observable<string> {
    return this.http.get(`${this.url}/all`, {
      headers: { Accept: 'application/xml' },
      responseType: 'text',
    });
  }

  getAllPdf(): Observable<Blob> {
    return this.http.get(`${this.url}/all/pdf`, { responseType: 'blob' });
  }
}

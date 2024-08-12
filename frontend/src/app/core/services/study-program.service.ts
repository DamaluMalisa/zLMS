import { Injectable } from '@angular/core';
import { StudyProgram } from '../models/study-program.model';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudyProgramService extends RestService<StudyProgram> {
   constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/faculty-service/study-programs`;
   }
  getByFacultyId(id: number): Observable<StudyProgram[]> {
    return this.http.get<StudyProgram[]>(`${this.url}/faculty/${id}/all`);
  }
}

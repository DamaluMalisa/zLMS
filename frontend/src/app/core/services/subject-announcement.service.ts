import { Injectable } from '@angular/core';
import { Page } from '../models/rpage.model';
import { SubjectAnnouncement } from '../models/subject-announcement.model';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SubjectAnnouncementService extends RestService<SubjectAnnouncement> {
   constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/subject-service/subject-announcements`;
   }

  getBySubjectIdAll(id: number): Observable<SubjectAnnouncement[]> {
    return this.http.get<SubjectAnnouncement[]>(
      `${this.url}/subject/${id}/all`
    );
  }

  getBySubjectId(
    id: number,
    params?: any
  ): Observable<Page<SubjectAnnouncement>> {
    return this.http.get<Page<SubjectAnnouncement>>(
      `${this.url}/subject/${id}`,
      {
        params,
      }
    );
  }
}

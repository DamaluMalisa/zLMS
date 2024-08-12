import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import {AnnouncementComment} from '../models/announcement-comment.model';
import {Page} from '../models/rpage.model';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementCommentService extends RestService<AnnouncementComment> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/subject-service/assignment`;
  }

  getBySubjectAnnouncementIdAll(id: number): Observable<AnnouncementComment[]> {
    return this.http.get<AnnouncementComment[]>(`${this.url}/subject-announcement/${id}/all`);
  }

  getBySubjectAnnouncementId(id: number, params?: any): Observable<Page<AnnouncementComment>> {
    return this.http.get<Page<AnnouncementComment>>(`${this.url}/subject-announcement/${id}`, {
      params,
    });
  }
}

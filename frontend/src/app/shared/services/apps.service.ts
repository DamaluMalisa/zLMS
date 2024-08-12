import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from '../interfaces/chat.type';
import { Files } from '../interfaces/file-manager.type';
import { Mail } from '../interfaces/mail.type';
import { ProjectList } from '../interfaces/project-list.type';
import { ContactGrid } from '../interfaces/contacts-grid.type';

@Injectable({
  providedIn: 'root'
})
export class AppsService {
  constructor(private http: HttpClient) {}

  public getChatJSON(): Observable<Chat[]> {
    return this.http.get<Chat[]>('./assets/data/apps/chat-data.json');
  }

  public getFileManagerJson(): Observable<Files[]> {
    return this.http.get<Files[]>('./assets/data/apps/file-manager-data.json');
  }

  public getMailJson(): Observable<Mail[]> {
    return this.http.get<Mail[]>('./assets/data/apps/mail-data.json');
  }

  public getReadMailJson(): Observable<Mail[]> {
    return this.http.get<Mail[]>('./assets/data/apps/read-email.json');
  }

  public getProjectListJson(): Observable<ProjectList[]> {
    return this.http.get<ProjectList[]>('./assets/data/apps/project-list-data.json');
  }
  public getContactGridJson(): Observable<ContactGrid[]> {
    return this.http.get<ContactGrid[]>('./assets/data/apps/contacts.json');
  }
}

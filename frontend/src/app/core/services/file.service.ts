import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { File } from '../models/file.model';
import {Page} from '../models/rpage.model';

@Injectable({
  providedIn: 'root',
})
export class FileService extends RestService<File> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/subject-service/files`;
  }

  uploadFile(file: any): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name); // 'file' is the key, and file is the value
    return this.http.post<string>(`${this.url}/upload`, formData);
  }

  // uploadFile(file: File): Observable<any> {
  //   const formData: FormData = new FormData();
  //   formData.append('file', file, file.name); // 'file' is the key, and file is the value
  //
  //   // Make sure to replace the URL with your server endpoint
  //   return this.http.post<any>('http://localhost:8080/api/upload', formData);
  // }

  downloadFile(id: number): Observable<Blob> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/octet-stream',
      Accept: 'application/octet-stream',
    });

    return this.http.get(`${this.url}/download/${id}`, {
      responseType: 'blob',
      headers,
    });
  }
  getByUserIdAll(id: number): Observable<File[]> {
    return this.http.get<File[]>(`${this.url}/user/${id}/all`);
  }

  // getBySubjectId(id: number, params?: any): Observable<Page<File>> {
  //   return this.http.get<Page<File>>(`${this.url}/subject/${id}`, {
  //     params,
  //   });
  // }
  //
  // getByBundleIdAll(id: number): Observable<File[]> {
  //   return this.http.get<File[]>(`${this.url}/bundle/${id}/all`);
  // }
  //
  // getByBundleId(id: number, params?: any): Observable<Page<File>> {
  //   return this.http.get<Page<File>>(`${this.url}/bundle/${id}`, {
  //     params,
  //   });
  // }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import {PageModel} from '../models/page-model.model';
import {Page} from '../models/rpage.model';

@Injectable({
  providedIn: 'root',
})
export class PageModelService extends RestService<PageModel> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/subject-service/pages`;
  }

  getByBundleIdAll(id: number): Observable<PageModel[]> {
    return this.http.get<PageModel[]>(`${this.url}/bundle/${id}/all`);
  }

  getByBundleId(id: number, params?: any): Observable<Page<PageModel>> {
    return this.http.get<Page<PageModel>>(`${this.url}/bundle/${id}`, {
      params,
    });
  }

  getBySubjectIdAll(id: number): Observable<PageModel[]> {
    return this.http.get<PageModel[]>(`${this.url}/subject/${id}/all`);
  }

  getBySubjectId(id: number, params?: any): Observable<Page<PageModel>> {
    return this.http.get<Page<PageModel>>(`${this.url}/subject/${id}`, {
      params,
    });
  }
}

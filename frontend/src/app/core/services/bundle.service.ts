import { Injectable } from '@angular/core';
import { Subject } from '../models/subject.model';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import {Bundle} from '../models/bundle.model';
import {Page} from '../models/rpage.model';

@Injectable({
    providedIn: 'root',
})
export class BundleService extends RestService<Bundle> {
    constructor(httpClient: HttpClient) {
        super(httpClient);
        this.url = `${this.url}/subject-service/bundles`;
    }

    getBySubjectIdAll(id: number): Observable<Bundle[]> {
        return this.http.get<Bundle[]>(`${this.url}/subject/${id}/all`);
    }

    getBySubjectId(id: number, params?: any): Observable<Page<Bundle>> {
        return this.http.get<Page<Bundle>>(`${this.url}/subject/${id}`, {
            params,
        });
    }

    getByTeacherIdAll(id: number): Observable<Bundle[]> {
        return this.http.get<Bundle[]>(`${this.url}/teacher/${id}/all`);
    }

}

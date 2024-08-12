import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService extends RestService<User> {
   constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/auth-service/users`;
   }

  getIdByUsername(username: string): Observable<number> {
    return this.http.get<number>(`${this.url}/username/${username}/id`);
  }
}

import { Injectable } from '@angular/core';
import { Administrator } from '../models/administrator.model';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdministratorService extends RestService<Administrator> {
   constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/faculty-service/administrators`;
}}

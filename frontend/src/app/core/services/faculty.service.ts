import { Injectable } from '@angular/core';
import { Faculty } from '../models/faculty.model';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FacultyService extends RestService<Faculty> {
   constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/faculty-service/faculties`;
}}

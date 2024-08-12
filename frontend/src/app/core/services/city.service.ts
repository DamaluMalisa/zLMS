import { Injectable } from '@angular/core';
import { City } from '../models/city.model';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CityService extends RestService<City> {
   constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/faculty-service/cities`;
}}

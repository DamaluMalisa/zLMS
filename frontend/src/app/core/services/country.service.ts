import { Injectable } from '@angular/core';
import { Country } from '../models/country.model';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountryService extends RestService<Country> {
   constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/faculty-service/countries`;
}}

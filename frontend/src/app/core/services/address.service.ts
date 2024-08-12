import { Injectable } from '@angular/core';
import { Address } from '../models/address.model';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AddressService extends RestService<Address> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = `${this.url}/faculty-service/addresses`;
  }
}

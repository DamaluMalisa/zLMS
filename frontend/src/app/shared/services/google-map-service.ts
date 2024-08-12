import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {
  private apiLoaded$: Observable<boolean>;

  constructor(private httpClient: HttpClient) {}

  loadAPI(apiKey: string): Observable<boolean> {
    if (!this.apiLoaded$) {
      const scriptSrc = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      this.apiLoaded$ = from(
        new Promise<boolean>((resolve) => {
          const scriptElement = document.createElement('script');
          scriptElement.src = scriptSrc;
          scriptElement.onload = () => resolve(true);
          document.body.appendChild(scriptElement);
        })
      ).pipe(
        map(() => true),
        shareReplay(1)
      );
    }
    return this.apiLoaded$;
  }
}

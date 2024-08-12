import { Component, OnInit } from '@angular/core';
import { GoogleMapsService } from 'src/app/shared/services/google-map-service';

@Component({
  selector: 'google-maps-basic',
  template:`
    <div id="map-basic" class="h-[400px]"></div>
  `,
})
export class BasicGoogleMapsComponent implements OnInit  {
  constructor(private googleMapsService: GoogleMapsService) {}

  ngOnInit() {
    this.googleMapsService.loadAPI('AIzaSyBgYKHZB_QKKLWfIRaYPCadza3nhTAbv7c').subscribe((apiLoaded) => {
      if (apiLoaded) {
        this.initializeMap();
      }
    });
  }

  initializeMap() {
    // Initialize your map here
    const map = new google.maps.Map(document.getElementById('map-basic'), {
      center: { lat: 24, lng: 12 },
      zoom: 4
    });
    // Add map markers, polygons, or any other map-related logic
  }
}

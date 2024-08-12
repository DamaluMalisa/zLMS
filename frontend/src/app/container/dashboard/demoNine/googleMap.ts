import { Component, OnInit } from '@angular/core';
import { GoogleMapsService } from 'src/app/shared/services/google-map-service';
import items from '../../../../assets/data/global/dropdown.json';

@Component({
  selector: 'nz-google-map-mini',
  template: `
  <div class="bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10 relative h-full">
      <div class="px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto">
        <h1 class="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-white/[.87]">Location</h1>
        <a nz-dropdown nzTrigger="click" [nzDropdownMenu]="menu">
            <svg-icon class=" text-light dark:text-white/60 dark:group-hover:text-white/[.87] w-[24px] h-[24px] [&>svg]:w-[24px] [&>svg]:h-[24px]" src="assets/images/svg/feather/more-horizontal.svg"></svg-icon>
          </a>
          <nz-dropdown-menu #menu="nzDropdownMenu">
            <ul class="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4 capitalize" nz-menu nzSelectable>
              <li *ngFor="let items of appItems" class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87]" nz-menu-item>
                <svg-icon class="text-current w-3.5 h-3.5 me-2 [&>svg]:w-full [&>svg]:h-full" src="assets/images/svg/feather/{{items.icon}}.svg"></svg-icon>
                {{items.name}}
              </li>
            </ul>
          </nz-dropdown-menu>
      </div>
      <div class="px-[25px] pb-[28px]">
        <div id="map-basic" class="h-[220px]"></div>
      </div>
    </div>
  `,
})

export class googleMapMiniComponent implements OnInit  {
  appItems = items.appItems;

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

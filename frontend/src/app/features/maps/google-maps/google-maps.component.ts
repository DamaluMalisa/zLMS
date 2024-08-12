import { Component } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
})
export class GoogleMapsComponent {
  isLoading = true;
  showContent = false;

  ngOnInit() {
    // Simulate loading time
    this.loadData();
  }
  loadData() {
    // Simulate an asynchronous data loading operation
    setTimeout(() => {
      this.isLoading = false;
      this.showContent = true;
    }, 500);
  }
}

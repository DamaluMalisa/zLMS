import { Component } from '@angular/core';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
})
export class BannerComponent {
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

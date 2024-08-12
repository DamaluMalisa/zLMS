import { Component } from '@angular/core';

@Component({
  selector: 'app-view-support',
  templateUrl: './view-support.component.html',
})

export class ViewSupportComponent {
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

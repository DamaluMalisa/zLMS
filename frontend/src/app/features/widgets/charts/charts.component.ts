import { Component } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
})
export class ChartsComponent {
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

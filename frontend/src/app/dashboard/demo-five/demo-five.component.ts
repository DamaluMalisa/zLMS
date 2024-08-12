import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-five',
  templateUrl: './demo-five.component.html',
})
export class DemoFiveComponent {
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

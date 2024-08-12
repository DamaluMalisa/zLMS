import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  preserveWhitespaces: false,
  templateUrl: './calendar.component.html'
})
export class CalendarComponent {
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

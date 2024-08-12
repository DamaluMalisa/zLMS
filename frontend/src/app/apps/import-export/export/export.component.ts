import { Component } from '@angular/core';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
})
export class ExportComponent {
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

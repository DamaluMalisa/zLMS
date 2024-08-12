
import { Component } from '@angular/core';
@Component({
  templateUrl: './layouts.component.html',
})

export class LayoutComponent{
  isLoading = true;
  showContent = false;
  passwordVisible = false;
  password?: string;

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

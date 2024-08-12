import { Component } from '@angular/core';

@Component({
    templateUrl: './project-details.component.html',
})

export class ProjectDetailsComponent  {
  isLoading = true;
  showContent = false;

  ngOnInit(): void {
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

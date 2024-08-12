import { Component } from '@angular/core';

@Component({
  selector: 'app-all-article',
  templateUrl: './all-article.component.html',
})
export class AllArticleComponent {
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

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-blog-four',
  templateUrl: './blog-details.component.html'
})
export class BlogDetailsComponent {
  isLoading = true;
  showContent = false;
  isShareGroupVisible = false;


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

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= 700) {
      this.isShareGroupVisible = true;
    } else {
      this.isShareGroupVisible = false;
    }
  }
}

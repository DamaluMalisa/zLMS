import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-two',
  templateUrl: './blog-two.component.html'
})
export class BlogTwoComponent implements OnInit {
  isLoading = true;
  showContent = false;
  BlogCardData: any[]; // Store the cards data
  blankUrl: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Simulate loading time
    this.loadData();
    // Fetch the cards data from the server
    this.http.get<any>('../../../assets/data/pages/blog-data.json').subscribe(data => {
      this.BlogCardData = data.BlogCardData;
    });
  }
  loadData() {
    // Simulate an asynchronous data loading operation
    setTimeout(() => {
      this.isLoading = false;
      this.showContent = true;
    }, 500);
  }
}

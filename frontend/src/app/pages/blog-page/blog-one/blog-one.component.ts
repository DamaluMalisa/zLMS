import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-one',
  templateUrl: './blog-one.component.html',
})
export class BlogOneComponent implements OnInit {
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

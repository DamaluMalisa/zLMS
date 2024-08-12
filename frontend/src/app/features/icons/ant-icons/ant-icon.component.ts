import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  templateUrl: './ant-icon.component.html',
})

export class AntIconComponent implements OnInit {
  isLoading = true;
  showContent = false;
  faIcons: string[] = [];
  antdIcons: string[] = [];

  constructor(private http: HttpClient) { }
  ngOnInit() {
    // Simulate loading time
    this.loadData();
    this.loadIcons();
  }
  loadData() {
    // Simulate an asynchronous data loading operation
    setTimeout(() => {
      this.isLoading = false;
      this.showContent = true;
    }, 500);
  }
  loadIcons() {
    this.http.get<any>('assets/data/icons/ant.json').subscribe(data => {
      this.antdIcons = data.antdIcons;
    });
  }

}

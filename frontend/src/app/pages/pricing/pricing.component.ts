import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
})
export class PricingComponent implements OnInit {
  isLoading = true;
  showContent = false;
  pricing: any[]; // Store the cards data

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Simulate loading time
    this.loadData();
    // Fetch the cards data from the server
    this.http.get<any>('../../../assets/data/pages/pricing.json').subscribe(data => {
      this.pricing = data.pricing;
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

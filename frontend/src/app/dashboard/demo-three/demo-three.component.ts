import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-three',
  templateUrl: './demo-three.component.html',
})
export class DemoThreeComponent {
  isLoading = true;
  showContent = false;

  textColor: string = 'text-white';
  rounded: string = 'rounded-full';
  bgColor: string = '';

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

  // Value
}

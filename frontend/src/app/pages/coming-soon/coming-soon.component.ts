import { Component  } from '@angular/core';
import { DatePipe } from '@angular/common'; // Import DatePipe

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
})
export class ComingSoonComponent {
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  targetDate = new Date('2023-06-30T00:00:00');

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    setInterval(() => {
      const now = new Date().getTime();
      const difference = this.targetDate.getTime() - now;

      this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
    }, 1000);
  }

  // current year
   //Current Year
   currentYear: number;
   constructor(private datePipe: DatePipe) {
     this.currentYear = new Date().getFullYear();
   }
}

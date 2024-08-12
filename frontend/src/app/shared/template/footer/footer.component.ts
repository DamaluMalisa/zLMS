import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})

export class FooterComponent{
   //Current Year
   currentYear: number;
   constructor(private datePipe: DatePipe) {
     this.currentYear = new Date().getFullYear();
   }
}

import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { TicketTableComponent } from '../support/ticketTable';

@Component({
  selector: 'app-add-support',
  templateUrl: './add-support.component.html',
})

export class AddSupportComponent implements AfterViewInit {
  @ViewChild(TicketTableComponent) ticketTableComponent!: TicketTableComponent;

  constructor() {}

  ngAfterViewInit(): void {
    // Automatically show the modal when the view is initialized
    this.showModal();
  }

  showModal(): void {
    // Show the modal of the child component (TicketTableComponent)
    if (this.ticketTableComponent) {
      this.ticketTableComponent.createTplModal(
        this.ticketTableComponent.tplTitle,
        this.ticketTableComponent.tplContent,
        this.ticketTableComponent.tplFooter
      );
    }
  }
}

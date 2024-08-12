import { Component, TemplateRef,ViewChild,OnInit  } from '@angular/core';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { AppsService } from '../../../shared/services/apps.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ContactGrid } from '../../../shared/interfaces/contacts-grid.type';
import { TableService } from '../../../shared/services/table.service';

@Component({
    templateUrl: './contact-list.component.html',
    styles: [`
     ::ng-deep .ant-modal-content .ant-modal-close{
          @apply bg-transparent text-primary dark:bg-primary;
        }
    `]
})

export class ContactListComponent implements OnInit   {
    allChecked:boolean = false;
    indeterminate:boolean = false;
    view: string = 'cardView';
    newProject: boolean = false;
    ContactGridRaw: ContactGrid[];
    ContactGrid: ContactGrid[];
    searchInput: string;
    isLoading = true;
    showContent = false;
    startValue: Date | null = null;
    endValue: Date | null = null;

    constructor (private ContactGridSvc: AppsService, private modalService: NzModalService, private tablesvc : TableService) {}

    ngOnInit(): void {
        this.ContactGridSvc.getContactGridJson().subscribe(data => {
            this.ContactGridRaw = data;
            this.ContactGrid = data;
        })
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

    search() {
        const data = this.ContactGridRaw
        this.ContactGrid = this.tablesvc.search(this.searchInput, data )
    }

    showNewContact(newContactContent: TemplateRef<{}>) {
      const modal = this.modalService.create({
          nzTitle: 'Contact Information',
          nzContent: newContactContent,
          nzFooter: [
              {
                  label: 'Add New Contact',
                  type: 'primary',
                  onClick: () => this.modalService.confirm(
                      {
                          nzTitle: 'Are you sure you want to create this project?',
                          nzOnOk: () => this.modalService.closeAll()
                      }
                  )
              },
          ],
          nzWidth: 620
      })
  }

    // Checkbox
    log(value: string[]): void {
      console.log(value);
    }

    // Calendar
    @ViewChild('endDatePicker') endDatePicker!: NzDatePickerComponent;
    disabledStartDate = (startValue: Date): boolean => {
      if (!startValue || !this.endValue) {
        return false;
      }
      return startValue.getTime() > this.endValue.getTime();
    };

    disabledEndDate = (endValue: Date): boolean => {
      if (!endValue || !this.startValue) {
        return false;
      }
      return endValue.getTime() <= this.startValue.getTime();
    };

    handleStartOpenChange(open: boolean): void {
      if (!open) {
        this.endDatePicker.open();
      }
      console.log('handleStartOpenChange', open);
    }

    handleEndOpenChange(open: boolean): void {
      console.log('handleEndOpenChange', open);
    }
    updateAllChecked(): void {
      this.indeterminate = false;
      if (this.allChecked) {
          this.ContactGrid.forEach(item => item.checked = true);
      } else {
          this.ContactGrid.forEach(item => item.checked = false);
      }
  }

  updateSingleChecked(): void {
      if (this.ContactGrid.every(item => item.checked === false)) {
          this.allChecked = false;
          this.indeterminate = false;
      } else if (this.ContactGrid.every(item => item.checked === true)) {
          this.allChecked = true;
          this.indeterminate = false;
      } else {
          this.indeterminate = true;
      }
  }
}

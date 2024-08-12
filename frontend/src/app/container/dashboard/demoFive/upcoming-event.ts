import { Component,Input, OnInit,ElementRef } from '@angular/core';
import tableData  from '../../../../assets/data/pages/table-data.json';
import { NzModalService } from 'ng-zorro-antd/modal';
import { EditModalComponent } from './EditModalComponent';
@Component({
  selector: 'nz-upcomingEvent',
  template: `
    <div class="bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10 relative ">
  <div
    class="px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto max-sm:mb-[15px]">
    <h1
      class="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-white/[.87]">
      Upcoming Events</h1>
    <div class="py-[16px] flex items-center gap-[15px]">
      <ul class="flex items-center mb-0">
        <li>
          <button type="button"
            [class]="sellingTab === 'today' ? 'inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md' : 'inline-flex items-center px-3 h-8 text-light dark:text-white/60 hover:text-primary text-13'"
            (click)="handleClick('today')">
            Today
          </button>
        </li>
        <li>
          <button type="button"
            [class]="sellingTab === 'week' ? 'inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md' : 'inline-flex items-center px-3 h-8 text-light dark:text-white/60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'"
            (click)="handleClick('week')">
            Week
          </button>
        </li>
        <li>
          <button type="button"
            [class]="sellingTab === 'month' ? 'inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md' : 'inline-flex items-center px-3 h-8 text-light dark:text-white/60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'"
            (click)="handleClick('month')">
            Month
          </button>
        </li>
      </ul>
    </div>
  </div>
  <div class="px-[25px] pt-0 pb-[25px] min-h-[337px]">
    <div *ngFor="let tab of tabData" [class.hidden]="sellingTab !== tab.key">
      <div class="overflow-x-auto w-full">
      <nz-table [nzData]="upcomingEvent[tab.key]" [nzFrontPagination]="false" [nzShowPagination]="false" class="text-sm rounded-[5px] max-xl:whitespace-nowrap">
        <tbody class="bg-white dark:bg-[#1b1d2a]">
          <tr *ngFor="let product of upcomingEvent[tab.key]; let i = index" class="group">
            <td class="ps-0 pe-4 py-2.5 text-start last:text-end text-dark dark:text-white/[.87] group-hover:bg-transparent text-15 font-medium border-none before:hidden rounded-s-[4px]">
              <div class="flex items-center gap-[15px]">
                <div class="bg-{{product.type}} flex items-center justify-center flex-col text-white min-w-[60px] h-[60px] px-[10px] rounded-6 text-15 font-medium">
                  <span>{{product.date}}</span>
                  <span>{{product.month}}</span>
                </div>
                <article>
                  <h4 class="text-15 font-normal mb-[2px] text-dark dark:text-white/[.87] duration-300 ease-in-out transition">{{product.title}}</h4>
                  <p class="text-14 text-light dark:text-white/60">{{product.time}}</p>
                </article>
              </div>
            </td>
            <td class="ps-4 pe-0 py-2.5 font-normal last:text-end capitalize text-[14px] text-dark dark:text-white/[.87] border-none group-hover:bg-transparent rounded-e-[4px]">
              <ul class="flex items-center justify-end p-0 m-0 gap-[15px]">
                <li>
                  <button nz-button class="border-none shadow-none bg-transparent outline-none" (click)="openEditModal(product)">
                    <span class="text-light dark:text-white/60 text-[14px] hover:text-info" nz-icon nzType="edit" nzTheme="outline"></span>
                  </button>
                </li>
                <li>
                  <button nz-button class="border-none shadow-none bg-transparent outline-none" (click)="removeEvent(i)">
                    <span class="text-light dark:text-white/60 text-[14px] hover:text-danger" nz-icon nzType="close" nzTheme="outline"></span>
                  </button>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </nz-table>
      </div>
    </div>
  </div>
</div>
  `,
  styleUrls: ['./member-progress.component.scss']
})

export class UpcomingEvent implements OnInit   {
  //Table Data
  upcomingEvent: any;
  tabData: { key: string; label: string }[];
  sellingTab: string = 'today';

  constructor(private modalService: NzModalService, private elementRef: ElementRef) {
    this.upcomingEvent = tableData.upcomingEvent;
    this.tabData = [
      { key: 'today', label: 'Today' },
      { key: 'week', label: 'Week' },
      { key: 'month', label: 'Month' }
    ];
  }

 //Tabs
 @Input() componentId: string;
  //Tabs
  handleClick(tab: string): void {
    this.sellingTab = tab;
    const storageKey = `sellingTab_${this.componentId}`; // Use a unique key for each component
    localStorage.setItem(storageKey, tab);
  }

  ngOnInit(): void {
    const storageKey = `sellingTab_${this.componentId}`; // Use the same unique key as in handleClick
    const storedTab = localStorage.getItem(storageKey);
    if (storedTab) {
      this.sellingTab = storedTab;
    }
  }

  // Method to open the edit modal
  openEditModal(product: any): void {
    const modalRef = this.modalService.create({
      nzTitle: 'Update Product Title',
      nzContent: EditModalComponent,
      nzFooter: [
        {
          label: 'Update Event',
          type: 'primary',
          onClick: () => {
            // Update the product title
            product.title = modalRef.getContentComponent().updatedTitle;
            modalRef.destroy();
          }
        }
      ]
    });
  }

  removeEvent(index: number): void {
    const selectedTab = this.tabData.find(tab => tab.key === this.sellingTab);
    if (selectedTab) {
      const tabKey = selectedTab.key;
      this.upcomingEvent[tabKey].splice(index, 1);

      // Remove the corresponding <tr> element from the DOM
      const trElements = this.elementRef.nativeElement.querySelectorAll('.group');
      if (trElements.length > index) {
        trElements[index].remove();
      }
    }
  }

}

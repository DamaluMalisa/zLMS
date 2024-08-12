import { Component, TemplateRef,OnInit,ViewChild } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { HttpClient } from '@angular/common/http';

interface Person {
  id: string;
  user: string;
  name: string;
  priority: string;
  createdDate: string;
  employeeCode: string;
  actions: string;
  status: string;
}
@Component({
  selector: 'ticket-table',
  template: `
    <div class="bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10 relative mb-[25px]">
      <div class="pt-[30px] pb-[9px] px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] flex items-center justify-between max-sm:flex-col max-sm:gap-[15px]">
        <h4 class="mb-0 text-[20px] leading-6 font-medium text-dark dark:text-white/[.87]">All Support Ticket</h4>
          <button class="flex items-center px-[14px] text-sm text-white rounded-md font-semibold bg-primary border-primary h-10 gap-[6px]" nz-button (click)="createTplModal(tplTitle, tplContent, tplFooter)">
          <i class="text-[12px]" nz-icon nzType="plus"></i>
          <span class="m-0">Add Ticket</span>
        </button>
      </div>
      <div class="px-[25px] pb-[25px]">
        <div class="flex items-center justify-center w-full mt-5 mb-[25px] max-md:flex-col max-md:justify-center gap-[15px]">
          <div class="inline-flex items-center flex-wrap w-full gap-[20px] max-md:justify-center">
            <div class="inline-flex items-center">
              <span class="ltr:mr-2 rtl:ml-2 dark:text-white/60">Id:</span>
              <input
                class="h-10 px-[20px] text-body dark:text-white/60 bg-white dark:bg-white/10 border-normal border-1 dark:border-white/10 rounded-[6px]"
                nz-input
                placeholder="Search with Id"
                [(ngModel)]="value"
                (ngModelChange)="searchById()"
              />
            </div>
            <div class="inline-flex items-center">
              <span class="ltr:mr-2 rtl:ml-2 dark:text-white/60">Status:</span>
              <nz-select
                class="min-w-[180px] capitalize [&>nz-select-top-control]:border-normal dark:[&>nz-select-top-control]:border-white/10 [&>nz-select-top-control]:bg-white [&>nz-select-top-control]:dark:bg-white/10 [&>nz-select-top-control]:shadow-none [&>nz-select-top-control]:text-dark [&>nz-select-top-control]:dark:text-white/60 [&>nz-select-top-control]:h-[40px] [&>nz-select-top-control]:flex [&>nz-select-top-control]:items-center [&>nz-select-top-control]:rounded-[6px] [&>nz-select-top-control]:px-[20px] [&>.ant-select-arrow]:text-light dark:[&>.ant-select-arrow]:text-white/60"
                [(ngModel)]="statusFilter"
                (ngModelChange)="filterByStatus()" nzPlaceHolder="Select a status" nzAllowClear
              >
                <nz-option nzValue="all" nzLabel="All"></nz-option>
                <nz-option nzValue="open" nzLabel="Open"></nz-option>
                <nz-option nzValue="pending" nzLabel="Pending"></nz-option>
                <nz-option nzValue="close" nzLabel="Close"></nz-option>
              </nz-select>
            </div>
          </div>
          <div class="ssm:min-w-[280px]">
            <nz-input-group class="h-10 inline-flex items-center text-body dark:text-white/60 bg-white dark:bg-white/10 border-normal border-1 dark:border-white/10 rounded-[6px] px-[20px]">
              <i class="text-light dark:text-white/[.87] text-[18px]" nz-icon nzType="search"></i>
              <input
                class="bg-transparent border-none text-[15px] shadow-none text-dark dark:text-white/[.87] flex items-center"
                type="text"
                nz-input
                placeholder="Search contacts"
                [(ngModel)]="contactSearchValue"
                (ngModelChange)="filterByContact()"
              />
            </nz-input-group>
          </div>
        </div>
        <perfect-scrollbar>
            <div class="w-full max-2xl:overflow-x-auto max-h-[450px]">
              <nz-table #basicTable [nzData]="filteredPeople" [nzFrontPagination]="false" [nzShowPagination]="false">
                <thead>
                  <tr>
                    <th class="bg-regularBG dark:bg-[#323440] px-[20px] py-[16px] text-start text-dark dark:text-white/[.87] text-[15px] font-medium border-none before:hidden rounded-s-[10px] capitalize">ID</th>
                    <th class="bg-regularBG dark:bg-[#323440] px-[20px] py-[16px] text-start text-dark dark:text-white/[.87] text-[15px] font-medium border-none before:hidden capitalize">Requested By</th>
                    <th class="bg-regularBG dark:bg-[#323440] px-[20px] py-[16px] text-start text-dark dark:text-white/[.87] text-[15px] font-medium border-none before:hidden capitalize">Subject</th>
                    <th class="bg-regularBG dark:bg-[#323440] px-[20px] py-[16px] text-start text-dark dark:text-white/[.87] text-[15px] font-medium border-none before:hidden capitalize">Priority</th>
                    <th class="bg-regularBG dark:bg-[#323440] px-[20px] py-[16px] text-start text-dark dark:text-white/[.87] text-[15px] font-medium border-none before:hidden capitalize">Status</th>
                    <th class="bg-regularBG dark:bg-[#323440] px-[20px] py-[16px] text-start text-dark dark:text-white/[.87] text-[15px] font-medium border-none before:hidden capitalize">Created Date</th>
                    <th class="bg-regularBG dark:bg-[#323440] px-[20px] py-[16px] text-end text-dark dark:text-white/[.87] text-[15px] font-medium border-none before:hidden rounded-e-[10px] capitalize ">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="group max-lg:whitespace-nowrap" *ngFor="let person of filteredPeople">
                    <td class="ltr:pr-[20px] rtl:pl-[20px] text-theme-gray dark:text-white/60 font-medium text-[15px] py-4 before:hidden border-none group-hover:bg-transparent">#{{ person.id }}</td>
                    <td class="ltr:pr-[20px] rtl:pl-[20px] text-theme-gray dark:text-white/60 font-medium text-[15px] py-4 before:hidden border-none group-hover:bg-transparent">
                    <div class="flex items-center">
                      <div class="me-2.5 w-[34px] h-[34px]">
                        <img class="min-w-[34px] h-[34px] rounded-4" src="assets/images/avatars/{{person.user}}" alt="Samsung Galaxy S8 256GB">
                      </div>
                      <span class="font-medium capitalize text-dark dark:text-white/[.87] text-15">{{ person.name }}</span>
                    </div>
                    </td>
                    <td class="ltr:pr-[20px] rtl:pl-[20px] text-theme-gray dark:text-white/60 font-medium text-[15px] py-4 before:hidden border-none group-hover:bg-transparent">{{ person.subject }}</td>
                    <td class="ltr:pr-[20px] rtl:pl-[20px] text-theme-gray dark:text-white/60 font-medium text-[15px] py-4 before:hidden border-none group-hover:bg-transparent">{{ person.priority }}</td>
                    <td class="ltr:pr-[20px] rtl:pl-[20px] text-theme-gray dark:text-white/60 font-medium text-[15px] py-4 before:hidden border-none group-hover:bg-transparent">
                    <span
                        class="inline-flex items-center justify-center bg-{{ person.status }}/10 text-{{ person.status }} min-h-[24px] px-3 text-xs font-medium rounded-[15px] capitalize"
                      >
                        {{ person.actions }}
                      </span>
                    </td>
                    <td class="ltr:pr-[20px] rtl:pl-[20px] text-theme-gray dark:text-white/60 font-medium text-[15px] py-4 before:hidden border-none group-hover:bg-transparent">{{ person.createdDate }}</td>
                    <td class="ltr:pr-[20px] rtl:pl-[20px] text-theme-gray dark:text-white/60 font-medium text-[15px] py-4 before:hidden border-none group-hover:bg-transparent">
                    <ul class="flex items-center justify-end gap-[15px]">
                        <li>
                          <div class="flex items-center leading-none text-light dark:text-white/60 hover:text-primary">
                            <span class="[&>svg]:w-[14px] [&>svg]:h-[14px] cursor-pointer " nz-icon nzType="eye"
                              nzTheme="outline"></span>
                          </div>
                        </li>
                        <li>
                          <div class="flex items-center">
                            <span
                              class=" cursor-pointer text-light dark:text-white/60 [&>svg]:w-[14px] [&>svg]:h-[14px] hover:text-info "
                              nz-icon nzType="edit" nzTheme="outline">
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="flex items-center">
                            <span
                              class="cursor-pointer text-light dark:text-white/60 [&>svg]:w-[14px] [&>svg]:h-[14px] hover:text-danger"
                              nz-icon nzType="delete" nzTheme="outline"></span>
                          </div>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </nz-table>
            </div>
        </perfect-scrollbar>
        <div class="border-t border-regular dark:border-white/10 pt-[30px] mt-[10px] flex justify-center">
          <nz-pagination [nzPageIndex]="1" [nzTotal]="50"></nz-pagination>
        </div>
      </div>
    </div>
    <ng-template #tplTitle>
      <span>Create Support</span>
    </ng-template>
    <ng-template #tplContent let-params>
      <form nz-form nzLayout="vertical">
          <nz-form-item>
            <nz-form-control>
              <nz-form-label nzRequired class="text-[15px] font-semibold text-dark dark:text-white/[.87] capitalize mb-[10px]">Email:</nz-form-label>
              <input class="h-[50px] border-normal dark:border-white/10 px-[20px] placeholder-shown:text-light-extra dark:placeholder-shown:text-white/60 rounded-[5px] dark:bg-white/10 dark:text-white/[.87]" type="email" nz-input placeholder="Email">
            </nz-form-control>
          </nz-form-item>
          <nz-form-item>
            <nz-form-control>
              <nz-form-label nzRequired class="text-[15px] font-semibold text-dark dark:text-white/[.87] capitalize mb-[10px]">Subject:</nz-form-label>
              <input class="h-[50px] border-normal dark:border-white/10 px-[20px] placeholder-shown:text-light-extra dark:placeholder-shown:text-white/60 rounded-[5px] dark:bg-white/10 dark:text-white/[.87]" type="text" nz-input placeholder="Subject">
            </nz-form-control>
          </nz-form-item>
          <nz-form-item>
            <nz-form-control>
            <nz-form-label class="text-[15px] font-semibold text-dark dark:text-white/[.87] capitalize mb-[10px]">Priority:</nz-form-label>
              <nz-select class="min-w-[260px] capitalize [&>nz-select-top-control]:border-normal dark:[&>nz-select-top-control]:border-white/10 [&>nz-select-top-control]:bg-white [&>nz-select-top-control]:dark:bg-white/10 [&>nz-select-top-control]:shadow-none [&>nz-select-top-control]:text-dark [&>nz-select-top-control]:dark:text-white/60 [&>nz-select-top-control]:h-[50px] [&>nz-select-top-control]:flex [&>nz-select-top-control]:items-center [&>nz-select-top-control]:rounded-[5px] [&>nz-select-top-control]:px-[20px] [&>.ant-select-arrow]:text-theme-gray dark:[&>.ant-select-arrow]:text-white/60" ngModel="high" nzPlaceHolder="Select a person" nzAllowClear name="high" >
                <nz-option nzValue="high" nzLabel="High"></nz-option>
                <nz-option nzValue="medium" nzLabel="Medium"></nz-option>
                <nz-option nzValue="low" nzLabel="Low"></nz-option>
              </nz-select>
            </nz-form-control>
          </nz-form-item>
          <nz-form-item>
            <nz-form-control>
            <nz-form-label class="text-[15px] font-semibold text-dark dark:text-white/[.87] capitalize mb-[10px]">Status:</nz-form-label>
              <nz-select class="min-w-[260px] capitalize [&>nz-select-top-control]:border-normal dark:[&>nz-select-top-control]:border-white/10 [&>nz-select-top-control]:bg-white [&>nz-select-top-control]:dark:bg-white/10 [&>nz-select-top-control]:shadow-none [&>nz-select-top-control]:text-dark [&>nz-select-top-control]:dark:text-white/60 [&>nz-select-top-control]:h-[50px] [&>nz-select-top-control]:flex [&>nz-select-top-control]:items-center [&>nz-select-top-control]:rounded-[5px] [&>nz-select-top-control]:px-[20px] [&>.ant-select-arrow]:text-theme-gray dark:[&>.ant-select-arrow]:text-white/60" ngModel="open" nzPlaceHolder="Select a status" nzAllowClear name="open">
                <nz-option nzValue="open" nzLabel="Open"></nz-option>
                <nz-option nzValue="close" nzLabel="Close"></nz-option>
                <nz-option nzValue="pending" nzLabel="Pending"></nz-option>
              </nz-select>
            </nz-form-control>
          </nz-form-item>
          <nz-form-item class="mb-0">
            <nz-form-control>
            <nz-form-label nzRequired class="text-[15px] font-semibold text-dark dark:text-white/[.87] capitalize mb-[10px]">Description:</nz-form-label>
              <textarea class="h-[118px] border-normal dark:border-white/10 px-[20px] placeholder-shown:text-light-extra dark:placeholder-shown:text-white/60 rounded-[5px] py-[15px] dark:bg-white/10 dark:text-white/60" nz-input placeholder="Project Description" name="first"></textarea>
            </nz-form-control>
          </nz-form-item>
        </form>
    </ng-template>
    <ng-template #tplFooter let-ref="modalRef">
      <button nz-button nzType="primary" (click)="destroyTplModal(ref)" [nzLoading]="tplModalButtonLoading">
        Submit Ticket
      </button>
    </ng-template>
  `,
})
export class TicketTableComponent implements OnInit {
  @ViewChild('tplTitle') tplTitle!: TemplateRef<{}>;
  @ViewChild('tplContent') tplContent!: TemplateRef<{}>;
  @ViewChild('tplFooter') tplFooter!: TemplateRef<{}>;

  value = '';
  statusFilter = '';
  contactSearchValue = '';
  people: Person[] = [];
  filteredPeople: Person[] = [];
  selectedValue = null;
  modalRef: NzModalRef;

  constructor(private http: HttpClient, private modal: NzModalService) {}

  ngOnInit(): void {
    this.http.get<Person[]>('assets/data/features/ticket-table.json').subscribe(
      (data) => {
        this.people = data;
        this.filteredPeople = data;
      },
      (error) => {
        console.log('Error reading JSON file:', error);
      }
    );
  }

  searchById(): void {
    if (this.value) {
      this.filteredPeople = this.people.filter(
        (person) => person.id === this.value
      );
    } else {
      this.filteredPeople = this.people;
    }
  }

  filterByContact(): void {
    this.filteredPeople = this.applyFilters();
  }

  filterByStatus(): void {
    this.filteredPeople = this.applyFilters();
  }

  private applyFilters(): Person[] {
    return this.people.filter((person) =>
      person.name.toLowerCase().includes(this.contactSearchValue.toLowerCase()) &&
      (this.statusFilter === 'all' || person.actions.toLowerCase() === this.statusFilter.toLowerCase())
    );
  }

  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.modalRef = this.modal.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: true,
      nzClosable: true,
      nzWidth: 620,
      nzOnOk: () => console.log('Click ok')
    });
  }
}

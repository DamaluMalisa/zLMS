import { Component, OnInit } from '@angular/core';

interface ItemData {
  id: number;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'table-row-selection-custom',
  template: `
  <div class="bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10 relative mb-[25px]">
      <div class="py-[16px] px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] border-regular dark:border-white/10 border-b">
        <h4 class="mb-0 text-lg font-medium text-dark dark:text-white/[.87]">Custom Selection</h4>
      </div>
      <div class="p-[25px] w-full overflow-x-auto">
      <nz-table
      #rowSelectionTable
      nzShowSizeChanger
      [nzData]="listOfData"
      (nzCurrentPageDataChange)="onCurrentPageDataChange($event)"
    >
      <thead>
        <tr>
          <th
            class="bg-regularBG dark:bg-[#323440] px-[20px] py-[16px] text-dark dark:text-white/[.87] text-[15px] font-medium border-none before:hidden rounded-s-[10px] capitalize"
            [nzSelections]="listOfSelection"
            [(nzChecked)]="checked"
            [nzIndeterminate]="indeterminate"
            (nzCheckedChange)="onAllChecked($event)"
          ></th>
          <th class="bg-regularBG dark:bg-[#323440] px-[20px] py-[16px] text-dark dark:text-white/[.87] text-[15px] font-medium border-none before:hidden capitalize">Name</th>
          <th class="bg-regularBG dark:bg-[#323440] px-[20px] py-[16px] text-dark dark:text-white/[.87] text-[15px] font-medium border-none before:hidden capitalize">Age</th>
          <th class="bg-regularBG dark:bg-[#323440] px-[20px] py-[16px] text-dark dark:text-white/[.87] text-[15px] font-medium border-none before:hidden rounded-e-[10px]">Address</th>
        </tr>
      </thead>
      <tbody>
        <tr class="group" *ngFor="let data of rowSelectionTable.data">
          <td class="ltr:pr-[20px] rtl:pl-[20px] ltr:pl-[20px] rtl:pr-[20px] text-dark dark:text-white/[.87] text-[15px] py-[20px] before:hidden border-none group-hover:bg-transparent" [nzChecked]="setOfCheckedId.has(data.id)" (nzCheckedChange)="onItemChecked(data.id, $event)"></td>
          <td class="ltr:pr-[20px] rtl:pl-[20px] ltr:pl-[20px] rtl:pr-[20px] text-dark dark:text-white/[.87] text-[15px] py-[20px] before:hidden border-none group-hover:bg-transparent">{{ data.name }}</td>
          <td class="ltr:pr-[20px] rtl:pl-[20px] ltr:pl-[20px] rtl:pr-[20px] text-dark dark:text-white/[.87] text-[15px] py-[20px] before:hidden border-none group-hover:bg-transparent">{{ data.age }}</td>
          <td class="ltr:pr-[20px] rtl:pl-[20px] ltr:pl-[20px] rtl:pr-[20px] text-dark dark:text-white/[.87] text-[15px] py-[20px] before:hidden border-none group-hover:bg-transparent">{{ data.address }}</td>
        </tr>
      </tbody>
    </nz-table>
      </div>
  </div>
  `
})
export class TableRowSelectionCustomComponent implements OnInit {
  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      }
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 !== 0));
        this.refreshCheckedStatus();
      }
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 === 0));
        this.refreshCheckedStatus();
      }
    }
  ];
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly ItemData[] = [];
  listOfData: readonly ItemData[] = [];
  setOfCheckedId = new Set<number>();

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly ItemData[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

  ngOnInit(): void {
    this.listOfData = new Array(200).fill(0).map((_, index) => ({
      id: index,
      name: `Edward King ${index}`,
      age: 32,
      address: `London, Park Lane no. ${index}`
    }));
  }
}

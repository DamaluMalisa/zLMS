import { Component } from '@angular/core';

interface DataItem {
  name: string;
  chinese: number;
  math: number;
  english: number;
}

@Component({
  selector: 'table-multiple-sorter',
  template: `
  <div class="bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10 relative mb-[25px]">
      <div class="py-[16px] px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] border-regular dark:border-white/10 border-b">
        <h4 class="mb-0 text-lg font-medium text-dark dark:text-white/[.87]">Multiple Sorter</h4>
      </div>
      <div class="p-[25px] w-full overflow-x-auto">
          <nz-table #sortTable [nzData]="listOfData" nzTableLayout="fixed">
            <thead>
              <tr>
                <th class="bg-regularBG dark:bg-[#323440] px-[20px] py-[16px] text-dark dark:text-white/[.87] text-[15px] font-medium border-none before:hidden [&:first-child]:rounded-s-[10px] [&:last-child]:rounded-e-[10px] capitalize" *ngFor="let column of listOfColumn" [nzSortFn]="column.compare" [nzSortPriority]="column.priority">
                  {{ column.title }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="group" *ngFor="let data of sortTable.data">
                <td class="ltr:pr-[20px] rtl:pl-[20px] ltr:pl-[20px] rtl:pr-[20px] text-dark dark:text-white/[.87] text-[15px] py-[20px] before:hidden border-none group-hover:bg-transparent">{{ data.name }}</td>
                <td class="ltr:pr-[20px] rtl:pl-[20px] ltr:pl-[20px] rtl:pr-[20px] text-dark dark:text-white/[.87] text-[15px] py-[20px] before:hidden border-none group-hover:bg-transparent">{{ data.chinese }}</td>
                <td class="ltr:pr-[20px] rtl:pl-[20px] ltr:pl-[20px] rtl:pr-[20px] text-dark dark:text-white/[.87] text-[15px] py-[20px] before:hidden border-none group-hover:bg-transparent">{{ data.math }}</td>
                <td class="ltr:pr-[20px] rtl:pl-[20px] ltr:pl-[20px] rtl:pr-[20px] text-dark dark:text-white/[.87] text-[15px] py-[20px] before:hidden border-none group-hover:bg-transparent">{{ data.english }}</td>
              </tr>
            </tbody>
          </nz-table>
      </div>
  </div>
  `
})
export class TableMultipleSorterComponent {
  listOfColumn = [
    {
      title: 'Name',
      compare: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      priority: false
    },
    {
      title: 'Chinese Score',
      compare: (a: DataItem, b: DataItem) => a.chinese - b.chinese,
      priority: 3
    },
    {
      title: 'Math Score',
      compare: (a: DataItem, b: DataItem) => a.math - b.math,
      priority: 2
    },
    {
      title: 'English Score',
      compare: (a: DataItem, b: DataItem) => a.english - b.english,
      priority: 1
    }
  ];
  listOfData: DataItem[] = [
    {
      name: 'John Brown',
      chinese: 98,
      math: 60,
      english: 70
    },
    {
      name: 'Jim Green',
      chinese: 98,
      math: 66,
      english: 89
    },
    {
      name: 'Joe Black',
      chinese: 98,
      math: 90,
      english: 70
    },
    {
      name: 'Jim Red',
      chinese: 88,
      math: 99,
      english: 89
    }
  ];
}

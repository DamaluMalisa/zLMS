import {
  Component
} from '@angular/core';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'basic-table',
  template: `
<div
  class="bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10 relative mb-[25px]">
  <div
    class="py-[16px] px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] border-regular dark:border-white/10 border-b">
    <h4 class="mb-0 text-lg font-medium text-dark dark:text-white/[.87]">Basic Usage</h4>
  </div>
  <div class="p-[25px]">
    <div class="w-full overflow-x-auto">
      <nz-table #basicTable [nzData]="listOfData" [nzFrontPagination]="false" [nzShowPagination]="false">
        <thead>
          <tr>
            <th
              class="bg-regularBG dark:bg-[#323440] px-[20px] py-[16px] text-start text-dark dark:text-white/[.87] text-15px font-medium border-none before:hidden rounded-s-[10px] capitalize">
              Name</th>
            <th
              class="bg-regularBG dark:bg-[#323440] px-4 py-[16px] text-start text-dark dark:text-white/[.87] text-[15px] font-medium border-none before:hidden capitalize">
              Age</th>
            <th
              class="bg-regularBG dark:bg-[#323440] px-[20px] py-[16px] text-start text-dark dark:text-white/[.87] text-[15px] font-medium border-none before:hidden rounded-e-[10px] capitalize">
              Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="group" *ngFor="let data of basicTable.data">
            <td
              class="ltr:pr-4 rtl:pl-4 text-dark dark:text-white/[.87] text-[15px] py-4 before:hidden border-none group-hover:bg-transparent">
              {{ data.name }}</td>
            <td
              class="ltr:pr-4 rtl:pl-4 text-dark dark:text-white/[.87] text-[15px] py-4 before:hidden border-none group-hover:bg-transparent">
              {{ data.age }}</td>
            <td
              class="ltr:pr-4 rtl:pl-4 text-dark dark:text-white/[.87] text-[15px] py-4 before:hidden border-none group-hover:bg-transparent">
              <a>Action 一 {{ data.name }}</a>
            </td>
          </tr>
        </tbody>
      </nz-table>
    </div>
  </div>
</div>
`,
})
export class BasicComponent {
  listOfData: Person[] = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
}

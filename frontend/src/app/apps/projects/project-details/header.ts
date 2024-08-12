import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
@Component({
  selector: 'header-details',
    template: `
        <div class="flex items-center justify-between flex-wrap gap-[15px] max-md:justify-center">
  <div class="inline-flex flex-wrap items-center gap-5 max-md:justify-center">
    <h1 class="text-dark dark:text-white/[.87] text-[20px] font-semibold mb-0">Dashboard UI Project</h1>
    <div class="flex items-center gap-[10px]">
      <button nz-button class="h-[35px] px-[14px] text-xs font-medium rounded-md bg-primary border-primary hover:bg-primary-hbr text-white flex items-center gap-[6px]">
          <span nz-icon nzType="plus" nzTheme="outline"></span>
          <span class="m-0">Add Task</span>
        </button>
          <label class="hidden" nz-checkbox [(ngModel)]="checked"></label>
          <button  class=" h-[35px] px-[14px] text-xs font-semibold rounded-md dark:text-white/[.87] dark:bg-white/10 dark:border-white/10 dark:hover:bg-white/30 transition duration-300 flex items-center gap-[6px]"  nz-button nzType="default" [class.checked]="checked" (click)="toggleChecked()">
            <span nz-icon nzType="check" nzTheme="outline"></span>
            <span class="m-0">Mark as Complete</span>
          </button>
      </div>
  </div>
  <div class="inline-flex items-center gap-x-5">
    <button nz-button
      class="flex items-center gap-x-1.5 bg-white dark:bg-white/10 dark:hover:bg-white/20 text-primary h-[35px] px-[14px] text-xs font-medium border border-normal dark:border-white/10 rounded-md duration-300"
      href="#">
      <span nz-icon nzType="edit" nzTheme="outline"></span><span class="m-0">Edit</span></button>
      <button nz-button
      class="flex items-center gap-x-1.5 bg-white dark:bg-white/10 dark:hover:bg-white/20 text-danger h-[35px] px-[14px] text-xs font-medium border border-normal dark:border-white/10 rounded-md duration-300"
      href="#">
      <span nz-icon nzType="delete" nzTheme="outline"></span><span class="m-0">Remove</span></button>
    </div>
</div>
    `,
    styles: [`
    label[ng-reflect-model="true"] + button {
      @apply bg-primary text-white #{!important};
    }
  `]
})

export class headerDetailsComponent  {
  checked:boolean = false;
  constructor (private modalService: NzModalService) {}
  toggleChecked() {
    this.checked = !this.checked;
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-attachment',
  template: `
    <div class="bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10 relative">
      <div class="px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto">
        <h1 class="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-white/[.87]">File Attachment</h1>
      </div>
      <div class="px-[25px] pb-[25px] max-sm:mt-[15px]">
        <ul class="p-0">
          <li *ngFor="let item of files" class="p-0 last:mb-0 mb-[20px] border-none flex items-center justify-between">
            <div class="flex items-center gap-[15px]">
              <div class="border-none p-0 items-center">
                <img class="max-w-[40px] rounded-[5px]" [src]="item.icon" alt="hexadash Team" />
              </div>
              <div>
                <a class="text-theme-gray text-[15px] dark:text-white/60 hover:text-primary font-medium leading-[19px]" href="#">
                  {{ item.name }}
                </a>
                <div class="text-[15px] text-light dark:text-white/60 leading-1">
                  {{item.size}}
                </div>
              </div>
            </div>
            <button nz-button class="flex items-center justify-center border-none shadow-none bg-transparent">
              <span class="text-[18px] text-light dark:text-white/60 dark:hover:text-primary hover:text-primary" nz-icon [nzType]="item.typeStatus" nzTheme="outline"></span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  `
})
export class FileAttachmentComponent implements OnInit {
  files: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('assets/data/pages/file-attach.json').subscribe(data => {
      this.files = data.files;
    });
  }
}

import { Component } from '@angular/core';
import file from '../../../../assets/data/apps/file.json';
@Component({
selector: 'file',
template:`

<div class="bg-white dark:bg-white/10 shadow-[0_5px_20px_rgba(173,181,217,0.01)] rounded-10 relative">
  <div class="px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] border-regular dark:border-white/10 border-b-1 flex items-center justify-between">
    <h3 class="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] text-dark dark:text-white/[.87] font-semibold">File</h3>
  </div>
  <perfect-scrollbar class="pb-[6px]">
    <div class="max-h-[408px] flex flex-col gap-y-[18px] p-[25px] pt-[27px]">
      <div class="flex items-center justify-between" *ngFor="let item of UserFile">
        <div class="flex items-center w-[50%] gap-x-[16px]">
          <img class="max-w-[42px]" src="{{item.avatar}}" alt="File">
        <div class="flex flex-col">
          <span class="text-[14px] font-medium text-dark dark:text-white/[.87] block leading-[1.42]">{{item.file}}</span>
          <span class="my-[2px] text-light-extra dark:text-white/60 block text-[12px] leading-[1.42]">{{item.size}}</span>
          <div class=" items-center inline-flex text-[12px] leading-[1.42] gap-[10px]" *ngIf="item.actions.length > 0">
            <div *ngFor="let item of item.actions">
              <div *ngIf="item.type == 'view'">
                <a class="font-medium capitalize text-primary text-[12px] hover:text-dark duration-300" href="#">view</a>
              </div>
              <div *ngIf="item.type == 'download'">
                <a class="font-medium capitalize text-primary text-[12px] hover:text-dark duration-300" href="#">Download</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a nz-dropdown nzTrigger="click" [nzDropdownMenu]="menu">
          <svg-icon
            class=" text-light-extra dark:text-white/60 dark:group-hover:text-white/[.87] w-[20px] h-[20px] [&>svg]:w-[20px] [&>svg]:h-[20px]"
            src="../../../../assets/images/svg/feather/more-horizontal.svg"></svg-icon>
        </a>
        <nz-dropdown-menu #menu="nzDropdownMenu">
          <ul
            class="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4 capitalize"
            nz-menu nzSelectable>
            <li
              class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87]"
              nz-menu-item>
              view
            </li>
            <li
              class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87]"
              nz-menu-item>
              edit
            </li>
            <li
              class="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm dark:hover:text-white/[.87]"
              nz-menu-item>
              delete
            </li>
          </ul>
        </nz-dropdown-menu>
      </div>
    </div>
    </div>
  </perfect-scrollbar>
</div>

`,
})

export class FileComponent {
  UserFile = file.UserFile;
}

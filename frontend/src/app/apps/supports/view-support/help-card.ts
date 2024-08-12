import { Component } from '@angular/core';
import jsonData from '../../../../assets/data/pages/help-card.json';
@Component({
selector: 'app-help-card',
template: `
<h4 class="text-[20px] text-dark dark:text-white/[.87] font-medium mb-[25px]">Need to help for adding new contact</h4>
<div nz-row nzGutter="25">
  <div nz-col nzXs="24" nzMd="8" *ngFor="let item of jsonData" class="mb-[25px]">
    <div>
      <h4 class="text-[14px] text-light dark:text-white/60 mb-[12px] font-normal">{{item.authorArea.slug}}:</h4>
      <div class="flex items-center mb-[30px] gap-[15px]">
        <ng-container *ngIf="item.authorArea.avatar.length === 0; else showOptions">
        </ng-container>
        <ng-template #showOptions>
          <img class="w-[30px] h-[30px] rounded-full" [src]="item.authorArea.avatar" alt="author image">
        </ng-template>
        <span
          class="text-[14px] font-medium text-theme-gray dark:text-white/60 capitalize">{{ item.authorArea.name }}</span>
      </div>
      <ng-container *ngIf="item.priority.length === 0; else showPriority">
      </ng-container>
      <ng-template #showPriority>
        <h4 class="text-theme-gray dark:text-white/60 mb-[12px] font-medium">{{item.priority}}</h4>
      </ng-template>
    </div>
    <ng-container *ngIf="item.priorityOptions.length === 0; else showSelect">
    </ng-container>
    <ng-template #showSelect>
      <nz-select
        class="min-w-[128px] capitalize [&>nz-select-top-control]:border-regular dark:[&>nz-select-top-control]:border-white/10 [&>nz-select-top-control]:bg-white [&>nz-select-top-control]:dark:bg-white/10 [&>nz-select-top-control]:shadow-none [&>nz-select-top-control]:text-dark [&>nz-select-top-control]:dark:text-white/60 [&>nz-select-top-control]:h-[40px] [&>nz-select-top-control]:flex [&>nz-select-top-control]:items-center [&>nz-select-top-control]:rounded-[6px] [&>nz-select-top-control]:px-[20px] [&>.ant-select-arrow]:text-light dark:[&>.ant-select-arrow]:text-white/60"
        nzPlaceHolder="{{item.label}}" nzAllowClear>
        <nz-option *ngFor="let option of item.priorityOptions" [nzValue]="option.value" [nzLabel]="option.label">
        </nz-option>
      </nz-select>
    </ng-template>
  </div>
</div>
<div class="">
  <h4 class="text-[20px] font-semibold leading-1 text-theme-gray dark:text-white/60 mb-[12px]">Overview :</h4>
  <p class="text-theme-gray dark:text-white/60 text-[16px] font-normal">There are have a many variations of passages of Lorem Ipsum available, but the randomised words which don't look even slightly believable. If you are going to sdsss embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend</p>
</div>
`,
})

export class HelpCardComponent {
jsonData = jsonData;

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-knowledgeHeader',
  template: `
    <div class="bg-white dark:bg-white/10 p-16 max-sm:p-[30px] max-ssm:p-[15px] rounded-10 text-center shadow-[0_5px_20px_rgba(116,116,116,0.06)] dark:shadow-none place-content-[stretch_flex-start]">
        <div nz-row nzGutter="25" nzJustify="center">
           <div nz-col nzXs="24" nzXl="12">
              <h1 class="mb-7 text-dark dark:text-white/[.87] text-3xl font-semibold">Hi, How can we help?</h1>
              <div class="shadow-[0_10px_10px_rgba(116,116,116,0.06)]">
                 <div class="flex items-center bg-white max-ssm:flex-col max-ssm:gap-[15px] ssm:dark:bg-white/10 max-ssm:bg-transparent rounded-6">
                    <nz-select class="min-w-[160px] max-sm:min-w-[60px] focus:outline-0 ssm:border-e-1 max-ssm:rounded-6 max-ssm:w-full border-normal max-ssm:border-1 dark:border-white/10 text-dark dark:text-white/10" nzShowSearch nzAllowClear nzPlaceHolder="Select a person" [(ngModel)]="selectedValue">
                       <nz-option nzLabel="Jack" nzValue="jack"></nz-option>
                       <nz-option nzLabel="Lucy" nzValue="lucy"></nz-option>
                       <nz-option nzLabel="Tom" nzValue="tom"></nz-option>
                    </nz-select>
                    <nz-input-group class="min-h-[54px] max-ssm:border-1 max-ssm:border-normal dark:max-ssm:border-white/10 max-ssm:rounded-6" nzSearch nzSize="large" [nzAddOnAfter]="suffixButton">
                       <input class="capitalize bg-transparent placeholder:text-light-extra dark:placeholder:text-white/60 border-0 rounded-none shadow-none min-h-[54px] focus:outline-0 px-[20px] placeholder:text-[14px] text-dark dark:text-white/[.87]  dark:caret-white/60" type="text" nz-input placeholder="Search Anything" />
                    </nz-input-group>
                    <ng-template #suffixButton>
                       <button class="h-[54px] max-sm:w-full text-15 px-7 py-1.5 rounded-e-6 bg-primary border-primary hover:bg-primary-hbr hover:border-primary-hbr" nz-button nzType="primary" nzSize="large" nzSearch>Search</button>
                    </ng-template>
                 </div>
              </div>
              <div class="mt-5">
                 <ul class="flex flex-wrap items-center justify-center gap-y-1.5 gap-x-5">
                    <li>
                       <span class="text-sm text-dark dark:text-white/[.87]">Popular topics:</span>
                    </li>
                    <li>
                       <span class="text-sm text-light dark:text-white/60 hover:text-dark hover:underline cursor-pointer">Message formatting</span>
                    </li>
                    <li>
                       <span class="text-sm text-light dark:text-white/60 hover:text-dark hover:underline cursor-pointer">Notifications</span>
                    </li>
                    <li>
                       <span class="text-sm text-light dark:text-white/60 hover:text-dark hover:underline cursor-pointer">Change password</span>
                    </li>
                 </ul>
              </div>
           </div>
        </div>
     </div>
  `,
    styles: [`
    :host ::ng-deep nz-input-group .ant-input-group-addon {
      @apply bg-transparent border-none rounded-6;
    }
    :host ::ng-deep .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
      @apply h-[52px] px-[20px] flex items-center justify-start bg-transparent border-none dark:border-white/10 rounded-s-6;
    }
    :host ::ng-deep .ant-select-selection-search-input{
      @apply flex items-center justify-center;
    }
    :host ::ng-deep nz-select .ant-select-selection-item{
      @apply text-dark dark:text-white/[.87];
    }
    :host ::ng-deep nz-select .ant-select-close-icon{
      @apply text-danger ;
    }
    :host ::ng-deep nz-select .ant-select-clear{
      @apply bg-white dark:bg-[#323440];
    }
    :host ::ng-deep .ant-select-selection-placeholder{
      @apply text-dark dark:text-white/[.87] ;
    }
    :host ::ng-deep nz-select .ant-select-selection-search {
      @apply flex items-center;
    }
  `]
})

export class knowledgeHeader {
  selectedValue = null;
}

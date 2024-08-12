import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../../../shared/services/json-data.service';

@Component({
  selector: 'app-all-articleItems',
  template: `
  <div class="pt-6 pb-10">
    <nz-breadcrumb [nzSeparator]="iconTemplate">
      <nz-breadcrumb-item><a class="text-sm text-dark dark:text-white/[.87] hover:text-primary" [routerLink]="['/pages/knowledge-base/knowledge']">Doc Home</a></nz-breadcrumb-item>
      <nz-breadcrumb-item class="text-light-extra dark:text-white/60">Plugins</nz-breadcrumb-item>
    </nz-breadcrumb>
    <ng-template #iconTemplate><span class="text-[10px] text-light-extra" nz-icon nzType="right"></span></ng-template>
  </div>

  <div class="flex justify-between flex-start lg:flex-col gap-x-[100px] gap-y-[40px] mb-14 flex-wrap">
     <div nz-row nzGutter="50" *ngFor="let section of jsonData">
        <div nz-col nzXs="24" nzXl="8">
           <div class="min-w-[260px] sm:min-w-full">
              <h2 class="text-dark dark:text-white/[.87] text-[23px] font-medium">{{ section.sections[0].title }}</h2>
           </div>
        </div>
        <div nz-col nzXl="16">
           <div nz-row nzGutter="50">
              <div nz-col nzXs="24" nzXl="12">
                 <ul class="flex flex-col flex-wrap mb-0">
                    <li class="mb-4" *ngFor="let item of section.sections[0].items">
                       <a class="font-normal text-body dark:text-white/60 hover:text-primary text-15" [routerLink]='item.link'>{{ item.text }}</a>
                    </li>
                 </ul>
              </div>
              <div nz-col nzXs="24" nzXl="12">
                 <nz-collapse nzAccordion>
                    <nz-collapse-panel *ngFor="let panel of section.sections[1].panels" [nzHeader]="panel.name" [nzActive]="panel.active">
                       <ul class="bg-transparent">
                          <li class="mb-4" *ngFor="let item of panel.items">
                             <a class="font-normal text-body dark:text-white/60 hover:text-primary text-15" [routerLink]='item.link'>{{ item.text }}</a>
                          </li>
                       </ul>
                    </nz-collapse-panel>
                 </nz-collapse>
                 <ul class="flex flex-col flex-wrap mb-0">
                    <li class="mb-4" *ngFor="let item of section.sections[2].items">
                       <a class="font-normal text-body dark:text-white/60 hover:text-primary text-15" [routerLink]='item.link'>{{ item.text }}</a>
                    </li>
                 </ul>
              </div>
           </div>
        </div>
     </div>
  </div>

  <div class="pt-[54px] border-t border-normal dark:border-white/10">
    <div class="text-center">
      <h2 class="mb-3 font-semibold text-dark dark:text-white/[.87] text-[22px]">Still no luck? We can help!</h2>
      <p class="mb-[30px] text-body dark:text-white/60 text-[15px] font-normal">Contact us and we’ll get back to you as soon as possible.</p>
      <button nz-button class=" mx-auto px-8 h-[50px] text-sm font-medium bg-primary border-primary hover:bg-primary-hbr text-white rounded-4">
          <span>Submit a Request</span>
      </button>
    </div>
  </div>


  `,
  styles: [`
    :host ::ng-deep nz-breadcrumb nz-breadcrumb-item:not(:last-child) .ant-breadcrumb-separator{
      @apply text-dark dark:text-white/[.87] inline-flex items-center;
    }
    :host ::ng-deep .ant-collapse{
      @apply border-none bg-transparent;
    }
    :host ::ng-deep .ant-collapse > .ant-collapse-item{
      @apply border-none mb-4;
    }
    :host ::ng-deep .ant-collapse > .ant-collapse-item > .ant-collapse-header{
      @apply pt-0 pb-0 bg-transparent px-0 font-normal text-body dark:text-white/60 hover:text-primary text-15;
    }
    :host ::ng-deep .ant-collapse-content{
      @apply border-none bg-transparent;
    }
    :host ::ng-deep .ant-collapse-content > .ant-collapse-content-box{
      @apply p-[25px] pt-[15px];
    }
  `]
})

export class AllArticleItems  implements OnInit  {
  jsonData: any;

  constructor(private jsonDataService: JsonDataService) {}

  ngOnInit(): void {
    this.jsonDataService.getData().subscribe((data) => {
      this.jsonData = data;
    });
  }
}

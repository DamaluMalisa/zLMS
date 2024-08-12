import { Component } from '@angular/core';

@Component({
  selector: 'app-single-article',
  template: `
  <div class="pt-6 pb-10">
    <!-- Breadcrumb -->
    <nz-breadcrumb [nzSeparator]="iconTemplate">
      <nz-breadcrumb-item><a class="text-sm text-dark dark:text-white/[.87] hover:text-primary" [routerLink]="['/pages/knowledge-base/knowledge']">Doc Home</a></nz-breadcrumb-item>
      <nz-breadcrumb-item class="text-sm text-dark dark:text-white/[.87] hover:text-primary">Switch between accounts</nz-breadcrumb-item>
      <nz-breadcrumb-item class="text-sm text-dark dark:text-white/[.87] hover:text-primary">Introduction to Plugin</nz-breadcrumb-item>
      <nz-breadcrumb-item class="text-light-extra dark:text-white/60">Plugins</nz-breadcrumb-item>
    </nz-breadcrumb>
     <!-- End: Breadcrumb -->
    <ng-template #iconTemplate><span class="text-[10px] text-light-extra" nz-icon nzType="right"></span></ng-template>
  </div>

  <div class="flex justify-between flex-start max-lg:flex-col gap-x-[100px] gap-y-[40px] mb-14">
     <div class="flex max-lg:flex-wrap">

        <!-- Left Side -->
        <div [ngClass]="{
  'fixed top-[70px] left-0 visible opacity-1 z-10 h-screen bg-white dark:bg-[#1b1b28] w-[330px] border-normal border-r dark:border-white/10 translate-x-0  overflow-y-auto transition': isClassActive,
  'min-w-[330px] max-w-[330px] lg:h-fit me-5 border lg:border-normal lg:dark:border-white/10 lg:rounded-6 max-lg:overflow-hidden max-lg:opacity-0 max-lg:left-[330px] max-lg:fixed max-lg:translate-x-[-330px]': !isClassActive
}">
          <!-- left Title -->
          <h4 class="px-[18px] py-5 text-dark  dark:text-white/[.87] text-base border-b border-normal dark:border-white/10 font-semibold flex items-center justify-between">
            Plugins
            <button nz-button class="w-[36px] h-[36px] lg:hidden max-lg:inline-flex items-center justify-center bg-danger border-danger hover:bg-danger-hbr text-white text-[20px] rounded-6" (click)="toggleClass()">
            <span nz-icon nzType="close" nzTheme="outline"></span>
          </button>
          </h4>

          <!-- Collapse Nav Menu -->
          <nz-collapse nzAccordion class="sidebar-collapse py-[30px] px-[25px]">
            <nz-collapse-panel [nzHeader]="headerTemplate1" [nzActive]="true">
              <!-- Collapse Content -->
              <ul class="relative after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:bg-[#eaebef] dark:after:bg-white/10 h-auto mt-2.5 ltr:ml-6 rtl:mr-6 visible">
                <li>
                  <div (click)="selectTab('tab1')" [ngClass]="{ 'active': activeTab === 'tab1' }" class="cursor-pointer relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white/60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10 after:bg-transparent [&.active]:after:bg-primary" href="#">Switch between accounts</div>
                </li>
                <li>
                  <div (click)="selectTab('tab2')" [ngClass]="{ 'active': activeTab === 'tab2' }" class="cursor-pointer relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white/60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10 after:bg-transparent [&.active]:after:bg-primary" href="#">Installing vendor marketplace lorem vendor marketplace</div>
                </li>
                <li>
                  <div (click)="selectTab('tab3')" [ngClass]="{ 'active': activeTab === 'tab3' }" class="cursor-pointer relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white/60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10 after:bg-transparent [&.active]:after:bg-primary" href="#">Stop getting emails from lorem</div>
                </li>
                <li>
                  <div (click)="selectTab('tab4')" [ngClass]="{ 'active': activeTab === 'tab4' }" class="cursor-pointer relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white/60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10 after:bg-transparent [&.active]:after:bg-primary" href="#">Threads to organize discussions</div>
                </li>
                <li>
                  <div (click)="selectTab('tab5')" [ngClass]="{ 'active': activeTab === 'tab5' }" class="cursor-pointer relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white/60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10 after:bg-transparent [&.active]:after:bg-primary" href="#">Understand your actions in lorem</div>
                </li>
              </ul>
            </nz-collapse-panel>
            <nz-collapse-panel [nzHeader]="headerTemplate2" [nzActive]="false">
              <!-- Collapse Content -->
              <ul class="relative after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:bg-[#eaebef] dark:after:bg-white/10 h-auto mt-2.5 ltr:ml-6 rtl:mr-6 visible">
                <li>
                  <div (click)="selectTab('tab6')" [ngClass]="{ 'active': activeTab === 'tab6' }" class="cursor-pointer relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white/60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10 after:bg-transparent [&.active]:after:bg-primary" href="#">Switch between accounts</div>
                </li>
                <li>
                  <div (click)="selectTab('tab7')" [ngClass]="{ 'active': activeTab === 'tab7' }" class="cursor-pointer relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white/60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10 after:bg-transparent [&.active]:after:bg-primary" href="#">Installing vendor marketplace lorem vendor marketplace</div>
                </li>
                <li>
                  <div (click)="selectTab('tab8')" [ngClass]="{ 'active': activeTab === 'tab8' }" class="cursor-pointer relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white/60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10 after:bg-transparent [&.active]:after:bg-primary" href="#">Stop getting emails from lorem</div>
                </li>
                <li>
                  <div (click)="selectTab('tab9')" [ngClass]="{ 'active': activeTab === 'tab9' }" class="cursor-pointer relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white/60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10 after:bg-transparent [&.active]:after:bg-primary" href="#">Threads to organize discussions</div>
                </li>
                <li>
                  <div (click)="selectTab('tab10')" [ngClass]="{ 'active': activeTab === 'tab10' }" class="cursor-pointer relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white/60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10 after:bg-transparent [&.active]:after:bg-primary" href="#">Understand your actions in lorem</div>
                </li>
              </ul>
            </nz-collapse-panel>
          </nz-collapse>
          <!-- Collapse Nav Menu -->

          <!-- Define a template for the nzHeader content for the collapse panel -->
          <ng-template #headerTemplate1>
            <div class="flex items-center text-base font-medium text-dark dark:text-white/[.87] gap-[10px] cursor-pointer">
              <span class="custom-header-class">Introduction to Plugin</span>
            </div>
          </ng-template>
          <ng-template #headerTemplate2>
            <div class="flex items-center text-base font-medium text-dark dark:text-white/[.87] gap-[10px] cursor-pointer">
              <span class="custom-header-class">Productivity tools for your Plugin admin & change password</span>
            </div>
          </ng-template>
        </div>
        <!-- End: Left Side -->

        <!-- Responsive offcanvas button -->
        <div class="flex justify-center items-center lg:hidden max-lg:inline-flex w-full">
          <button nz-button class="w-[36px] h-[36px] inline-flex items-center justify-center bg-primary border-primary text-white text-[20px] rounded-6 mb-[20px]" (click)="toggleClass()">
            <span nz-icon nzType="align-left" nzTheme="outline"></span>
          </button>
        </div>

        <!-- Right side -->
        <app-tab [activeTab]="'tab1'">
          <div *ngIf="activeTab === 'tab1'">
            <!-- Content for Tab 1 -->

            <article class="mb-10">
              <h2 class="mb-7 text-dark dark:text-white/[.87] text-3xl max-lg:text-[26px] max-sm:text-2xl max-ssm:text-[22px] font-semibold">Switch between accounts</h2>
              <div class="mb-10">
                  <h4 class="mb-4 font-semibold text-22 max-sm:text-xl max-ssm:text-lg">
                    <a class="text-dark dark:text-white/[.87]" href="#">Configuration</a>
                  </h4>
                  <p class="md:mb-10 max-md:7 font-normal text-dark dark:text-white/[.87] text-15">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet….</p>
                  <button nz-button class="btn-more hover:text-primary uppercase text-[12px] font-medium [&>span]:underline border-none bg-transparent p-0 shadow-none text-dark dark:text-white/[.87]">Read More</button>

              </div>
            </article>

            <article class="mb-10">
              <h4 class="mb-4 font-semibold text-22 max-sm:text-xl max-ssm:text-lg">
                <a class="text-dark dark:text-white/[.87]" href="#">Research and experiments</a>
              </h4>
              <p class="mb-0 font-normal text-dark dark:text-white/[.87] text-15">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</p>
              <div class="mt-8">
                <img class="w-full rounded-4" src="assets/images/researchExperiment.png" alt="research">
              </div>
            </article>

             <article class="mb-10">
              <nz-collapse nzAccordion>
                  <nz-collapse-panel class="mb-[30px]" nzHeader="Measuring elevation" [nzActive]="false">
                    <p class="mt-[20px] mb-10 font-normal text-dark dark:text-white/[.87] text-15">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet….</p>
                    <button nz-button class="btn-more hover:text-primary uppercase text-[12px] font-medium [&>span]:underline border-none bg-transparent p-0 shadow-none">Read More</button>
                  </nz-collapse-panel>
                  <nz-collapse-panel nzHeader="Research and experiments" [nzActive]="false">
                    <p class="mt-[20px] mb-10 font-normal text-dark dark:text-white/[.87] text-15">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet….</p>
                    <button nz-button class="btn-more hover:text-primary uppercase text-[12px] font-medium [&>span]:underline border-none bg-transparent p-0 shadow-none text-dark dark:text-white/[.87]">Read More</button>
                  </nz-collapse-panel>
              </nz-collapse>
             </article>

            <div class="mb-10">
              <span class="text-sm text-body dark:text-white/60"><span>Last updated:</span><span>June 7, 2019</span></span>
              <div class="flex items-center justify-center flex-wrap gap-x-10 gap-y-[15px] min-h-[106px] p-[15px] my-[25px] border border-normal dark:border-white/10 shadow-[0_5px_10px_rgba(10,10,10,0.06)] rounded-[5px]">
                <h4 class="mb-0 text-dark dark:text-white/60">Was this article helpful?</h4>
                <div class="flex items-center gap-2.5">
                  <button nz-button class="inline-flex items-center justify-center rounded-4 px-4 bg-transparent border h-9 text-success border-success">
                    <span nz-icon nzType="smile" nzTheme="outline"></span>
                    <span>Yes</span>
                  </button>
                  <button nz-button class="inline-flex items-center justify-center rounded-4 px-4 bg-transparent border h-9 text-warning border-warning">
                    <span nz-icon nzType="meh" nzTheme="outline"></span>
                    <span>No</span>
                  </button>
                </div>
              </div>
              <div class="flex items-center justify-between flex-wrap gap-[15px] pb-[42px] mb-[25px] border-b border-normal dark:border-white/10">
                <div class="text-base font-medium flex items-center flex-wrap gap-[14px]">
                  <span class="text-body dark:text-white/60">Still need help?</span>
                  <a class="text-link hover:text-link/80" href="#">Submit a Request</a>
                </div>
                <ul class="flex items-center mb-0 gap-[10px]">
                  <li>
                    <span class="text-sm font-normal text-body dark:text-white/60">Share this article:</span>
                  </li>
                  <li>
                    <a href="#" class="text-[#8C90A4] dark:text-white/60 hover:text-primary">
                      <svg-icon class="[&>svg]:w-[16px] [&>svg]:h-[16px] text-current" src="assets/images/svg/unicons-line/facebook.svg"></svg-icon>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-[#8C90A4] dark:text-white/60 hover:text-primary">
                      <svg-icon class="[&>svg]:w-[16px] [&>svg]:h-[16px] text-current" src="assets/images/svg/unicons-line/twitter.svg"></svg-icon>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-[#8C90A4] dark:text-white/60 hover:text-primary">
                      <svg-icon class="[&>svg]:w-[16px] [&>svg]:h-[16px] text-current" src="assets/images/svg/pinterest.svg"></svg-icon>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-[#8C90A4] dark:text-white/60 hover:text-primary">
                      <svg-icon class="[&>svg]:w-[16px] [&>svg]:h-[16px] text-current" src="assets/images/svg/unicons-line/copy.svg"></svg-icon>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="mb-11">
              <ul class="flex items-center sm:justify-between max-sm:justify-center gap-[10px] max-sm:flex-wrap">
                <li class="max-sm:text-center">
                  <a href="#">
                    <span class="mb-1.5 text-light dark:text-white/60 text-[13px] inline-flex items-center font-medium">
                      <span nz-icon nzType="left" nzTheme="outline" class="inline-block text-[12px] me-2"></span>
                      <span>Previous article</span>
                    </span>
                    <h5 class="text-sm text-dark dark:text-white/[.87] font-semibold">Stop getting emails from lorem</h5>
                  </a>
                </li>
                <li class="sm:text-end max-sm:text-center">
                  <a href="#">
                    <span class="mb-1.5 text-light dark:text-white/60 text-[13px] sm:text-end max-sm:text-center inline-flex items-center font-medium">
                      <span>Next article</span>
                      <span nz-icon nzType="right" nzTheme="outline" class="inline-block text-[12px] ms-2"></span>
                    </span>
                    <h5 class="text-sm text-dark dark:text-white/[.87] font-semibold">Use threads to organize discussions</h5>
                  </a>
                </li>
              </ul>
            </div>

            <div class="mb-[30px] pt-6 px-[30px] pb-[26px] border border-normal dark:border-white/10 rounded-4">
              <h4 class="mb-[18px] text-dark dark:text-white/[.87] text-xl font-medium">Related articles</h4>
              <ul class="mb-0">
                <li class="mb-[10px]">
                  <a class="flex items-center group" href="#">
                    <span class="me-4">
                      <span class="text-[#ccd4de] dark:text-white/60 text-base group-hover:text-primary inline-flex items-center" nz-icon nzType="file-text" nzTheme="outline"></span>
                    </span>
                    <h5 class="mb-0 text-body dark:text-white/60 text-15 group-hover:text-primary">Installing loremm ulti vendor marketplace</h5>
                  </a>
                </li>
                <li class="mb-[10px]">
                  <a class="flex items-center group" href="#">
                    <span class="me-4">
                      <span class="text-[#ccd4de] dark:text-white/60 text-base group-hover:text-primary inline-flex items-center" nz-icon nzType="file-text" nzTheme="outline"></span>
                    </span>
                    <h5 class="mb-0 text-body dark:text-white/60 text-15 group-hover:text-primary">Copyright and trademarks</h5>
                  </a>
                </li>
                <li>
                  <a class="flex items-center group" href="#">
                    <span class="me-4">
                      <span class="text-[#ccd4de] dark:text-white/60 text-base group-hover:text-primary inline-flex items-center" nz-icon nzType="file-text" nzTheme="outline"></span>
                    </span>
                    <h5 class="mb-0 text-body dark:text-white/60 text-15 group-hover:text-primary">Stop getting emails from lorem</h5>
                  </a>
                </li>
              </ul>
            </div>
            <div class="mb-[30px] pt-6 px-[30px] pb-[26px] border border-normal dark:border-white/10 rounded-4">
              <h4 class="mb-[18px] text-dark dark:text-white/[.87] text-xl font-medium">Leave comment</h4>
              <form nz-form>
                <nz-form-item nzGutter="25" class="mb-0">
                  <nz-form-control nz-col nzXs="24" nzXl="12" class="mb-[15px]">
                    <nz-form-label class="flex items-center font-medium dark:text-white/60 mb-[10px] p-0"
                      nzFor="textarea1">Name
                    </nz-form-label>
                    <input
                    class="w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60"
                    nz-input name="name" type="text" placeholder="Name">
                  </nz-form-control>
                  <nz-form-control nz-col nzXs="24" nzXl="12" class="mb-[15px]">
                    <nz-form-label class="flex items-center font-medium dark:text-white/60 mb-[10px] p-0"
                      nzFor="textarea1">Email Address
                    </nz-form-label>
                    <input
                    class="w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60"
                    nz-input name="name" type="text" placeholder="Email">
                  </nz-form-control>
                </nz-form-item>
                <nz-form-item nzGutter="25" class="mb-0">
                  <nz-form-control nz-col nzXs="24">
                    <nz-form-label class="flex items-center font-medium dark:text-white/60 mb-[10px] p-0"
                      nzFor="textarea1">Comment
                    </nz-form-label>
                    <textarea
                      class="w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[118px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60 resize-none"
                      nz-input id="textarea1"></textarea>
                  </nz-form-control>
                </nz-form-item>
              </form>
            </div>
          </div>
          <div *ngIf="activeTab === 'tab2'">
            <!-- Content for Tab 2 -->
            <p class="text-dark dark:text-white/[.87]">File not found</p>
          </div>
          <div *ngIf="activeTab === 'tab3'">
            <!-- Content for Tab 3 -->
            <p class="text-dark dark:text-white/[.87]">File not found</p>
          </div>
          <div *ngIf="activeTab === 'tab4'">
            <!-- Content for Tab 3 -->
            <p class="text-dark dark:text-white/[.87]">File not found</p>
          </div>
          <div *ngIf="activeTab === 'tab5'">
            <!-- Content for Tab 3 -->
            <p class="text-dark dark:text-white/[.87]">File not found</p>
          </div>
        </app-tab>
        <!-- End: Right Side -->
     </div>
  </div>

  `,
  styles: [`
    /* SIDEBAR COLLAPSE */
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
      @apply p-0;
    }

    /* Article collapse */
    :host ::ng-deep article .ant-collapse > .ant-collapse-item > .ant-collapse-header{
      @apply text-[22px] font-semibold text-dark dark:text-white/[.87] ;
    }
    :host ::ng-deep article .ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow{
      @apply w-[28px] h-[28px] inline-flex items-center justify-center rounded-full shadow-[0_2px_2px_rgba(146,148,159,0.19)];
    }
  `]
})

export class AppSingleArticleComponent  {
  isClassActive: boolean = false;
  activeTab: string = 'tab1';

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  toggleClass() {
    this.isClassActive = !this.isClassActive;
  }


}

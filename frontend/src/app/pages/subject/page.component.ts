import {
  Component,
  OnInit,
  Inject
} from '@angular/core';
import {
  DOCUMENT
} from '@angular/common';
import {PageModel} from '../../core/models/page-model.model';
import {PageModelService} from '../../core/services/page.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BundleNavigationService} from '../../core/services/bundle-navigation.service';

@Component({
  selector: 'app-pages',
  template: `
    <!-- skeleton -->
    <ng-template #loadingSkeleton>
      <nz-skeleton [nzActive]="true" [nzParagraph]="{ rows: 12 }" [nzShape]="circle" class="bg-white dark:bg-white/10 rounded-6 p-[30px] pt-[15px]"></nz-skeleton>
    </ng-template>
    <!-- skeleton -->
    <ng-container *ngIf="showContent; else loadingSkeleton">
    <ng-container *ngIf="page">
      <div class="mail-content bg-white dark:bg-[#1b1c29] rounded-[10px]">
        <div
          class="flex items-center justify-between max-3xl:justify-center px-[30px] py-[12px] border-b border-regular dark:border-white/10">
          <table class="w-full overflow-x-auto">
            <thead>
            <tr
              class="max-3xl:flex max-3xl:items-center max-3xl:flex-col max-3xl:justify-center max-3xl:gap-[15px]">
              <th class="text-start sm:w-[4%]">
                <a class="inline-flex items-center justify-center bg-transparent text-light-extra dark:text-white/60 w-[38px] h-[38px] rounded-full hover:bg-primary/10 hover:text-primary dark:hover:text-primary"
                   (click)="closePage()">
                        <span class="[&>svg]:w-[12px] [&>svg]:h-[12px]" nz-icon nzType="arrow-left"
                              nzTheme="outline"></span>
                </a>
              </th>
              <th>
                <div class="flex items-center">
                  <a aria-current="page"
                     class="inline-flex items-center justify-center bg-transparent text-light-extra dark:text-white/60 w-[38px] h-[38px] rounded-full hover:bg-primary/10 hover:text-primary dark:hover:text-primary active"
                     href="/" nzTooltipTitle="Refresh" nzTooltipPlacement="bottomRight" nz-tooltip>
                    <span nz-icon nzType="reload" nzTheme="outline"></span>
                  </a>
                </div>
              </th>
              <th>
              </th>
            </tr>
            </thead>
          </table>
        </div>
        <div class="xs:px-[25px]">
          <div class=" py-[30px] px-[25px]  border-b border-regular dark:border-white/10">
            <div class="flex items-center justify-between flex-wrap sm:gap-[15px] sm:y-[1px] max-sm:gap-[5px]">
              <h6 class="text-dark dark:text-white/[.87] text-[24px] font-semibold leading-[30px] mb-[5px]">
                {{page[0].title}}
              </h6>
              <div class="flex items-center gap-[8px]">
                <button nz-button
                        class="inline-flex items-center justify-center flex-col bg-transparent text-light-extra dark:text-white/60 w-[38px] h-[38px] rounded-full hover:bg-primary/10 hover:text-primary border-none shadow-none">
                  <span class="m-0 [&>svg]:w-[10px] [&>svg]:h-[10px]" nz-icon nzType="up" nzTheme="outline"></span>
                  <span class="m-0 [&>svg]:w-[10px] [&>svg]:h-[10px]" nz-icon nzType="down"
                        nzTheme="outline"></span>
                </button>
                <button nz-button
                        class="inline-flex items-center justify-center flex-col bg-transparent text-light-extra dark:text-white/60 w-[38px] h-[38px] rounded-full hover:bg-primary/10 hover:text-primary border-none shadow-none">
                  <span nz-icon nzType="printer" nzTheme="outline"></span>
                </button>
              </div>
            </div>
            <div class="flex-wrap items-center justify-between md:mb-[20px] md:mt-5 flex max-md:mb-[30px] gap-y-[20px]">
              <div class="flex items-center media  gap-5">
                <nz-avatar class="2xl:w-[60px] 2xl:h-[60px] min-w-[50px] h-[50px] rounded-full" nzIcon="user"></nz-avatar>
                <div class="ms-[10]">
                </div>
              </div>
              <div class="flex items-center max-xs:flex-wrap gap-[20px]">
                <div class="flex items-center text-light dark:text-white/60">
                  {{ page[0].timestamp | date: 'medium' }}
                </div>
              </div>
            </div>
            <div>
              <div class="px-[80px] max-sm:px-0">
              <div class="xs:mb-[17px] text-[17px] leading-[24px] max-xs:mb-[30px">
  <p [innerHTML]="page[0].pageContent" class="inline-block mb-[15px] text-body dark:text-white/60"></p>
</div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex items-start justify-between flex-wrap mb-[50px] p-[30px] shadow-[0_15px_40px_rgba(116,116,116,0.06)] gap-y-[10px]">
          <nav class="xs:ps-[100px] pb-[30px]">
            <ul class="flex items-center flex-wrap max-xs:justify-center gap-2.5 mb-0">
              <li>
                <button nz-button (click)="navigateToPrevious()"
                        [disabled]="bundleNavigationService.currentIndex === 0"
                        class="inline-flex items-center h-10 px-[20px] gap-x-1 text-body border dark:text-white/60 dark:hover:text-white dark:border-white/10 rounded hover:bg-primary hover:text-white group transition duration-150 dark:bg-transparent">
                  <svg-icon class="[&>svg]:w-[16px] [&>svg]:h-[16px] group-hover:text-white"
                            src="assets/images/svg/feather/corner-up-left.svg"></svg-icon>
                  Previous
                </button>
              </li>
              <li>
                <button nz-button (click)="navigateToNext()"
                        [disabled]="bundleNavigationService.currentIndex === bundleNavigationService.materials.length - 1"
                        class="inline-flex items-center h-10 px-[20px] gap-x-1 text-body border dark:text-white/60 dark:hover:text-white dark:border-white/10 rounded hover:bg-primary hover:text-white group transition duration-150 dark:bg-transparent">
                  <svg-icon class="[&>svg]:w-[16px] [&>svg]:h-[16px] group-hover:text-white"
                            src="assets/images/svg/feather/corner-up-right.svg"></svg-icon>
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </ng-container>
    </ng-container>
  `,
})

export class PageComponent implements OnInit {
  constructor(private pageService: PageModelService,
              protected bundleNavigationService: BundleNavigationService,
              @Inject(DOCUMENT) private document: Document,
              private route: ActivatedRoute,
              public router: Router) {}
  page: PageModel[];
  showContent = false;
  isLoading = true;

  ngOnInit(): void {

    const pageId = Number(this.route.snapshot.paramMap.get('id'));

    this.pageService.getById([pageId]).subscribe({
      next: (page: PageModel[]) => {
        this.page = page;
        const currentMaterialIndex = this.bundleNavigationService.materials.findIndex(
          (material) => 'id' in material && material.id === page[0].id
        );
        this.bundleNavigationService.setCurrentIndex(currentMaterialIndex);
      },
      error: () => {},
    });
    this.isLoading = false;
    this.showContent = true;
  }

  navigateToPrevious(): void {
    this.bundleNavigationService.navigateToPrevious();
  }

  navigateToNext(): void {
    this.bundleNavigationService.navigateToNext();
  }

  /* Editor */
  isDarkMode(): boolean {
    return this.document.body.classList.contains('dark');
  }




  closePage() {
    const subjectId = this.route.snapshot.parent.paramMap.get('id');
    this.router.navigate(['/pages/subject', subjectId, 'pages']).catch(error => {
      console.error('Navigation error:', error);
    });
  }
}

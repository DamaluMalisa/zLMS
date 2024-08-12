import {
  Component,
  OnInit,
  Inject
} from '@angular/core';
import {
  DOCUMENT
} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {BundleService} from '../../core/services/bundle.service';
import {Bundle} from '../../core/models/bundle.model';
import {PageModel} from '../../core/models/page-model.model';
import {Assignment} from '../../core/models/assignment.model';
import {Quiz} from '../../core/models/quiz.model';
import {AssignmentService} from '../../core/services/assignment.service';
import {PageModelService} from '../../core/services/page.service';
import {QuizService} from '../../core/services/quiz.service';
import {BundleNavigationService} from '../../core/services/bundle-navigation.service';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-bundles',
  template: `
      <div class="text-warning px-[25px] pb-[50px] pt-[5px]" *ngIf="bundles.length === 0">
        <nz-empty></nz-empty>
      </div>
      <div class="mail-content" *ngIf="isPageListOpen && bundles.length > 0">
        <div
          class="flex items-center justify-between px-[30px] py-[12px] border-b border-regular dark:border-white/10">
          <table class="w-full overflow-x-auto">
            <thead>
            <tr
              class="max-3xl:flex max-3xl:items-center max-3xl:flex-col max-3xl:justify-center max-3xl:gap-[15px]">
              <div nz-row nzGutter="25" class="mt-[4px]">
                <div nz-col nzXs="24" nzMd="12" class="mb-[25px]">
                  <div class="flex items-center flex-wrap gap-[20px]  max-lg:justify-center">
                    <!-- Search Box -->
                    <div class="3xl:w-[280px] max-ssm:w-full [&>div>div.ant-select-selector]:border-0">
                      <nz-input-group class="bg-normalBG dark:bg-white/10 rounded-[4px] h-[40px] flex items-center px-[20px]">
                        <input class="bg-transparent border-none text-[15px] shadow-none text-dark dark:text-white/[.87] flex items-center"
                               type="text" nz-input
                               placeholder="Search...">
                        <i class="text-theme-gray dark:text-white/[.87]" nz-icon nzType="search"></i>
                      </nz-input-group>
                    </div>
                    <!-- :End Search Box -->
                  </div>
                </div>
                <div nz-col nzXs="24" nzMd="12" class="mb-[25px]">
                  <!-- New Contact -->
                  <div class="flex items-center justify-end max-md:justify-center">
                    <button class="flex items-center px-[25px] text-sm text-white font-semibold bg-primary border-primary h-11 gap-[6px]"
                            nz-button (click)="createBundle()">
                      <i nz-icon nzType="plus"></i>
                      <span class="m-0">Bundle</span>
                    </button>
                  </div>
                  <!-- end: New Contact -->
                </div>
              </div>
            </tr>
            </thead>
          </table>
        </div>
<!--        <div-->
<!--          class="flex items-center justify-between px-[30px] py-[12px] border-b border-regular dark:border-white/10">-->
<!--          <table class="w-full overflow-x-auto">-->
<!--          </table>-->
<!--        </div>-->
        <div class="overflow-x-auto">
          <div class="px-[25px] pb-[50px] pt-[5px]">
          <nz-collapse nzAccordion class="bg-transparent" *ngIf="bundles" [nzBordered]="false">
            <nz-collapse-panel
              (nzActiveChange)="activePanelIndex = i"
              *ngFor="let bundle of bundles; let i = index"
              [nzActive]="i === 0"
              [nzBordered]="false"
              [nzDisabled]="false"
              [nzExpandIcon]="expandIcon"
              [nzHeader]="bundle.title"
              [nzShowArrow]="true"
              class="{{ collapsePanelClass }}"
            >
              <div
                class="flex items-center px-[30px] py-[15px] border-b border-regular dark:border-white/10 last:border-none "
                *ngFor="let item of pages">
                <nz-table class="w-full list-info"  (click)="viewPage(item)">
                  <tr
                    class="3xl:[&>td:first-child]:w-[30%] max-3xl:[&>td:first-child]:max-w-[200px] max-3xl:[&>td:first-child]:min-w-[200px] max-lg:contents max-xl:gap-[10px] flex items-center">
                    <td class="list-sender px-[15px]">
                      <div class="flex items-center gap-[10px]">
                        <span style="font-size: 24px;" class="w-[18px] h-[18px] ltr:mr-[10px] rtl:ml-[10px] text-body dark:text-white/60" nz-icon nzType="file-text" nzTheme="outline"></span>
                      </div>
                    </td>
                    <td class="list-content px-[15px] w-full">
                      <div class="list-msg text-start">
                        <h1 class="text-[15px] font-medium inline-flex items-center gap-[10px]">
                          <div class="text-body dark:text-white/60">
                            {{item.title}}
                          </div>
                        </h1>
                        <p class="m-0 list-text text-body dark:text-white/60 max-lg:mt-[15px] max-lg:mb-[10px]">
                          {{formatBody(item.content | truncate:20 )}}</p>
                      </div>
                    </td>
                    <td class="list-date px-[15px] xl:text-end max-lg:text-end whitespace-nowrap">
                      <span class="text-body dark:text-white/60 text-[13px] font-normal"> {{ item.timestamp | date: 'medium' }}</span>
                    </td>
                  </tr>
                </nz-table>
              </div>
              <div
                class="flex items-center px-[30px] py-[15px] border-b border-regular dark:border-white/10 last:border-none "
                *ngFor="let item of assignments">
                <nz-table class="w-full list-info"  (click)="viewAssignment(item)">
                  <tr
                    class="3xl:[&>td:first-child]:w-[30%] max-3xl:[&>td:first-child]:max-w-[200px] max-3xl:[&>td:first-child]:min-w-[200px] max-lg:contents max-xl:gap-[10px] flex items-center">
                    <td class="list-sender px-[15px]">
                      <div class="flex items-center gap-[10px]">
                        <span style="font-size: 24px;" class="w-[18px] h-[18px] ltr:mr-[10px] rtl:ml-[10px] text-body dark:text-white/60" nz-icon nzType="form" nzTheme="outline"></span>
                      </div>
                    </td>
                    <td class="list-content px-[15px] w-full">
                      <div class="list-msg text-start">
                        <h1 class="text-[15px] font-medium inline-flex items-center gap-[10px]">
                          <div class="text-body dark:text-white/60">
                            {{item.title}}
                          </div>
                        </h1>
                        <p class="m-0 list-text text-body dark:text-white/60 max-lg:mt-[15px] max-lg:mb-[10px]">
                          Pts {{item.points}}  |  Available {{item.availableFrom | date: 'medium' }}  |  Due {{item.dueDate | date: 'medium' }}</p>
                      </div>
                    </td>
                    <td class="list-date px-[15px] xl:text-end max-lg:text-end whitespace-nowrap">
                      <span class="text-body dark:text-white/60 text-[13px] font-normal"> {{ item.timestamp | date: 'medium' }}</span>
                    </td>
                  </tr>
                </nz-table>
              </div>
              <div
                class="flex items-center px-[30px] py-[15px] border-b border-regular dark:border-white/10 last:border-none "
                *ngFor="let item of quizzes">
                <nz-table class="w-full list-info"  (click)="viewQuiz(item)">
                  <tr
                    class="3xl:[&>td:first-child]:w-[30%] max-3xl:[&>td:first-child]:max-w-[200px] max-3xl:[&>td:first-child]:min-w-[200px] max-lg:contents max-xl:gap-[10px] flex items-center">
                    <td class="list-sender px-[15px]">
                      <div class="flex items-center gap-[10px]">
                        <span style="font-size: 24px;" class="w-[18px] h-[18px] ltr:mr-[10px] rtl:ml-[10px] text-body dark:text-white/60" nz-icon nzType="alert" nzTheme="outline"></span>
                      </div>
                    </td>
                    <td class="list-content px-[15px] w-full">
                      <div class="list-msg text-start">
                        <h1 class="text-[15px] font-medium inline-flex items-center gap-[10px]">
                          <div class="text-body dark:text-white/60">
                            {{item.title}}
                          </div>
                        </h1>
                        <p class="m-0 list-text text-body dark:text-white/60 max-lg:mt-[15px] max-lg:mb-[10px]">
                          Pts {{item.points}}  | Available {{item.availableFrom | date: 'medium' }}  |  Due {{item.dueDate | date: 'medium' }}</p>
                      </div>
                    </td>
                    <td class="list-date px-[15px] xl:text-end max-lg:text-end whitespace-nowrap">
                      <span class="text-body dark:text-white/60 text-[13px] font-normal"> {{ item.timestamp | date: 'medium' }}</span>
                    </td>
                  </tr>
                </nz-table>
              </div>
            </nz-collapse-panel>
          </nz-collapse>
          </div>
        </div>
      </div>
`,
})

export class BundlesComponent implements OnInit {
  bundles: Bundle[];
  pages: PageModel[];
  assignments: Assignment[];
  quizzes: Quiz[];
  itemsList: any[] = [];
  createButtonClicked = false;
  isBundleListOpen = true;
  allChecked = false;
  indeterminate = false;
  isPageListOpen = true;
  isValid: boolean;
  dataFetched = false;
  activePanelIndex = 0;
  collapsePanelClass = 'mb-1 font-medium text-dark bg-transparent dark:text-white/[.87] text-15 border-regular border-1 dark:border-white/10 rounded-6 [&>.ant-collapse-content]:border-none [&>.ant-collapse-header]:px-[20px] [&>.ant-collapse-header]:py-[18px] aria-expanded:[&>.ant-collapse-header]:border-b-1 [&>.ant-collapse-header]:border-regular dark:[&>.ant-collapse-header]:border-white/10';

  constructor(private bundleService: BundleService,
              public authService: AuthService,
              private assignmentBundleService: AssignmentService,
              private pageBundleService: PageModelService,
              private quizBundleService: QuizService,
              @Inject(DOCUMENT) private document: Document,
              private route: ActivatedRoute,
              public router: Router,
              private bundleNavigationService: BundleNavigationService ) {}

  ngOnInit(): void {

    const id = Number(this.route.snapshot.parent.paramMap.get('id'));
    this.bundleService.getBySubjectIdAll(id).subscribe({
      next: (bundles: Bundle[]) => {
        this.bundles = bundles;
      },
      error: () => {},
    });
    this.itemsList = [...this.pages, ...this.assignments, ...this.quizzes];
  }

  fetchDataForBundle(bundleId: number): void {
      this.pageBundleService.getByBundleIdAll(bundleId).subscribe({
        next: (pages: PageModel[]) => {
          this.pages = pages;
          this.combineAndSetMaterials();
        },
        error: () => {
        },
      });

      this.quizBundleService.getByBundleIdAll(bundleId).subscribe({
        next: (quizzes: Quiz[]) => {
          this.quizzes = quizzes;
          this.combineAndSetMaterials();
        },
        error: () => {
        },
      });

      this.assignmentBundleService.getByBundleIdAll(bundleId).subscribe({
        next: (assignments: Assignment[]) => {
          this.assignments = assignments;
          this.combineAndSetMaterials();
        },
        error: () => {
        },
      });
  }

  combineAndSetMaterials(): void {
    // Check if all materials have been loaded
    if (this.pages && this.assignments && this.quizzes) {
      const allMaterials = [...this.pages, ...this.assignments, ...this.quizzes];
      console.log(allMaterials);
      this.bundleNavigationService.setMaterials(allMaterials);
    }
  }


  ngAfterViewInit(): void {
    if (!this.dataFetched) {
      this.fetchDataForBundle(this.bundles[this.activePanelIndex].id);
      this.dataFetched = true;
    }
  }


  formatBody = function(body: string) {
    return body.replace(/<(?:.|\n)*?>/gm, ' ');
  };


  viewAssignment(assignment: Assignment) {
    if (this.authService.validateRoles(['ROLE_STUDENT'], 'any')) {
      this.router.navigate(['/pages/subject', this.route.snapshot.parent.paramMap.get('id'), 'take-assignment', assignment.id]).catch(error => {
        console.error('Navigation error:', error);
      });
    } else if (this.authService.validateRoles(['ROLE_TEACHER'], 'any')) {
      this.router.navigate(['/pages/subject', this.route.snapshot.parent.paramMap.get('id'), 'assignment', assignment.id]).catch(error => {
        console.error('Navigation error:', error);
      });
    }
  }
  viewQuiz(quiz: Quiz) {
    this.router.navigate(['/pages/subject', this.route.snapshot.parent.paramMap.get('id'), 'quiz', quiz.id]).catch(error => {
      console.error('Navigation error:', error);
    });
  }
  viewPage(page: PageModel) {
    this.router.navigate(['/pages/subject', this.route.snapshot.parent.paramMap.get('id'), 'page', page.id]).catch(error => {
      console.error('Navigation error:', error);
    });
  }
  createBundle() {
    this.isBundleListOpen = false;
    this.createButtonClicked = true;
  }

}

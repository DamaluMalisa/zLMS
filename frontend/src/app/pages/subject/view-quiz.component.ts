import {
    Component,
    OnInit,
    Inject
  } from '@angular/core';
  import {
    DOCUMENT
  } from '@angular/common';
  import {ActivatedRoute, Router} from '@angular/router';
  import {Quiz} from '../../core/models/quiz.model';
  import {QuizService} from '../../core/services/quiz.service';
  import {BundleNavigationService} from '../../core/services/bundle-navigation.service';
  import { AuthService } from 'src/app/core/services/auth.service';
  
  @Component({
    selector: 'app-quiz',
    template: `
      <!-- skeleton -->
      <ng-template #loadingSkeleton>
        <nz-skeleton [nzActive]="true" [nzParagraph]="{ rows: 12 }" [nzShape]="circle" class="bg-white dark:bg-white/10 rounded-6 p-[30px] pt-[15px]"></nz-skeleton>
      </ng-template>
      <!-- skeleton -->
      <ng-container *ngIf="showContent; else loadingSkeleton">
        <ng-container *ngIf="quiz">
          <div class="mail-content bg-white dark:bg-[#1b1c29] rounded-[10px]">
            <div
              class="flex items-center justify-between max-3xl:justify-center px-[30px] py-[12px] border-b border-regular dark:border-white/10">
              <table class="w-full overflow-x-auto">
                <thead>
                <tr
                  class="max-3xl:flex max-3xl:items-center max-3xl:flex-col max-3xl:justify-center max-3xl:gap-[15px]">
                  <th class="text-start sm:w-[4%]">
                    <a class="inline-flex items-center justify-center bg-transparent text-light-extra dark:text-white/60 w-[38px] h-[38px] rounded-full hover:bg-primary/10 hover:text-primary dark:hover:text-primary"
                       (click)="closeQuiz()">
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
                    {{quiz[0].title}}
                  </h6>
                </div>
                <div class="flex-wrap items-center justify-between md:mb-[20px] md:mt-5 flex max-md:mb-[30px] gap-y-[20px]">
                  <div class="flex items-center media  gap-5">
                    <div class="ms-[10]">
                    </div>
                  </div>
                </div>
                <div class="px-[80px] max-sm:px-0">
                <div class="xs:mb-[17px] text-[17px] leading-[24px] max-xs:mb-[30px">
  <p [innerHTML]="quiz[0].description" class="inline-block mb-[15px] text-body dark:text-white/60"></p>
</div>
                  <div class="pt-[54px] border-regular dark:border-white/10">
                  <div class="overflow-x-auto mb-5">
                    <table class="ic-Table assignment_dates max-w-full w-full">
                      <thead>
                        <tr class="border-b border-regular dark:border-white/10">
                          <th scope="col" class="font-semibold text-lg py-4 px-6">Due</th>
                          <th scope="col" class="font-semibold text-lg py-4 px-6">Created</th>
                          <th scope="col" class="font-semibold text-lg py-4 px-6">Available from</th>
                          <th scope="col" class="font-semibold text-lg py-4 px-6">Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b border-regular dark:border-white/10">
                          <td class="py-3 px-6">{{ quiz[0].dueDate | date: 'medium' }}</td>
                          <td class="py-3 px-6">{{ quiz[0].timestamp | date: 'medium' }}</td>
                          <td class="py-3 px-6">{{ quiz[0].availableFrom | date: 'medium' }}</td>
                          <td class="py-3 px-6">{{ quiz[0].points }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                      <div class="mt-[25px] flex justify-center items-center">
                        <button (click)="takeQuiz(quiz[0])" class="bg-primary hover:bg-primary-hbr inline-flex items-center outline-none shadow-none w-fit duration-300 text-white capitalize px-[20px] text-[15px] border-primary hover:border-primary-hbr rounded-[5px] gap-[8px] h-[46px]" nz-button nzType="primary" >
                          <span>Take Quiz</span>
                          <span nz-icon nzType="arrow-right" nzTheme="outline"></span>
                        </button>
                      </div>
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
        </ng-container>
      </ng-container>
  `,
  })
  
  export class ViewQuizComponent implements OnInit {
    constructor(private quizService: QuizService,
                public authService: AuthService,
                protected bundleNavigationService: BundleNavigationService,
                @Inject(DOCUMENT) private document: Document,
                private route: ActivatedRoute,
                public router: Router) {}
  
    quiz: Quiz[];
    showContent = false;
    isLoading = true;
  
    ngOnInit(): void {
  
      const quizId = Number(this.route.snapshot.paramMap.get('id'));
  
      this.quizService.getById([quizId]).subscribe({
        next: (quiz: Quiz[]) => {
          this.quiz = quiz;
          const currentMaterialIndex = this.bundleNavigationService.materials.findIndex(
            (material) => 'id' in material && material.id === quiz[0].id
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
  


  takeQuiz(quiz: Quiz) {
    if (this.authService.validateRoles(['ROLE_STUDENT'], 'any')) {
      this.router.navigate(['/pages/subject', this.route.snapshot.parent.paramMap.get('id'), 'take-quiz', quiz.id]).catch(error => {
        console.error('Navigation error:', error);
      });
    }
  }



  
  
    closeQuiz() {
      const subjectId = this.route.snapshot.parent.paramMap.get('id');
      this.router.navigate(['/pages/subject', subjectId, 'quizzes']).catch(error => {
        console.error('Navigation error:', error);
      });
    }
  }
  
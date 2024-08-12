import { Component } from '@angular/core';

@Component({
  selector: 'app-blank-page',
  template:`
    <!-- skeleton -->
    <ng-template #loadingSkeleton>
      <nz-skeleton class="bg-white dark:bg-white/10 rounded-6 p-[30px] pt-[15px]" [nzShape]="circle" [nzAvatar]="true" [nzActive]="true"
        [nzParagraph]="{ rows: 1 }"></nz-skeleton>
    </ng-template>
    <!-- skeleton -->
    <div nz-row>
      <div nz-col nzXs="24">
        <ng-container *ngIf="showContent; else loadingSkeleton">
          <div class="bg-white dark:bg-white/10 m-0 p-0 mb-[25px] rounded-10 relative">
            <div class="p-[25px]">
              <h1 class="mb-0 text-lg text-dark dark:text-white/60">Skeleton Page</h1>
            </div>
          </div>
        </ng-container>
      </div>
    </div>
  `,
})
export class BlankPageComponent {
  isLoading = true;
  showContent = false;


  ngOnInit() {
    // Simulate loading time
    this.loadData();
  }

  loadData() {
    // Simulate an asynchronous data loading operation
    setTimeout(() => {
      this.isLoading = false;
      this.showContent = true;
    }, 500);
  }
}

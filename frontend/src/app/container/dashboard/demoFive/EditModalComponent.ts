import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-modal',
  template: `
    <div>
      <p class="text-theme-gray dark:text-white/60 mb-[15px]">Edit Product Title:</p>
      <nz-input-group class="w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none " [nzSuffix]="inputClearTpl">
        <input class="bg-transparent placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60 dark:[&+span>span]:text-white/60" type="text" nz-input [(ngModel)]="updatedTitle" placeholder="Product Title" />
      </nz-input-group>
      <ng-template #inputClearTpl>
        <span
          nz-icon
          class="ant-input-clear-icon"
          nzTheme="fill"
          nzType="close-circle"
          *ngIf="updatedTitle"
          (click)="updatedTitle = null"
        ></span>
      </ng-template>
    </div>
  `
})
export class EditModalComponent {
  @Input() product: any;
  updatedTitle: string;

  ngOnInit(): void {
    this.updatedTitle = this.product.title;
  }

  // Add any additional logic as needed, such as validation, error handling, etc.
}

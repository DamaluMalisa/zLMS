import { Component } from '@angular/core';
import { formatDistance } from 'date-fns';

@Component({
  selector: 'nz-demo-comment-editor',
  template: `
    <nz-list *ngIf="data.length" [nzDataSource]="data" [nzRenderItem]="item" [nzItemLayout]="'horizontal'">
      <ng-template #item let-item>
        <nz-comment [nzAuthor]="item.author" [nzDatetime]="item.displayTime">
          <nz-avatar nz-comment-avatar nzIcon="user" [nzSrc]="item.avatar"></nz-avatar>
          <nz-comment-content>
            <p class="text-[15px] font-normal text-light dark:text-white/60">{{ item.content }}</p>
          </nz-comment-content>
        </nz-comment>
      </ng-template>
    </nz-list>
    <nz-comment>
      <nz-avatar nz-comment-avatar nzIcon="user" [nzSrc]="user.avatar"></nz-avatar>
      <nz-comment-content>
        <nz-form-item>
          <textarea class="resize-none min-h-[170px] rounded-6 hover:border-primary bg-transparent border-regular dark:border-white/10 text-dark dark:text-white/[.87]" [(ngModel)]="inputValue" nz-input rows="4"></textarea>
        </nz-form-item>
        <nz-form-item>
          <button nz-button class="text-[14px] bg-primary border-1 border-primary hover:bg-primary-hbr hover:border-primary-hbr text-white dark:text-white/[.87] inline-flex items-center justify-center rounded-4 px-[20px] h-[44px] font-semibold shadow-dark" [nzLoading]="submitting" [disabled]="!inputValue" (click)="handleSubmit()">
            Add Comment
          </button>
        </nz-form-item>
      </nz-comment-content>
    </nz-comment>
  `,
  styles: [
    `
      :host ::ng-deep .ant-comment-content-author-name{
        @apply text-theme-gray dark:text-white/[.87] text-[12px];
      }
      :host ::ng-deep .ant-comment-content-author-time{
        @apply text-light dark:text-white/60 text-[12px];
      }
      :host ::ng-deep .ant-comment-actions > li > span{
        @apply text-light-extra dark:text-white/60 text-[12px] flex items-center gap-[8px];
      }
      :host ::ng-deep .ant-comment-actions li{
        @apply relative me-[8px];
      }
      :host ::ng-deep .ant-comment-actions li:not(:last-child)::after{
        @apply absolute top-[50%] ltr:end-0 rtl:left-[-9px] h-[12px] w-[1px] bg-dark dark:bg-white/10 -translate-y-1/2 content-[''];
      }
    `
  ]
})
export class NzDemoCommentEditorComponent {
  // tslint:disable-next-line:no-any
  data: any[] = [];
  submitting = false;
  user = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  };
  inputValue = '';

  handleSubmit(): void {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    setTimeout(() => {
      this.submitting = false;
      this.data = [
        ...this.data,
        {
          ...this.user,
          content,
          datetime: new Date(),
          displayTime: formatDistance(new Date(), new Date())
        }
      ].map(e => {
        return {
          ...e,
          displayTime: formatDistance(new Date(), e.datetime)
        };
      });
    }, 800);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-comment-nested',
  template: `
  <div class="text-[15px] font-normal text-light-extra dark:text-white/60 border-b border-regular dark:border-white/10 py-[10px] capitalize">reply to</div>
    <ng-template #commentTemplateRef let-comment="comment">
      <nz-comment [nzAuthor]="comment.author">
        <nz-avatar nz-comment-avatar nzIcon="user" [nzSrc]="comment.avatar"></nz-avatar>
        <nz-comment-content>
          <p class="text-[15px] font-normal text-light dark:text-white/60">{{ comment.content }}</p>
        </nz-comment-content>
        <nz-comment-action>Reply to</nz-comment-action>
        <ng-container *ngIf="comment.children && comment.children.length">
          <ng-template ngFor let-child [ngForOf]="comment.children">
            <ng-template [ngTemplateOutlet]="commentTemplateRef" [ngTemplateOutletContext]="{ comment: child }"> </ng-template>
          </ng-template>
        </ng-container>
      </nz-comment>
    </ng-template>

    <ng-template [ngTemplateOutlet]="commentTemplateRef" [ngTemplateOutletContext]="{ comment: data }"> </ng-template>
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
export class NzDemoCommentNestedComponent {
  data = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources' +
      '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    children: [
      {
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources' +
          '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        children: [
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content:
              'We supply a series of design principles, practical patterns and high quality design resources' +
              '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
          },
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content:
              'We supply a series of design principles, practical patterns and high quality design resources' +
              '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
          }
        ]
      }
    ]
  };
}

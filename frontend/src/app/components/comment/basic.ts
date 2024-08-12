import { Component } from '@angular/core';
import { formatDistance } from 'date-fns';

@Component({
  selector: 'nz-demo-comment-basic',
  template: `
    <nz-comment nzAuthor="Han Solo" [nzDatetime]="time">
      <nz-avatar nz-comment-avatar nzIcon="user" nzSrc="//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></nz-avatar>
      <nz-comment-content>
        <p class="text-[15px] font-normal text-light dark:text-white/60">
          We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people
          create their product prototypes beautifully and efficiently.
        </p>
      </nz-comment-content>
      <nz-comment-action>
        <i nz-tooltip nzTooltipTitle="Like" nz-icon nzType="like" [nzTheme]="likes > 0 ? 'twotone' : 'outline'" (click)="like()"></i>
        <span class="count like">{{ likes }}</span>
      </nz-comment-action>
      <nz-comment-action>
        <i nz-tooltip nzTooltipTitle="Dislike" nz-icon nzType="dislike" [nzTheme]="dislikes > 0 ? 'twotone' : 'outline'" (click)="dislike()"></i>
        <span class="count dislike">{{ dislikes }}</span>
      </nz-comment-action>
      <nz-comment-action>Reply</nz-comment-action>
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
        @apply absolute top-[50%] ltr:end-0 rtl:left-[-9px] h-[12px] w-[1px] bg-normal dark:bg-white/10 -translate-y-1/2 content-[''];
      }
    `
  ]
})
export class NzDemoCommentBasicComponent {
  likes = 0;
  dislikes = 0;
  time = formatDistance(new Date(), new Date());

  like(): void {
    this.likes = 1;
    this.dislikes = 0;
  }

  dislike(): void {
    this.likes = 0;
    this.dislikes = 1;
  }
}

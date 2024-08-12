import { Component } from '@angular/core';
import { addDays, formatDistance } from 'date-fns';

@Component({
  selector: 'nz-demo-comment-list',
  template: `
    <div class="text-[15px] font-normal text-light-extra dark:text-white/60 border-b border-regular dark:border-white/10 py-[10px]">2 replies</div>
    <nz-list [nzDataSource]="data" [nzRenderItem]="item" [nzItemLayout]="'horizontal'">
      <ng-template #item let-item>
        <nz-comment [nzAuthor]="item.author" [nzDatetime]="item.datetime">
          <nz-avatar nz-comment-avatar nzIcon="user" [nzSrc]="item.avatar"></nz-avatar>
          <nz-comment-content>
            <p class="text-[15px] font-normal text-light dark:text-white/60">{{ item.content }}</p>
          </nz-comment-content>
          <nz-comment-action>Reply to</nz-comment-action>
        </nz-comment>
      </ng-template>
    </nz-list>
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
export class NzDemoCommentListComponent {
  data = [
    {
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      datetime: formatDistance(new Date(), addDays(new Date(), 1))
    },
    {
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      datetime: formatDistance(new Date(), addDays(new Date(), 2))
    }
  ];
}

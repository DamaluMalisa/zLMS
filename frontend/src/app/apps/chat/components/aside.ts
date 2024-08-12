import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'chat-aside',
    template: `
        <div class="bg-white dark:bg-white/10 rounded-10 py-[25px]">
            <div class="rounded-[25px] bg-normalBG dark:bg-white/10 flex items-center pe-[20px] mx-[25px]">
                <input class="h-[46px] ps-[20px] pe-[45px]" type="text" nz-input placeholder="Input Here" [nzBorderless]="true"/>
                <svg-icon class="[&>svg]:w-[16px] [&>svg]:h-[16px] text-[#8C90A4] dark:text-white/60" src="assets/images/svg/unicons-line/search.svg"></svg-icon>
            </div>
            <div class="flex justify-between border-b border-regular dark:border-white/10 3xl:[&>a]:py-[18px] max-3xl:[&>a]:py-[10px] max-2xl:py-0 mx-[25px] max-2xl:flex-col max-2xl:items-center max-2xl:[&>a]:gap-y-[10px]">
                <a class="{{ groupLinkClasses }}" href="#" (click)="selectChatType('personal');$event.preventDefault()" [ngClass]="{'active': chatType === 'personal'}">Private Chat</a>
                <a class="{{ groupLinkClasses }}" href="#" (click)="selectChatType('group');$event.preventDefault()" [ngClass]="{' active': chatType === 'group'}">
                    Group Chat
                    <nz-badge [nzCount]="7" class="p-[4px]"></nz-badge>
                </a>
                <a class="{{ groupLinkClasses }}" href="#" (click)="selectChatType('all');$event.preventDefault()" [ngClass]="{' active': chatType === 'all'}">All Contacts</a>
            </div>
            <div class="chat-user-list">
              <perfect-scrollbar>
                <div class="h-[495px]">
                  <div *ngIf="chatType === 'group' || chatType === 'all'" class="pt-[25px] mb-[18px] mx-[25px]">
                      <a *ngIf="chatType === 'group'" href="" class="flex items-center justify-center gap-[10px] bg-regularBG dark:bg-white/10 w-full h-11 text-body dark:text-white/60 text-sm font-semibold text-center border dark:border-white/10 rounded-[40px]">
                          <svg-icon class="w-[14px] h-[14px]" src="assets/images/svg/unicons-line/edit.svg"></svg-icon>
                          Create New Group
                      </a>

                      <a *ngIf="chatType === 'all'" href="" class="flex items-center justify-center gap-[10px] bg-regularBG dark:bg-white/10 w-full h-11 text-body dark:text-white/60 text-sm font-semibold text-center border dark:border-white/10 rounded-[40px]">
                          <svg-icon class="w-[14px] h-[14px]" src="assets/images/svg/unicons-line/user-plus.svg"></svg-icon>
                          Add New Contact
                      </a>
                  </div>
                  <nz-list class="pt-[13px]" [nzDataSource]="chatList" [nzRenderItem]="item" [nzItemLayout]="'horizontal'">
                      <ng-template #item let-item let-index="index">
                          <div *ngIf="chatType === item.chatType">
                              <a (click)="selectChat(item.id)">
                                  <nz-list-item class="py-[15px] px-[25px] relative w-full m-0 rounded hover:shadow-[0_15px_50px_rgba(116,116,116,0.13)] dark:shadow-none" [ngClass]="{'active': index == chatId}">
                                      <div class="flex items-center gap-[15px] w-full">
                                          <div>
                                              <nz-avatar class="w-[46px] h-[46px] rounded-full" nzIcon="user" [nzSrc]="item.avatar"></nz-avatar>
                                          </div>
                                          <div>
                                              <h5 class="block font-semibold text-dark dark:text-white/[.87]">{{item.name}}</h5>
                                              <ng-container *ngFor="let msgItem of item.msg; let last = last">
                                                  <p *ngIf="last" class="block text-body dark:text-white/60">
                                                      {{formatBody(msgItem.text | truncate:6 )}}
                                                  </p>
                                              </ng-container>
                                          </div>
                                          <div class="flex flex-col items-end ms-[auto]">
                                              <span class="text-xs text-light dark:text-white/60">{{ item.day }}</span>
                                              <nz-badge *ngIf="item.newChat > 0" [nzCount]="item.newChat" class="p-[4px] mt-2" [nzStyle]="{ backgroundColor: '#01B81A' }"></nz-badge>
                                          </div>
                                      </div>
                                  </nz-list-item>
                              </a>
                          </div>
                          <div *ngIf="chatType === 'all'">
                              <a (click)="selectChat(item.id)">
                                  <nz-list-item class="py-[15px] px-[25px] relative w-full m-0 rounded hover:shadow-[0_15px_50px_rgba(116,116,116,0.13)] dark:shadow-none" [ngClass]="{'active': index == chatId}">
                                      <div class="flex items-center gap-[15px] w-full">
                                          <div>
                                              <nz-avatar class="w-[46px] h-[46px] rounded-full" nzIcon="user" [nzSrc]="item.avatar"></nz-avatar>
                                          </div>
                                          <div>
                                              <h5 class="block font-semibold text-dark dark:text-white/[87]">{{item.name}}</h5>
                                              <ng-container *ngFor="let msgItem of item.msg; let last = last">
                                                  <p *ngIf="last" class="block text-body dark:text-white/60">
                                                      {{formatBody(msgItem.text | truncate:6 )}}
                                                  </p>
                                              </ng-container>
                                          </div>
                                          <div class="flex flex-col items-end ms-[auto]">
                                              <span class="text-xs text-light dark:text-white/60">{{ item.day }}</span>
                                              <nz-badge *ngIf="item.newChat > 0" [nzCount]="item.newChat" class="p-[4px] mt-2" [nzStyle]="{ backgroundColor: '#01B81A' }"></nz-badge>
                                          </div>
                                      </div>
                                  </nz-list-item>
                              </a>
                          </div>
                      </ng-template>
                  </nz-list>
                </div>
              </perfect-scrollbar>
            </div>
        </div>
    `,
    styles: [`
      :host ::ng-deep .ant-badge-count{
        @apply shadow-none;
      }
    `]
})
export class ChatAsideComponent {
    @Input() chatList: any[];
    @Input() chatId: number;
    @Input() chatType: string;
    @Input() formatBody: (body: string) => void;
    @Output() onSelectChat: EventEmitter<string> = new EventEmitter<string>();
    @Output() onSelectChatGroup: EventEmitter<string> = new EventEmitter<string>();

    selectChat(index: string): void {
        this.onSelectChat.emit(index);
    }
    selectChatType(type: string): void {
        this.onSelectChatGroup.emit(type)
    }

    groupLinkClasses = 'relative flex items-center pb-[18px] after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-0 after:h-[1px] after:w-full text-light dark:text-white/60 [&.active]:text-primary 2xl:[&.active]:after:bg-primary [&.active]:dark:text-primary';
}

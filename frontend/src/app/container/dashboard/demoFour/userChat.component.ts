import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-userChat',
    template: `
        <div class="bg-white dark:bg-white/10 rounded-10  dark:border-white/10 border-none">
            <div class="px-[25px] py-[15.50px] border-b-1 border-regular dark:border-white/10">
                <ng-container *ngFor="let item of chatList">
                    <div class="flex justify-between items-center" *ngIf="chatId == item.id">
                        <div *ngIf="chatType === 'personal' || chatType === 'all'">
                            <h6 class="mb-1 text-lg font-medium text-dark dark:text-white/[.87]">{{item.name}}</h6>
                            <p class="mb-0 text-xs font-normal text-dark dark:text-white/[.87]">
                                <nz-badge nzStatus="success"></nz-badge>
                                <span>Online</span>
                            </p>
                        </div>
                        <div *ngIf="chatType === 'group'" class="flex items-center justify-center w-full gap-x-1 py-[10px]">
                            <img class="max-w-[30px] rounded-full" src="assets/images/chat-author/t1.jpg" alt="">
                            <img class="max-w-[30px] rounded-full" src="assets/images/chat-author/t2.jpg" alt="">
                            <img class="max-w-[30px] rounded-full" src="assets/images/chat-author/t3.jpg" alt="">
                            <img class="max-w-[30px] rounded-full" src="assets/images/chat-author/t4.jpg" alt="">
                            <a class="flex items-center justify-center bg-primary w-[30px] h-[30px] rounded-full" href="">
                                <span class="text-white dark:text-white/[.87] text-[10px] font-semibold">20+</span>
                            </a>
                            <a class="flex items-center justify-center w-[30px] h-[30px] border border-dashed border-deep dark:border-white/10 rounded-full">
                                <svg-icon class="[&>svg]:w-[16px] [&>svg]:h-[16px] text-light dark:text-white/60" src="assets/images/svg/unicons-line/plus.svg"></svg-icon>
                            </a>
                        </div>
                        <div>
                            <a [nzDropdownMenu]="chatSetting" nz-dropdown [nzTrigger]="'click'" nzPlacement="bottomRight">
                                <svg-icon class="[&>svg]:w-[20px] [&>svg]:h-[20px] text-light dark:text-white/60" src="assets/images/svg/unicons-line/ellipsis-h.svg"></svg-icon>
                            </a>
                            <nz-dropdown-menu #chatSetting="nzDropdownMenu">
                                <ul class="bg-white dark:bg-[#010413] py-1 shadow-[0_5px_30px_#9299b820] dark:shadow-[0_5px_30px_rgba(1,4,19,.60)]  rounded-md" nz-menu>
                                    <li class="flex items-center px-3 py-1.5 gap-2 text-body dark:text-white/60 text-sm hover:bg-primary/10 hover:text-primary dark:hover:text-white/[.87] capitalize" nz-menu-item>
                                    <span nz-icon nzType="user-add" nzTheme="outline"></span>
                                      create new group
                                    </li>
                                    <li class="flex items-center px-3 py-1.5 gap-2 text-body dark:text-white/60 text-sm hover:bg-primary/10 hover:text-primary dark:hover:text-white/[.87] capitalize" nz-menu-item>
                                    <span nz-icon nzType="delete" nzTheme="outline"></span>
                                      Delete conversation
                                    </li>
                                    <li class="flex items-center px-3 py-1.5 gap-2 text-body dark:text-white/60 text-sm hover:bg-primary/10 hover:text-primary dark:hover:text-white/[.87] capitalize" nz-menu-item>
                                    <span nz-icon nzType="block" nzTheme="outline"></span>
                                      Block and report
                                    </li>
                                </ul>
                            </nz-dropdown-menu>
                        </div>
                    </div>
                </ng-container>
            </div>
            <perfect-scrollbar class="conversation-body h-[539px] pt-[25px] ltr:3xl:[&>div>div]:!mr-0 rtl:3xl:[&>div>div]:!ml-0">
                <ng-container *ngFor="let item of chatList">
                    <div *ngIf="chatId == item.id">
                        <div class="msg flex w-full mb-[30px] px-[25px] last:mb-0" [ngClass]="{'justify-start' : msgItem.from == 'opposite', 'justify-end [&>div>div>div]:justify-end' : msgItem.from == 'me', 'justify-center !px-0': msgItem.msgType == 'date'}" *ngFor="let msgItem of item.msg">
                            <div class="me-[15px]" *ngIf="msgItem.from == 'opposite'">
                                <nz-avatar [nzIcon]="'user'" [nzSrc]="item.avatar" class="w-[46px] h-[46px]"></nz-avatar>
                            </div>
                            <div class="bubble" *ngIf="msgItem.text.length > 1" [ngClass]="{'m-l-50': msgItem.avatar.length == 0}">
                                <div>
                                    <h6 *ngIf="msgItem.msgType !== 'date' && msgItem.from == 'opposite'" class="text-sm font-semibold text-dark dark:text-white/[.87]">
                                        {{item.name}}
                                        <span class="text-light dark:text-white/60 text-xs font-normal mx-[15px]">March 30, 2020</span>
                                    </h6>
                                    <div class="flex flex-wrap items-center gap-4">
                                        <span *ngIf="msgItem.msgType !== 'date' && msgItem.from == 'me'" class="text-light dark:text-white/60 text-xs font-normal w-full text-end">March 30, 2020</span>
                                        <p *ngIf="msgItem.msgType == 'text'" class="max-w-[670px] px-5 py-[18px] text-base rounded-[15px] rounded-br-0 {{ msgItem.from === 'me' ? ' mt-0 bg-section dark:bg-dark dark:text-white/[.87]' : ' mt-[10px] text-white dark:text-white/[.87] bg-body dark:bg-white/10' }} {{ msgItem.from === 'me' ? 'order-last' : '' }}">
                                            {{msgItem.text}}
                                        </p>
                                        <img *ngIf="msgItem.msgType == 'image'" [src]="msgItem.text" [alt]="msgItem.text" [ngClass]="{'p-5 mt-[10px] bg-deepBG rounded-10': msgItem.msgType == 'image'}">
                                        <div *ngIf="msgItem.msgType == 'file'" class="flex items-center gap-[10px] p-5 mt-[10px] -mb-[15px] bg-deepBG dark:bg-white/10 rounded-10">
                                            <svg-icon class="[&>svg]:w-[18px] [&>svg]:h-[18px] text-[#8C90A4] dark:text-white/60" src="assets/images/svg/unicons-line/file-alt.svg"></svg-icon>
                                            <span class="font-semibold text-link cursor-pointer">
                                                <u>{{msgItem.text}}</u>
                                            </span>
                                        </div>

                                        <!-- Chat Actions -->
                                        <div class="flex items-center gap-[15px]">
                                            <div class="cursor-pointer" [nzDropdownMenu]="emojiAction" nz-dropdown [nzTrigger]="'click'" nzPlacement="bottomRight">
                                                <svg-icon class="[&>svg]:w-[18px] [&>svg]:h-[18px] text-light-extra dark:text-white/60 {{ msgItem.from === 'me' ? 'order-last' : '' }}" src="assets/images/svg/unicons-line/smile.svg"></svg-icon>
                                            </div>
                                            <a class="text-light font-size-18" [nzDropdownMenu]="chatAction" nz-dropdown [nzTrigger]="'click'" nzPlacement="bottomRight">
                                                <svg-icon class="[&>svg]:w-[20px] [&>svg]:h-[20px] text-light-extra dark:text-white/60" src="assets/images/svg/unicons-line/ellipsis-h.svg"></svg-icon>
                                            </a>
                                            <nz-dropdown-menu #emojiAction="nzDropdownMenu">
                                                <ul class="bg-white dark:bg-[#010413] py-1 shadow-[0_5px_30px_#9299b820] dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-md inline-flex items-center" nz-menu>
                                                    <li class="bg-transparent flex items-center gap-2 text-body dark:text-white/60 text-sm capitalize " nz-menu-item>
                                                    <span nz-icon nzType="like" [nzTheme]="'twotone'" [nzTwotoneColor]="'#52c41a'"></span>
                                                    </li>
                                                    <li class="bg-transparent flex items-center gap-2 text-body dark:text-white/60 text-sm capitalize " nz-menu-item><span nz-icon nzType="smile" [nzTheme]="'twotone'" [nzTwotoneColor]="'#f7b835'"></span></li>
                                                    <li class="bg-transparent flex items-center gap-2 text-body dark:text-white/60 text-sm capitalize " nz-menu-item><span nz-icon nzType="meh" [nzTheme]="'twotone'" [nzTwotoneColor]="'#f77f28'"></span></li>
                                                    <li class="bg-transparent flex items-center gap-2 text-body dark:text-white/60 text-sm capitalize " nz-menu-item><span nz-icon nzType="heart" [nzTheme]="'twotone'" [nzTwotoneColor]="'#eb2f96'"></span></li>
                                                </ul>
                                            </nz-dropdown-menu>
                                            <nz-dropdown-menu #chatAction="nzDropdownMenu">
                                                <ul class="bg-white dark:bg-[#010413] py-1 shadow-[0_5px_30px_#9299b820] dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-md" nz-menu>
                                                    <li class="flex items-center px-3 py-1.5 gap-2 text-body dark:text-white/60 text-sm hover:bg-primary/10 hover:text-primary dark:hover:text-white/[.87] capitalize " nz-menu-item>Copy</li>
                                                    <li class="flex items-center px-3 py-1.5 gap-2 text-body dark:text-white/60 text-sm hover:bg-primary/10 hover:text-primary dark:hover:text-white/[.87] capitalize " nz-menu-item>Edit</li>
                                                    <li class="flex items-center px-3 py-1.5 gap-2 text-body dark:text-white/60 text-sm hover:bg-primary/10 hover:text-primary dark:hover:text-white/[.87] capitalize " nz-menu-item>Forward</li>
                                                    <li class="flex items-center px-3 py-1.5 gap-2 text-body dark:text-white/60 text-sm hover:bg-primary/10 hover:text-primary dark:hover:text-white/[.87] capitalize " nz-menu-item>remove</li>
                                                </ul>
                                            </nz-dropdown-menu>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="relative w-full text-center capitalize z-10 after:absolute after:top-1/2 after:-translate-y-1/2 ltr:after:left-0 rtl:after:right-0 after:bg-regular dark:after:bg-white/10 after:w-full after:h-[1px] after:-z-10" *ngIf="msgItem.time.length > 1">
                                <span class="bg-white dark:bg-[#1b1d2a] px-6 text-light dark:text-white/60 text-[13px]">{{msgItem.time}}</span>
                            </div>
                        </div>
                    </div>
                </ng-container>
            </perfect-scrollbar>
            <div class="relative flex items-center gap-[15px] max-sm:gap-[15px] max-sm:justify-center max-sm:flex-wrap py-[20px] mx-[25px]">
                <div class="w-full bg-section dark:bg-[#323540] h-[70px] px-[25px] text-body dark:text-white/60 border-none outline-none rounded-[35px] flex items-center gap-[20px]">
                  <svg-icon class="[&>svg]:w-[24px] [&>svg]:h-[24px] text-[#8C90A4] dark:text-white/60" src="assets/images/svg/unicons-line/smile.svg"></svg-icon>
                    <input [(ngModel)]="msg" class="w-full bg-transparent h-[68px] text-[16px] text-dark dark:text-white/[.87] outline-none shadow-none border-none" type="text" placeholder="Type a message..." (keydown.enter)="sendMsg(msg);$event.preventDefault()" />
                </div>

                <div class="flex items-center gap-2">
                    <a href="" class="flex items-center justify-center bg-section dark:bg-white/10 w-[50px] h-[50px] rounded-full">
                        <svg-icon class="[&>svg]:w-[18px] [&>svg]:h-[18px] text-light dark:text-white/60" src="assets/images/svg/unicons-line/camera.svg"></svg-icon>
                    </a>
                    <a href="" class="flex items-center justify-center bg-section dark:bg-white/10 w-[50px] h-[50px] rounded-full">
                        <svg-icon class="[&>svg]:w-[18px] [&>svg]:h-[18px] text-light dark:text-white/60" src="assets/images/svg/unicons-line/paperclip.svg"></svg-icon>
                    </a>
                    <a href="" class="flex items-center justify-center bg-primary w-[50px] h-[50px] rounded-full text-white dark:text0-white/[.87]" (click)="sendMsg(msg);$event.preventDefault()">
                        <svg-icon class="[&>svg]:w-[18px] [&>svg]:h-[18px] text-white dark:text-white/[.87]" src="assets/images/svg/unicons-line/message.svg"></svg-icon>
                    </a>
                </div>
            </div>
        </div>
    `
})

export class userChatComponent {
    @Input() chatId: number;
    @Input() msg: string;
    @Input() chatList: any[];
    @Input() chatType: string;
    @Input() sendMsg: (msg: string) => void;
};

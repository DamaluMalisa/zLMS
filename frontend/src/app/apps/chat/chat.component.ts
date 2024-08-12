import { Component, AfterViewChecked, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Chat } from '../../shared/interfaces/chat.type';
import { AppsService } from '../../shared/services/apps.service';

@Component({
    templateUrl: './chat.component.html',
})

export class ChatComponent implements OnInit, AfterViewChecked {

    @ViewChild('scrollBottom', { static: true }) private scrollContainer: ElementRef;
    isContentOpen: boolean = false;
    chatId: number;
    chatType: string;
    msg: string;
    chatList: Chat[];

    isLoading = true;
    showContent = false;

    constructor( private chatSvc : AppsService) { }

    ngOnInit(){
        this.chatSvc.getChatJSON().subscribe(data => {
            this.chatList = data;
        });
        this.chatType = 'personal';
        this.chatId = 1;
        this.scrollToBottom();
        this.loadData();
    }


    loadData() {
      // Simulate an asynchronous data loading operation
      setTimeout(() => {
        this.isLoading = false;
        this.showContent = true;
      }, 500);
    }

    ngAfterViewChecked() {
        this.scrollToBottom();
    }

    selectChat(index: number){
        this.chatId = index;
        this.isContentOpen = true;
    };

    selectChatType(type: string){
        this.chatType = type;
        let firstItem = this.chatList.find(item => item.chatType === this.chatType);
        this.chatId = firstItem ? firstItem.id : 1;
    };

    closeChatContent() {
        this.isContentOpen = false;
    }

    sendMsg(msg: string) {
        for (let i = 0; i < this.chatList.length; i++) {
            if(this.chatId == this.chatList[i].id && this.msg.length > 1){
                this.chatList[i].msg.push(
                    {
                        avatar: '',
                        text: msg,
                        from: 'me',
                        time: '',
                        msgType: 'text'
                    }
                )
            }
        }
        this.msg = '';
    }

    scrollToBottom(): void {
        try {
            this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
        } catch(err) { }
    }

    formatBody(body:string) {
        return body.replace(/<(?:.|\n)*?>/gm, ' ');
    }
}

import { Component } from '@angular/core';
import { Chat } from '../../shared/interfaces/chat.type';
import { AppsService } from '../../shared/services/apps.service';
@Component({
  selector: 'app-demo-four',
  templateUrl: './demo-four.component.html'
})
export class DemoFourComponent {
  isLoading = true;
  showContent = false;
  chatId: number;
  chatType: string;
  msg: string;
  chatList: Chat[];

  constructor( private chatSvc : AppsService) { }

  ngOnInit() {
    this.chatSvc.getChatJSON().subscribe(data => {
        this.chatList = data;
    });
    this.chatType = 'personal';
    this.chatId = 1;
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
}

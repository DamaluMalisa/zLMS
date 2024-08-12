import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ticket-user',
  template: `
    <div class="bg-white dark:bg-white/10 shadow-[0_5px_20px_rgba(173,181,217,.05)] pt-[25px] px-[25px] pb-[30px] rounded-10">
      <h4 class="font-medium text-dark dark:text-white/[.87] mb-[22px]">Conversation</h4>
      <div class="max-h-[220px] overflow-x-hidden overflow-y-auto scrollbar" #scrollContainer>
        <!-- ticket user conversation -->
        <ul class="pe-[15px]">
          <li class="flex items-center justify-between flex-wrap mb-[30px]" *ngFor="let user of ticketUsers">
            <div class="flex items-start w-full gap-[10px]">
              <div class="rounded-full relative inline-flex items-center justify-center">
                <img src="{{ user.avatar }}" class="bg-gray dark:bg-white/10 w-[30px] h-[30px] rounded-full" alt="image">
              </div>
              <div class="flex items-center justify-between flex-wrap w-full">
                <div>
                  <h6 class="text-[14px] font-medium leading-[1.4285714286] text-dark dark:text-white/[.87]">{{ user.name }}</h6>
                  <div class="text-limit">
                    <p class="text-[16px] font-normal leading-[1.6875] text-theme-gray dark:text-white/60">{{ user.messagePreview }}</p>
                  </div>
                </div>
                <div class="last-chat-time {{ user.isUnread ? 'unread' : '' }}">
                  <small class="text-light dark:text-white/60">{{ user.timestamp }}</small>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="flex items-center flex-wrap gap-[10px] max-xs:flex-col">
        <form action="/" class="flex items-center bg-normalBG dark:bg-white/10 h-[70px] rounded-[35px] px-[25px] transition-all duration-300 flex-1">
          <span class="text-[20px] text-light-extra dark:text-white/60" nz-icon [nzType]="'smile'" [nzTheme]="'outline'"></span>
          <input #newMessageInput class="w-full h-full bg-transparent border-none shadow-none outline-none px-[20px] text-dark dark:text-white/[.87]" type="text" placeholder="Type your message..." aria-label="Message" (keyup.enter)="sendMessage(newMessageInput.value)">
        </form>
        <button nz-button class="border-none bg-primary hover:bg-primary-hbr w-[50px] h-[50px] p-[10px] rounded-full flex items-center justify-center" (click)="sendMessage(newMessageInput.value)">
          <span class="text-[16px] text-white" nz-icon nzType="send" nzTheme="outline"></span>
        </button>
      </div>
    </div>
  `
})

export class TicketUserComponent implements OnInit, AfterViewChecked {
  ticketUsers: any[];
  localStorageKey = 'ticket_users';

  @ViewChild('scrollContainer', { static: false }) scrollContainer: ElementRef;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const storedData = localStorage.getItem(this.localStorageKey);
    if (storedData) {
      this.ticketUsers = JSON.parse(storedData);
    } else {
      this.http.get<any>('assets/data/pages/ticket-user.json').subscribe(data => {
        this.ticketUsers = data.ticketUsers;
      });
    }
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      // Handle error, if any.
    }
  }

  saveDataToLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.ticketUsers));
  }

  sendMessage(message: string) {
    if (message.trim() === '') {
      return; // Don't add empty messages
    }

    const newMessage = {
      avatar: 'assets/images/avatars/thumbs.png', // Replace with the URL of the user's avatar
      name: 'Md. Rafiq', // Replace with the sender's name
      messagePreview: message,
      timestamp: new Date().toLocaleString(),
      isUnread: true, // Assuming new messages are always unread
    };

    this.ticketUsers.push(newMessage);
    this.saveDataToLocalStorage();
    // Optionally, you can clear the input field after sending the message
    // newMessageInput.value = '';
  }
}

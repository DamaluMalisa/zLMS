import { Component } from '@angular/core';

@Component({
selector: 'users-project',
template: `
    <div class="bg-white dark:bg-white/10 min-h-[482px] rounded-[10px]">
      <div class="flex items-center justify-between px-[25px] py-3 border-b border-regular dark:border-white/10">
        <h3 class="m-0 text-lg font-semibold text-dark dark:text-white/[.87]">Users</h3>
        <button nz-button class="flex text-secondary items-center gap-x-1.5 py-[3px] px-[15px] border-regular text-xs font-medium dark:text-white/[.87] dark:bg-transparent dark:border-white/10 capitalize rounded-6 hover:bg-primary hover:border-primary hover:text-white">
          <span class="[&>svg]:w-[12px] [&>svg]:h-[12px]" nz-icon nzType="user-add" nzTheme="outline"></span>
          <span class="m-0">Add Users</span>
        </button>
      </div>
      <div class="flex flex-col gap-y-[25px] p-[25px]">
        <div class="flex items-center gap-x-[15px]"  *ngFor="let item of UserProject">
          <div>
            <img class="w-[45px] h-[45px] rounded-full" src="{{item.avatar}}" alt="avatar">
          </div>
          <div>
            <h6 class=" text-dark dark:text-white/[.87] text-sm font-semibold mb-0.5">{{item.name}}</h6>
            <p class="mb-0 text-light dark:text-white/60 text-[14px] font-normal">{{item.role}}</p>
          </div>
        </div>
      </div>
    </div>
`,
styles: [`

`]
})

export class UsersComponent {
  UserProject = [
    {
      "name": "Meyri Carles",
      "role": "Web Developer",
      "avatar":"assets/images/avatars/tm5.png",
    },
    {
      "name": "Tuhin Molla",
      "role": "Project Manager",
      "avatar":"assets/images/avatars/tm1.png",
    },
    {
      "name": "Billal Hossain",
      "role": "App Developer",
      "avatar":"assets/images/avatars/tm2.png",
    },
    {
      "name": "Khalid Hasan",
      "role": "App Developer",
      "avatar":"assets/images/avatars/tm3.png",
    },
    {
      "name": "Meyri Carles",
      "role": "UI Designer",
      "avatar":"assets/images/avatars/tm4.png",
    }
  ]
}

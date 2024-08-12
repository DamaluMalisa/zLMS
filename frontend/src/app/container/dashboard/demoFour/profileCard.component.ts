import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  template: `
    <figure class="w-full md:min-h-[360px] bg-white dark:bg-white/10 text-center rounded-10 shadow-[0px_5px_20px_rgba(160, 160, 160, 0.02)] mb-0">
      <figcaption>
        <img class="static w-full" [src]="bgImage" alt="banner" />
        <div class="pb-[30px] mt-[-75px]">
          <div class="mb-[10px]">
            <img
              class="p-[5px] rounded-full max-w-[110px] bg-white dark:bg-white/10 inline-block"
              [src]="image"
              alt="profile"
            />
          </div>
          <h4 class="text-[18px] font-semibold mb-[2px] text-dark dark:text-white/[.87]">{{ title }}</h4>
          <p class="mb-[18px] text-light dark:text-white/60">{{ tag }}</p>
          <ul class="flex items-center justify-center gap-[5px]">
            <li *ngFor="let link of socialMediaLinks" [class]="'text-' + link.platform">
              <a class="flex items-center justify-center w-[32px] h-[32px] rounded-6 hover:opacity-[0.8] duration-200 leading-[1] bg-{{link.platform}} border-{{link.platform}}" [href]="link.link">
                <svg-icon class="[&>svg]:w-[16px] [&>svg]:h-[16px] text-white" src="assets/images/svg/unicons-line/{{link.platform}}.svg"></svg-icon>
              </a>
            </li>
          </ul>
        </div>
      </figcaption>
    </figure>
  `,
  styles: []
})
export class ProfileCardComponent {
  @Input() image: string = 'assets/images/profile-author.png';
  @Input() bgImage: string = 'assets/images/profile-card.png';
  @Input() title: string = 'Robert Clinton';
  @Input() tag: string = 'Best Seller of the last month';

  socialMediaLinks = [
    { platform: 'facebook', link: '#' },
    { platform: 'twitter', link: '#' },
    { platform: 'dribbble', link: '#' },
  ];
}

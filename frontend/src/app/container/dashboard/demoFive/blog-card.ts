import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-cards',
  template:`
    <div nz-row nzGutter="25">
      <div nz-col nzXs="24" nzLg="12" nzXXl="8" class="mb-[25px]" *ngFor="let card of blogCards | slice:0:3" >
        <figure class="bg-white dark:bg-white/10 group rounded-10 pt-[25px] pb-[30px] px-[25px] shadow-[0_5px_20px_rgba(173,181,217,0.03)]">
          <div class="relative after:absolute after:h-0 after:w-full ltr:after:left-0 rtl:after:right-0 after:top-0 after:bg-[#0a0a0a15] after:rounded-10 after:transition-all after:duration-300 group-hover:after:h-full">
            <img class="w-full rounded-10" src="assets/images/blogs/{{card.thumbnail}}" alt="">
          </div>
          <figcaption>
            <div class="text-15 font-normal text-light dark:text-white/60 mt-[11px]">{{ card.date }}</div>
            <h4 class="mt-[13px] mb-[8px] text-dark font-semibold dark:text-white/[.87] hover:text-primary dark:hover:text-primary text-[20px]">
              <a href="#" class="text-current" rel="bookmark">{{ card.title }}</a>
            </h4>
            <p class="text-16 font-normal text-theme-gray dark:text-white/60 mb-[15px]">{{ card.content }}</p>
            <div class="flex items-center justify-between gap-[5px]">
              <div class="inline-flex items-center gap-[10px] w-full">
                <img class="w-[32px] h-[32px] rounded-full" src="assets/images/avatars/{{card.author.profile_image}}" alt="author">
                <div class="flex items-center justify-between w-full max-ssm:flex-wrap gap-x-[15px] gap-y-[5px]">
                  <span class="text-15 font-normal text-light dark:text-white/60 capitalize">{{ card.author.name }}</span>
                  <ul class="inline-flex items-center gap-x-[20px] gap-y-[10px]">
                    <li>
                      <div class="flex items-center gap-[5px]">
                        <span class="text-[12px] text-light dark:text-white/60" nz-icon nzType="heart" nzTheme="outline"></span>
                        <span class="text-[13px] font-normal text-light dark:text-white/60">{{ card.reactions.likes }}</span>
                      </div>
                    </li>
                    <li>
                      <div class="flex items-center gap-[5px]">
                        <span class="text-[12px] text-light dark:text-white/60" nz-icon nzType="file-text" nzTheme="outline"></span>
                        <span class="text-[13px] font-normal text-light dark:text-white/60">{{ card.reactions.docs }}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  `,
})
export class BlogCardsComponent implements OnInit {
  blogCards: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('assets/data/pages/blog-cards.json').subscribe(
      data => {
        this.blogCards = data.blogCards;
      },
      error => {
        console.log('Error fetching blog cards:', error);
      }
    );
  }
}

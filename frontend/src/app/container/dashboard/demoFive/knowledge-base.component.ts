import { Component } from '@angular/core';

@Component({
  selector: 'app-knowledge-base',
  template: `
    <div class="text-center py-[45px] px-[25px] rounded-10 bg-white dark:bg-white/10 shadow-[0_5px_20px_rgba(173,181,217,0.03)]">
      <img class="w-[80px] h-[70px] inline-block" src="assets/images/banners/book-open.png" alt="book">
      <h2 class="text-[30px] font-semibold leading-[36px] text-dark dark:text-white/[.87] mt-[22px] mb-[13px]">Knowledge Base</h2>
      <p class="mb-[30px] text-[16px] font-normal text-theme-gray dark:text-white/60">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration</p>
      <button nz-button class="bg-primary border-primary hover:bg-primary-hbr hover:border-primary-hbr text-white rounded-6 flex items-center justify-center w-full h-[40px]"> Browse Article </button>
    </div>
  `,
})
export class KnowledgeBaseComponent {

}

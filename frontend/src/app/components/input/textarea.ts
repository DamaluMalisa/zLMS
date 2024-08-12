import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-input-textarea',
  template: `
    <textarea class="w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60" rows="4" nz-input [(ngModel)]="inputValue"></textarea>
  `
})
export class NzDemoInputTextareaComponent {
  inputValue: string;
}

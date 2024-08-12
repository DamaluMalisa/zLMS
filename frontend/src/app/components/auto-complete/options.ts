import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nz-demo-auto-complete-options',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="inline-flex">
      <input
       class="w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[5px] min-h-[37px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60 capitalize"
        placeholder="input here"
        nz-input
        [(ngModel)]="inputValue"
        (input)="onInput($event)"
        [nzAutocomplete]="auto"
      />
      <nz-autocomplete #auto>
        <nz-auto-option *ngFor="let option of options" [nzValue]="option">{{ option }}</nz-auto-option>
      </nz-autocomplete>
    </div>
  `
})
export class NzDemoAutoCompleteOptionsComponent {
  inputValue?: string;
  options: string[] = [];

  onInput(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    if (!value || value.indexOf('@') >= 0) {
      this.options = [];
    } else {
      this.options = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
  }
}

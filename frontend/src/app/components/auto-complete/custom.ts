import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nz-demo-auto-complete-custom',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="inline-flex">
      <textarea
      class="w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[5px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60 capitalize"
        placeholder="input here"
        nz-input
        row="4"
        [(ngModel)]="inputValue"
        (input)="onInput($event.target?.value)"
        [nzAutocomplete]="auto"
      ></textarea>
      <nz-autocomplete #auto>
        <nz-auto-option *ngFor="let option of options" [nzValue]="option">{{ option }}</nz-auto-option>
      </nz-autocomplete>
    </div>
  `
})
export class NzDemoAutoCompleteCustomComponent {
  inputValue: string;
  options: string[] = [];

  onInput(value: string): void {
    this.options = value ? [value, value + value, value + value + value] : [];
  }
}

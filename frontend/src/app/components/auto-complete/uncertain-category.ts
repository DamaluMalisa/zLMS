import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nz-demo-auto-complete-uncertain-category',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="flex">
      <nz-input-group nzSearch nzSize="large" [nzAddOnAfter]="suffixIconButton">
        <input class="w-full ltr:rounded-l-10 rtl:rounded-r-10 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[5px] min-h-[37px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60 capitalize ltr:[&+span]:rounded-r-10 rtl:[&+span]:rounded-l-10" placeholder="input here" nz-input [(ngModel)]="inputValue" (input)="onChange($event)" [nzAutocomplete]="auto" />
      </nz-input-group>
      <ng-template #suffixIconButton>
        <button class="h-[37px] inline-flex items-center justify-center ltr:rounded-r-10 rtl:rounded-l-10" nz-button nzType="primary" nzSize="large" nzSearch>
          <i nz-icon nzType="search" nzTheme="outline"></i>
        </button>
      </ng-template>
      <nz-autocomplete #auto>
        <nz-auto-option class="global-search-item" *ngFor="let option of options" [nzValue]="option.category">
          Found {{ option.value }} on
          <a
            class="global-search-item-desc"
            [href]="'https://s.taobao.com/search?q=' + option.value"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ option.category }}
          </a>
          <span class="global-search-item-count">{{ option.count }} results</span>
        </nz-auto-option>
      </nz-autocomplete>
    </div>
  `,
  styles: [
    `
      .global-search-item {
        display: flex;
      }

      .global-search-item-desc {
        flex: auto;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .global-search-item-count {
        flex: none;
      }
    `
  ]
})
export class NzDemoAutoCompleteUncertainCategoryComponent {
  inputValue: string;
  options: Array<{ value: string; category: string; count: number }> = [];

  onChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.options = new Array(this.getRandomInt(5, 15))
      .join('.')
      .split('.')
      .map((_item, idx) => ({
        value,
        category: `${value}${idx}`,
        count: this.getRandomInt(200, 100)
      }));
  }

  private getRandomInt(max: number, min: number = 0): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

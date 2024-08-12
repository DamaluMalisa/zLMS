import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface AutocompleteOptionGroups {
  title: string;
  count?: number;
  children?: AutocompleteOptionGroups[];
}

@Component({
  selector: 'nz-demo-auto-complete-certain-category',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="flex">
      <nz-input-group class="w-full rounded-10 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[5px] min-h-[37px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60 capitalize" nzSize="large" [nzSuffix]="suffixIcon">
        <input class="capitalize bg-transparent shadow-none outline-none border-none" placeholder="input here" nz-input [(ngModel)]="inputValue" (ngModelChange)="onChange($event)" [nzAutocomplete]="auto" />
      </nz-input-group>
      <ng-template #suffixIcon>
        <i nz-icon nzType="search"></i>
      </ng-template>
      <nz-autocomplete #auto>
        <nz-auto-optgroup *ngFor="let group of optionGroups" [nzLabel]="groupTitle">
          <ng-template #groupTitle>
            <span
              >{{ group.title }}
              <a class="more-link" href="https://www.google.com/search?q=ng+zorro" target="_blank">更多</a>
            </span>
          </ng-template>
          <nz-auto-option *ngFor="let option of group.children" [nzLabel]="option.title" [nzValue]="option.title">
            {{ option.title }}
            <span class="certain-search-item-count">{{ option.count }} 人 关注</span>
          </nz-auto-option>
        </nz-auto-optgroup>
      </nz-autocomplete>
    </div>
  `,
  styles: [
    `
      .certain-search-item-count {
        position: absolute;
        color: #999;
        right: 16px;
      }

      .more-link {
        float: right;
      }
    `
  ]
})
export class NzDemoAutoCompleteCertainCategoryComponent implements OnInit {
  inputValue: string;
  optionGroups: AutocompleteOptionGroups[];

  constructor() {}

  onChange(value: string): void {
    console.log(value);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.optionGroups = [
        {
          title: '话题',
          children: [
            {
              title: 'AntDesign',
              count: 10000
            },
            {
              title: 'AntDesign UI',
              count: 10600
            }
          ]
        },
        {
          title: '问题',
          children: [
            {
              title: 'AntDesign UI 有多好',
              count: 60100
            },
            {
              title: 'AntDesign 是啥',
              count: 30010
            }
          ]
        },
        {
          title: '文章',
          children: [
            {
              title: 'AntDesign 是一个设计语言',
              count: 100000
            }
          ]
        }
      ];
    }, 1000);
  }
}

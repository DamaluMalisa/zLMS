

import { Component } from '@angular/core';

@Component({
  selector: 'slider',
  template:`
  <nz-slider
    [(ngModel)]="singleValue"
    (ngModelChange)="onChange($event)"
    (nzOnAfterChange)="onAfterChange($event)"
  ></nz-slider>
  <nz-slider
    nzRange
    [nzStep]="10"
    [(ngModel)]="rangeValue"
    (ngModelChange)="onChange($event)"
    (nzOnAfterChange)="onAfterChange($event)"
  ></nz-slider>
  `,

  styles: [`
    :host ::ng-deep nz-slider .ant-slider .ant-slider-rail{
      @apply bg-primary/10;
    }
    :host ::ng-deep nz-slider .ant-slider .ant-slider-track{
      @apply bg-primary;
    }
    :host ::ng-deep nz-slider .ant-slider .ant-slider-handle{
      @apply border-primary border-2 bg-white dark:bg-white/10 w-[16px] h-[16px];
    }
  `]
})

export class SliderComponent{
  //Slider
  singleValue = 30;
  rangeValue = [20, 50];

  onChange(value: number): void {
    console.log(`onChange: ${value}`);
  }

  onAfterChange(value: number[] | number): void {
    console.log(`onAfterChange: ${value}`);
  }
}

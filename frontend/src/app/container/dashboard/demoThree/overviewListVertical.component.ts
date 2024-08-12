
import {
  Component, OnInit,Input
} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'nz-OverviewListVertical',
  template: `
    <div class="flex items-center flex-wrap justify-between rounded-10 bg-[white] dark:bg-white/10 overflow-hidden">
      <div *ngFor="let item of overviewListVertical" class="mb-0 flex-[0_0_auto] relative after:absolute after:w-[1px] after:h-[70px] after:right-[-60px] after:top-1/2 after:transform after:-translate-y-1/2 after:z-10 after:bg-rgb(40, 43, 55) dark:after:bg-white/10">
        <div class="flex p-[25px]">
          <div class="flex justify-between gap-[25px] text-{{ item.type }}">
            <div class="{{ rounded }} flex items-center justify-center w-[70px] h-[70px] bg-{{ item.type }}{{bgColor}}">
            <svg-icon class="w-[34px] h-[34px] [&>svg]:w-full [&>svg]:h-full {{textColor}}" src="assets/images/svg/unicons-line/{{ item.icon }}.svg"></svg-icon>
            </div>
            <div class="flex gap-[25px]">
              <div>
                <h4 class="text-[30px] leading-[1.2] font-semibold mb-0 text-dark dark:text-white/[.87]"><span>{{ item.total }}</span></h4>
                <span class="text-[16px] text-light dark:text-white/60">{{ item.label }}</span>
              </div>
              <span class="mt-[6px] text-{{item.statusColor}} inline-flex">
                <svg-icon class="[&>svg]:w-[20px] [&>svg]:h-[18px] text-current" src="assets/images/svg/unicons-line/{{ item.trend }}.svg"></svg-icon>
                <span class="font-medium text-[14px]">{{ item.status }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})

export class OverviewListVerticalComponent implements OnInit {
  overviewListVertical: any[];
  @Input() rounded: string;
  @Input() bgColor: string;
  @Input() textColor: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/data/pages/demo-three/overviewListVertical.json').subscribe((data: any) => {
      this.overviewListVertical = data.overviewListVertical;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface socialTraffic {
  name: string;
  traffic: string;
  progress: string;
}

@Component({
  selector: 'nz-social-media-traffic',
  template: `
  <div class="bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10 relative h-full">
      <div class="px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto">
        <h1 class="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-white/[.87]"> Social Media Traffic</h1>
      </div>
      <div class="px-[25px] pb-[28px]">
        <div class="overflow-x-auto w-full">
          <nz-table [nzData]="['']" [nzFrontPagination]="false" [nzShowPagination]="false" class="text-sm rounded-[5px] max-xl:whitespace-nowrap">
            <tbody class="bg-white dark:bg-[#1b1d2a]">
              <tr *ngFor="let item of data" class="group">
                <td class="ps-0 pe-4 py-2.5 text-start last:text-end text-dark dark:text-white/[.87] group-hover:bg-transparent text-15 font-medium border-none before:hidden rounded-s-[4px]">
                  <div class="flex items-center">
                    <span class="font-medium capitalize text-dark dark:text-white/[.87] text-15">{{ item.name }}</span>
                  </div>
                </td>
                <td class="ps-4 pe-4 py-2.5 font-normal last:text-end capitalize text-[14px] text-dark dark:text-white/[.87] border-none group-hover:bg-transparent rounded-e-[4px] text-center">{{ item.traffic }}</td>
                <td class="ps-4 pe-4 py-2.5 font-normal last:text-end capitalize text-[14px] text-dark dark:text-white/[.87] border-none group-hover:bg-transparent rounded-e-[4px]">
                  <div class="flex items-center justify-end">
                    <div class="max-w-[140px] min-w-[140px]">
                      <nz-progress class="revenue-table text-{{item.type}}" [nzPercent]="item.progress" [nzShowInfo]="false"></nz-progress>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </nz-table>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./socialMediaTraffic.scss']
})

export class socialMediaTrafficComponent2 implements OnInit {
  data: socialTraffic[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<socialTraffic[]>('assets/data/pages/social-traffic.json')
      .subscribe(progressData => {
        this.data = progressData.slice(0, 5).map(progress => ({ ...progress, isActive: false }));
      });
  }

}

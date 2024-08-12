import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-button-button-group',
  template: `
    <h4 class="text-dark dark:text-white/[.87] text-[15px] leading-[24px] mb-[10px]">Basic</h4>
    <nz-button-group>
      <button class="text-white  text-[13px] font-semibold bg-primary border-primary px-[8px] capitalize" nz-button>today</button>
      <button class="text-[13px] font-semibold px-[8px] capitalize" nz-button>week</button>
      <button class="text-[13px] font-semibold px-[8px] capitalize" nz-button>month</button>
      <button class="text-[13px] font-semibold px-[8px] capitalize" nz-button>year</button>
    </nz-button-group>
    <nz-button-group>
      <button class="text-[13px] font-semibold px-[8px] capitalize" nz-button>Cancel</button>
      <button class="text-[13px] font-semibold px-[8px] capitalize" nz-button>ok</button>
    </nz-button-group>
    <nz-button-group>
      <button class="text-[13px] font-semibold px-[8px] capitalize" nz-button>left</button>
      <button class="text-[13px] font-semibold px-[8px] capitalize" nz-button>middle</button>
      <button class="text-[13px] font-semibold px-[8px] capitalize" nz-button>right</button>
    </nz-button-group>
    <h4 class="text-dark dark:text-white/[.87] text-[15px] leading-[24px] mb-[10px] mt-0">With Icon</h4>
    <nz-button-group>
      <button class="text-white dark:text-white/[.87] text-[13px] font-semibold bg-primary border-primary px-[8px] capitalize  inline-flex items-center" nz-button><i nz-icon nzType="left"></i> Go back</button>
      <button class="text-[13px] font-semibold px-[8px] inline-flex items-center capitalize" nz-button>Go forward<i nz-icon nzType="right"></i></button>
    </nz-button-group>
  `,
  styles: [
    `
      h4 {
        margin: 16px 0;
        font-size: 14px;
        line-height: 1;
        font-weight: normal;
      }

      h4:first-child {
        margin-top: 0;
      }

      [nz-button] {
        margin-bottom: 12px;
      }

      nz-button-group {
        margin-bottom: 8px;
        margin-right: 8px;
      }
    `
  ]
})
export class NzDemoButtonButtonGroupComponent {}

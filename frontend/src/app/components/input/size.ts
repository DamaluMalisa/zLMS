import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-input-size',
  template: `
    <div class="example-input">
      <input nz-input class="w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60" placeholder="large size" nzSize="large" />
      <input nz-input class="w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] h-[46px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60" placeholder="default size" nzSize="default" />
      <input nz-input class="w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] h-[30px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60" placeholder="small size" nzSize="small" />
    </div>
  `,
  styles: [
    `
      .example-input .ant-input {
        width: 200px;
        margin: 0 8px 8px 0;
      }
    `
  ]
})
export class NzDemoInputSizeComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-card-basic',
  template: `
    <nz-card class="dark:bg-white/10 dark:text-white/[.87] dark:border-white/10" nzTitle="Default Size Card" [nzExtra]="extraTemplate">
      <p class="dark:text-white/60 text-theme-gray">Default Size Card</p>
      <p class="dark:text-white/60 text-theme-gray">Default Size Card</p>
      <p class="dark:text-white/60 text-theme-gray">Default Size Card</p>
      <p class="dark:text-white/60 text-theme-gray">Default Size Card</p>
      <p class="dark:text-white/60 text-theme-gray">Default Size Card</p>
      <p class="dark:text-white/60 text-theme-gray">Default Size Card</p>
    </nz-card>
    <ng-template #extraTemplate>
      <a>More</a>
    </ng-template>
  `,
  styles: [
    `
    :host ::ng-deep .ant-card{
      @apply rounded-6;
    }
    :host ::ng-deep .ant-card .ant-card-head{
      @apply dark:text-white/[.87] dark:border-white/10 px-[25px] rounded-t-6;
    }
    :host ::ng-deep .ant-card .ant-card-extra{
      @apply  dark:text-white/[.87] ;
    }
   `
  ]
})
export class NzDemoCardBasicComponent {}

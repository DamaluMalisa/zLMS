/* declarations: NzDrawerCustomComponent */

import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'nz-demo-drawer-service',
  template: `
    <ng-template #drawerTemplate let-data let-drawerRef="drawerRef">
      <p class="text-theme-gray dark:text-white/60">value: {{ data?.value }}</p>
      <br />
      <br />
      <button nz-button class="bg-danger hover:bg-primary-hbr border-solid border-1 border-danger text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" (click)="drawerRef.close()">close</button>
    </ng-template>
    <div nz-form>
      <nz-form-item>
        <input class="w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] h-[46px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60" nz-input [(ngModel)]="value" />
      </nz-form-item>
    </div>
    <button nz-button class="bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" (click)="openTemplate()">Use Template</button>
    &nbsp;
    <button nz-button class="bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" (click)="openComponent()">Use Component</button>
  `
})
export class NzDemoDrawerServiceComponent {
  @ViewChild('drawerTemplate', { static: false }) drawerTemplate?: TemplateRef<{
    $implicit: { value: string };
    drawerRef: NzDrawerRef<string>;
  }>;
  value = 'ng';

  constructor(private drawerService: NzDrawerService) {}

  openTemplate(): void {
    const drawerRef = this.drawerService.create({
      nzTitle: 'Template',
      nzFooter: 'Footer',
      nzExtra: 'Extra',
      nzContent: this.drawerTemplate,
      nzContentParams: {
        value: this.value
      }
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Template) open');
    });

    drawerRef.afterClose.subscribe(() => {
      console.log('Drawer(Template) close');
    });
  }

  openComponent(): void {
    const drawerRef = this.drawerService.create<NzDrawerCustomComponent, { value: string }, string>({
      nzTitle: 'Component',
      nzFooter: 'Footer',
      nzExtra: 'Extra',
      nzContent: NzDrawerCustomComponent,
      nzContentParams: {
        value: this.value
      }
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Component) open');
    });

    drawerRef.afterClose.subscribe(data => {
      console.log(data);
      if (typeof data === 'string') {
        this.value = data;
      }
    });
  }
}

@Component({
  selector: 'nz-drawer-custom-component',
  template: `
    <div>
      <input class="w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] h-[46px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60" nz-input [(ngModel)]="value" />
      <nz-divider></nz-divider>
      <button nz-button class="bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" (click)="close()" nz-button>Confirm</button>
    </div>
  `
})
export class NzDrawerCustomComponent {
  @Input() value = '';

  constructor(private drawerRef: NzDrawerRef<string>) {}

  close(): void {
    this.drawerRef.close(this.value);
  }
}

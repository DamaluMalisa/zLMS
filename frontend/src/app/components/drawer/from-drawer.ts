import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-drawer-from-drawer',
  template: `
    <button nz-button class="bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]" (click)="open()">Create</button>
    <nz-drawer
      [nzBodyStyle]="{ overflow: 'auto' }"
      [nzMaskClosable]="false"
      [nzWidth]="720"
      [nzVisible]="visible"
      nzTitle="Create"
      [nzFooter]="footerTpl"
      (nzOnClose)="close()"
    >
      <form nz-form *nzDrawerContent>
        <div nz-row [nzGutter]="8">
          <div nz-col nzSpan="12">
            <nz-form-item>
              <nz-form-label class="flex items-center font-medium dark:text-white/60">Name</nz-form-label>
              <nz-form-control>
                <input class="w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] h-[46px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60" nz-input placeholder="please enter user name" />
              </nz-form-control>
            </nz-form-item>
          </div>
          <div nz-col nzSpan="12">
            <nz-form-item>
              <nz-form-label class="flex items-center font-medium dark:text-white/60">Url</nz-form-label>
              <nz-form-control>
                <nz-input-group nzAddOnBefore="http://" nzAddOnAfter=".com">
                  <input class="w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] h-[46px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60" type="text" nz-input placeholder="please enter url" />
                </nz-input-group>
              </nz-form-control>
            </nz-form-item>
          </div>
        </div>
        <div nz-row [nzGutter]="8">
          <div nz-col nzSpan="12">
            <nz-form-item>
              <nz-form-label class="flex items-center font-medium dark:text-white/60">Owner</nz-form-label>
              <nz-form-control>
                <nz-select class="{{selectClass}}" nzPlaceHolder="Please select an owner"></nz-select>
              </nz-form-control>
            </nz-form-item>
          </div>
          <div nz-col nzSpan="12">
            <nz-form-item>
              <nz-form-label class="flex items-center font-medium dark:text-white/60">Type</nz-form-label>
              <nz-form-control>
                <nz-select class="{{selectClass}}" nzPlaceHolder="Please choose the type"></nz-select>
              </nz-form-control>
            </nz-form-item>
          </div>
        </div>
        <div nz-row [nzGutter]="8">
          <div nz-col nzSpan="12">
            <nz-form-item>
              <nz-form-label class="flex items-center font-medium dark:text-white/60">Approver</nz-form-label>
              <nz-form-control>
                <nz-select class="{{selectClass}}" nzPlaceHolder="Please choose the approver"></nz-select>
              </nz-form-control>
            </nz-form-item>
          </div>
          <div nz-col nzSpan="12">
            <nz-form-item>
              <nz-form-label class="flex items-center font-medium dark:text-white/60">DateTime</nz-form-label>
              <nz-form-control>
                <nz-range-picker class="inline-flex items-center rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[8px] h-[46px] outline-none placeholder:text-light placeholder:font-normal text-theme-gray dark:text-white/60 w-full mb-[15px]"></nz-range-picker>
              </nz-form-control>
            </nz-form-item>
          </div>
        </div>
        <div nz-row [nzGutter]="8">
          <div nz-col nzSpan="24">
            <nz-form-item>
              <nz-form-label class="flex items-center font-medium dark:text-white/60">Description</nz-form-label>
              <nz-form-control>
                <textarea
                  class="w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60"
                  nz-input
                  placeholder="please enter url description"
                  [nzAutosize]="{ minRows: 4, maxRows: 4 }"
                ></textarea>
              </nz-form-control>
            </nz-form-item>
          </div>
        </div>
      </form>

      <ng-template #footerTpl>
        <div style="float: right">
          <button nz-button class="me-[8px] dark:bg-transparent border-regular dark:border-white/10 dark:text-white/[.87] rounded-4 py-[4px] px-[15px]" (click)="close()">Cancel</button>
          <button nz-button class="bg-primary border-primary hover:bg-primary-hbr text-white rounded-4 py-[4px] px-[15px]" (click)="close()">Submit</button>
        </div>
      </ng-template>
    </nz-drawer>
  `,
  styles: [`
    :host ::ng-deep .basic-select .ant-select-selector{
      @apply h-[50px] rounded-4 border-normal px-[20px] flex items-center dark:bg-white/10 dark:border-white/10 dark:text-white/60 dark:hover:text-white/100;
    }
    :host ::ng-deep .basic-select.ant-select-multiple .ant-select-selection-item{
        @apply bg-white dark:bg-white/10 border-normal dark:border-white/10;
      }
    :host ::ng-deep .ant-upload {
      @apply w-full;
    }
    :host ::ng-deep .basic-select .ant-select-multiple.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector{
      @apply dark:bg-white/10 dark:border-white/10 dark:text-white/60 dark:hover:text-white/100;
    }
  `]
})
export class NzDemoDrawerFromDrawerComponent {
  visible = false;
  selectClass = 'capitalize [&>nz-select-top-control]:border-normal dark:[&>nz-select-top-control]:border-white/10 [&>nz-select-top-control]:bg-white [&>nz-select-top-control]:dark:bg-white/10 [&>nz-select-top-control]:shadow-none [&>nz-select-top-control]:text-dark [&>nz-select-top-control]:dark:text-white/60 [&>nz-select-top-control]:h-[46px] [&>nz-select-top-control]:flex [&>nz-select-top-control]:items-center [&>nz-select-top-control]:rounded-[4px] [&>nz-select-top-control]:px-[20px] [&>.ant-select-arrow]:text-theme-gray dark:[&>.ant-select-arrow]:text-white/60';

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}

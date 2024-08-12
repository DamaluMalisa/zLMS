import {
  Component
} from '@angular/core';

@Component({
  selector: 'datepicker',
  template: `
<nz-form-label class="flex items-center font-normal capitalize dark:text-white/60" nzLg="6" nzMd="9" nzXs="24"
  nzFor="datePicker">Datepicker</nz-form-label>
<nz-form-control>
  <nz-date-picker
    class="inline-flex items-center rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] h-[50px] outline-none placeholder:text-light placeholder:font-normal text-theme-gray dark:text-white/60 w-[250px] mb-[15px]"
    id="datePicker"></nz-date-picker>
</nz-form-control>

<nz-form-label class="flex items-center font-normal capitalize dark:text-white/60" nzLg="6" nzMd="9" nzXs="24"
  nzFor="datePicker">Data Range Picker</nz-form-label>
<nz-form-control>
  <nz-range-picker
    class="inline-flex items-center rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] h-[50px] outline-none placeholder:text-light placeholder:font-normal text-theme-gray dark:text-white/60 w-[280px]"
    [nzShowTime]="{ nzFormat: 'HH:mm' }" nzFormat="yyyy-MM-dd HH:mm" ngModel (ngModelChange)="onChange($event)"
    (nzOnCalendarChange)="onCalendarChange($event)" (nzOnOk)="onOk($event)"></nz-range-picker>
</nz-form-control>

`,
})

export class DatepickerComponent {
  onChange(result: Date): void {
    console.log('Selected Time: ', result);
  }

  onOk(result: Date | Date[] | null): void {
    console.log('onOk', result);
  }

  onCalendarChange(result: Array < Date | null > ): void {
    console.log('onCalendarChange', result);
  }
}

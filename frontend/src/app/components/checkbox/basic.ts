import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-checkbox-basic',
  template: `
    <label class="dark:text-white/[.87]" nz-checkbox [(ngModel)]="checked">Checkbox</label>
  `
})
export class NzDemoCheckboxBasicComponent {
  checked = true;
}

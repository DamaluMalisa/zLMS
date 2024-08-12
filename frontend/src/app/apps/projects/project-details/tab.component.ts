import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
    <div class="tab" [hidden]="!isActive">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .tab {
      display: block;
    }
  `]
})
export class TabComponent {
  @Input() isActive: boolean;
}

import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../../shared/components/codebox/codebox.component';

@Component({
  selector     : 'nz-demo-rate',
  preserveWhitespaces: false,
  templateUrl  : './en.html',
  styles: [`
    :host ::ng-deep nz-rate .ant-rate-star svg{
      @apply w-[14px] h-[14px];
    }
    :host ::ng-deep .ant-rate-star-half .ant-rate-star-first,
    :host ::ng-deep .ant-rate-star-full .ant-rate-star-second{
      @apply text-warning;
    }
  `]
})
export class NzDemoRateEnComponent {
  expanded = false;
  @ViewChildren(NzCodeBoxComponent) codeBoxes: QueryList<NzCodeBoxComponent>;

  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }

  expandAllCode(): void {
    this.expanded = !this.expanded;
    this.codeBoxes.forEach(code => {
      code.nzExpanded = this.expanded;
      code.expandCode(this.expanded);
      code.check();
    });
  }

}

import {
  Component
} from '@angular/core';
@Component({
  selector: 'review',
  template: `
<div>
  <h4 class="text-[20px] font-medium mb-[20px] text-dark dark:text-white/[.87]">2. Please Setup Your Profile</h4>
    <label class="review text-light dark:text-white/60 font-normal text-[14px]" nz-checkbox [(ngModel)]="checked">I Agree With The Terms And Conditions.</label>
</div>
`,
styles: [`
  :host ::ng-deep .review .ant-checkbox-checked::after,
  :host ::ng-deep .review .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  :host ::ng-deep .review .ant-checkbox:hover .ant-checkbox-inner,
  :host ::ng-deep .review .ant-checkbox-input:focus + .ant-checkbox-inner{
    @apply border-success;
  }
  :host ::ng-deep .review .ant-checkbox-checked .ant-checkbox-inner{
    @apply bg-success border-success;
  }
`]
})

export class ReviewComponent {
  checked = false;
}

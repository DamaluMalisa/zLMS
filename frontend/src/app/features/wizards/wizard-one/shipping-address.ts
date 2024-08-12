import {
  Component
} from '@angular/core';
@Component({
  selector: 'payment-method',
  template: `
<div>
  <h4 class="text-[20px] font-medium mb-[20px] text-dark dark:text-white/[.87]">2. Please Setup Your Profile</h4>
  <p class="text-[16px] font-normal text-dark dark:text-white/[.87] capitalize pt-[4px] pb-[15px]">First Name :
    <span class="text-light dark:text-white/60">david</span>
  </p>
  <p class="text-[16px] font-normal text-dark dark:text-white/[.87] capitalize pt-[4px] pb-[15px]">Last Name :
  <span class="text-light dark:text-white/60">warner</span>
  </p>
  <p class="text-[16px] font-normal text-dark dark:text-white/[.87] capitalize pt-[4px] pb-[15px]">Email Address :
  <span class="text-light dark:text-white/60 lowercase">sovware@gmail.com</span>
  </p>
  <p class="text-[16px] font-normal text-dark dark:text-white/[.87] capitalize pt-[4px] pb-[15px]">Address :
  <span class="text-light dark:text-white/60">3/2 Dhaka, bangladesh</span>
  </p>
</div>
`,
})
export class ShippingAddressComponent {

}

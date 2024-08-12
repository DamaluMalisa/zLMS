import { Component } from '@angular/core';

@Component({
  selector: 'app-maintenance',
  template:`
    <div class="flex justify-center items-center flex-col min-h-screen pb-36 px-[15px] text-center mb-[30px]">
      <svg-icon class="mx-auto mb-20 text-white"
        src="assets/images/maintenance.svg"></svg-icon>
        <h1 class="text-dark dark:text-white/[.87] mb-3.5 text-lg font-medium">We are currently performing maintenance</h1>
        <p class="mb-0 text-body dark:text-white/60 text-15">We’re making the system more awesome. <br>We’ll be back shortly.</p>
    </div>
  `,
})
export class MaintenanceComponent {

}

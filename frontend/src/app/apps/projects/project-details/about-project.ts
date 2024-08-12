import { Component } from '@angular/core';

@Component({
selector: 'about-project',
template: `
<div class="bg-white dark:bg-white/10 4xl:min-h-[482px] rounded-[10px] h-full">
  <div class="px-[25px] py-[18px] border-b border-regular dark:border-white/10">
    <h1 class="m-0 text-lg font-semibold text-dark dark:text-white/[.87]">About Project</h1>
  </div>
  <div class="p-[25px]">
    <div>
      <p class="text-body dark:text-white/60 mb-[20px] leading-[1.6666666667] text-[15px] font-normal">Adipisicing eu magna velit est exercitation et consequat Lorem laboris
        nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute
        cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum
        voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris
        officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.</p>
      <p class="text-body dark:text-white/60 leading-[1.6666666667] text-[15px] font-normal">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
        laborum eiusmod. Brunch 3 wolf moon tempor</p>
    </div>
    <div class="flex items-center mt-[42px] gap-x-20 gap-y-[15px] flex-wrap">
      <div><span class="mb-[3px] block text-light dark:text-white/60 text-[13px]">Project Owner</span>
        <p class="font-medium text-body dark:text-white/60">Peter Jackson</p>
      </div>
      <div><span class="mb-[3px] block text-light dark:text-white/60 text-[13px]">Budget</span>
        <p class="font-medium text-body dark:text-white/60">$56,700</p>
      </div>
      <div><span class="mb-[3px] block text-light dark:text-white/60 text-[13px]">Start Date</span>
        <p class="font-medium text-primary">28 Dec 2019</p>
      </div>
      <div><span class="mb-[3px] block text-light dark:text-white/60 text-[13px]">Deadline</span>
        <p class="font-medium text-danger">18 Mar 2020</p>
      </div>
    </div>
  </div>
</div>
`,
styles: [`

`]
})

export class AboutProjectComponent {

}

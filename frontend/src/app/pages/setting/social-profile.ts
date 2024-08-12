import {
  Component
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import  socialItemsData  from './../../../assets/data/pages/social-items.json';
@Component({
  selector: 'social-profiles',
  template: `
    <form class="max-w-full" nz-form [formGroup]="myGroup">
      <nz-form-control class="mb-[20px]" *ngFor="let item of socialItems">
        <nz-form-label
          class="flex items-center [&>label]:text-dark [&>label]:dark:text-white/60 p-0 [&>label]:text-[15px] mb-[5px] capitalize" nzFor="{{item.name}}">{{item.name}}</nz-form-label>
          <nz-input-group class="w-full rounded-6 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10  outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60 inline-flex items-center">
            <button class="h-[48px] w-[45px] rounded-6 bg-{{item.name}} shadow-none outline-none border-{{item.name}} inline-flex items-center justify-center ltr:ml-[1px] rtl:mr-[1px]" nz-button>
              <svg-icon class="[&>svg]:w-[22px] [&>svg]:h-[22px] text-white" src="assets/images/svg/unicons-line/{{item.iconName}}.svg"></svg-icon>
            </button>
            <input class="bg-transparent border-none outline-none shadow-none min-h-[50px] placeholder:text-[14px] placeholder:text-theme-gray dark:placeholder:text-white/60 px-[20px]" type="{{item.type}}" nz-input placeholder="{{item.placeholder}}" />
          </nz-input-group>
      </nz-form-control>
      <nz-form-control class="mt-[40px]">
        <div class="inline-flex items-center gap-[13px]">
          <button
            class="bg-primary hover:bg-primary-hbr inline-flex items-center outline-none shadow-none w-fit duration-300 text-white capitalize px-[20px] text-[15px] border-primary font-semibold hover:border-primary-hbr rounded-[5px] gap-[8px] h-[46px]"
            nz-button
            nzType="primary"
            >
            <span>update social profile</span>
            </button>
            <button
            class="bg-normalBG border-normal dark:bg-white/10 dark:border-white/10 inline-flex items-center outline-none shadow-none w-fit duration-300 text-theme-gray dark:text-white/60 font-semibold capitalize px-[20px] text-[15px rounded-[5px] gap-[8px] h-[46px]"
            nz-button
            nzType="primary"
            >
            <span>Cancel</span>
          </button>
        </div>
      </nz-form-control>
  </form>
  `,
})
export class SocialProfileComponent {
  myGroup: FormGroup;
  socialItems: any[] = [];

  ngOnInit() {
    this.socialItems = socialItemsData.socialItems;
    // Initialize the form group
    this.myGroup = new FormGroup({
      facebook: new FormControl(),
      twitter: new FormControl(),
      dribble: new FormControl(),
      instagram: new FormControl(),
      github: new FormControl(),
      medium: new FormControl(),
    });
  }

}

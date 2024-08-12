import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoDatePickerBasicComponent } from './basic';
import { NzDemoDatePickerDisabledComponent } from './disabled';
import { NzDemoDatePickerExtraFooterComponent } from './extra-footer';
import { NzDemoDatePickerFormatComponent } from './format';
import { NzDemoDatePickerPresettedRangesComponent } from './presetted-ranges';
import { NzDemoDatePickerStartEndComponent } from './start-end';
import { NzDemoDatePickerEnComponent } from './en.component';



@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoDatePickerEnComponent }
    ])
  ],
  declarations: [
		NzDemoDatePickerBasicComponent,
		NzDemoDatePickerDisabledComponent,
		NzDemoDatePickerExtraFooterComponent,
		NzDemoDatePickerFormatComponent,
		NzDemoDatePickerPresettedRangesComponent,
		NzDemoDatePickerStartEndComponent,
		NzDemoDatePickerEnComponent,

  ]
})
export class NzDemoDatePickerModule {

}

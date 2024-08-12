import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoCalendarBasicComponent } from './basic';
import { NzDemoCalendarNoticeCalendarComponent } from './notice-calendar';
import { NzDemoCalendarEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoCalendarEnComponent }
    ])
  ],
  declarations: [
		NzDemoCalendarBasicComponent,
		NzDemoCalendarNoticeCalendarComponent,
		NzDemoCalendarEnComponent,
  ]
})
export class NzDemoCalendarModule {

}

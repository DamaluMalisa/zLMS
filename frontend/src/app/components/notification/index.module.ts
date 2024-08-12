import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoNotificationBasicComponent } from './basic';
import { NzDemoNotificationCustomIconComponent } from './custom-icon';
import { NzDemoNotificationDurationComponent } from './duration';
import { NzDemoNotificationWithBtnComponent } from './with-btn';
import { NzDemoNotificationWithIconComponent } from './with-icon';
import { NzDemoNotificationEnComponent } from './en.component';
import { NzDemoNotificationPlacementComponent } from './placement';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoNotificationEnComponent }
    ])
  ],
  declarations: [
		NzDemoNotificationBasicComponent,
		NzDemoNotificationCustomIconComponent,
		NzDemoNotificationDurationComponent,
		NzDemoNotificationWithBtnComponent,
		NzDemoNotificationWithIconComponent,
		NzDemoNotificationEnComponent,
    NzDemoNotificationPlacementComponent

  ]
})
export class NzDemoNotificationModule {

}

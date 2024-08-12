import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoMessageCloseComponent } from './close';
import { NzDemoMessageDurationComponent } from './duration';
import { NzDemoMessageInfoComponent } from './info';
import { NzDemoMessageLoadingComponent } from './loading';
import { NzDemoMessageOtherComponent } from './other';
import { NzDemoMessageEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoMessageEnComponent }
    ])
  ],
  declarations: [
		NzDemoMessageCloseComponent,
		NzDemoMessageDurationComponent,
		NzDemoMessageInfoComponent,
		NzDemoMessageLoadingComponent,
		NzDemoMessageOtherComponent,
		NzDemoMessageEnComponent,
  ]
})
export class NzDemoMessageModule {

}

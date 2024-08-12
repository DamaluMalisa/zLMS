import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoDropdownBasicComponent } from './basic';
import { NzDemoDropdownDropdownButtonComponent } from './dropdown-button';
import { NzDemoDropdownEventComponent } from './event';
import { NzDemoDropdownPlacementComponent } from './placement';
import { NzDemoDropdownEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoDropdownEnComponent }
    ])
  ],
  declarations: [
		NzDemoDropdownBasicComponent,
		NzDemoDropdownDropdownButtonComponent,
		NzDemoDropdownEventComponent,
		NzDemoDropdownPlacementComponent,
		NzDemoDropdownEnComponent,

  ]
})
export class NzDemoDropdownModule {

}

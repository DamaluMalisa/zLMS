import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoCheckboxBasicComponent } from './basic';
import { NzDemoCheckboxCheckAllComponent } from './check-all';
import { NzDemoCheckboxDisabledComponent } from './disabled';
import { NzDemoCheckboxEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoCheckboxEnComponent }
    ])
  ],
  declarations: [
		NzDemoCheckboxBasicComponent,
		NzDemoCheckboxCheckAllComponent,
		NzDemoCheckboxDisabledComponent,
		NzDemoCheckboxEnComponent
  ]
})
export class NzDemoCheckboxModule {

}

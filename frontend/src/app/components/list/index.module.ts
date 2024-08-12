import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoListBasicComponent } from './basic';
import { NzDemoListEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoListEnComponent }
    ])
  ],
  declarations: [
		NzDemoListBasicComponent,
		NzDemoListEnComponent,

  ]
})
export class NzDemoListModule {

}

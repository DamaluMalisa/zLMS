import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoGridBasicComponent } from './basic';
import { NzDemoGridFlexComponent } from './flex';
import { NzDemoGridGutterComponent } from './gutter';
import { NzDemoGridOffsetComponent } from './offset';
import { NzDemoGridSortComponent } from './sort';
import { NzDemoGridEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoGridEnComponent }
    ])
  ],
  declarations: [
		NzDemoGridBasicComponent,
		NzDemoGridFlexComponent,
		NzDemoGridGutterComponent,
		NzDemoGridOffsetComponent,
		NzDemoGridSortComponent,
		NzDemoGridEnComponent,

  ]
})
export class NzDemoGridModule {

}

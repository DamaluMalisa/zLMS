import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoEmptyBasicComponent } from './basic';
import { NzDemoEmptyCustomizeComponent } from './customize';
import { NzDemoEmptySimpleComponent } from './simple';
import { NzDemoEmptyEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoEmptyEnComponent }
    ])
  ],
  declarations: [
		NzDemoEmptyBasicComponent,
		NzDemoEmptyCustomizeComponent,
		NzDemoEmptySimpleComponent,
		NzDemoEmptyEnComponent
  ]
})

export class NzDemoEmptyModule {

}

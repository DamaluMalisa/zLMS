import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoModalAsyncComponent } from './async';
import { NzDemoModalBasicComponent } from './basic';
import { NzDemoModalFooterComponent } from './footer';
import { NzDemoModalInfoComponent } from './info';
import { NzDemoModalPositionComponent } from './position';
import { NzDemoModalEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoModalEnComponent }
    ])
  ],
  declarations: [
		NzDemoModalAsyncComponent,
		NzDemoModalBasicComponent,
		NzDemoModalFooterComponent,
		NzDemoModalInfoComponent,
		NzDemoModalPositionComponent,
		NzDemoModalEnComponent,

  ]
})
export class NzDemoModalModule {

}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoMenuHorizontalComponent } from './horizontal';
import { NzDemoMenuSiderCurrentComponent } from './sider-current';
import { NzDemoMenuVerticalComponent } from './vertical';
import { NzDemoMenuEnComponent } from './en.component';
import { NzDemoMenuHorizontalPositionComponent } from './placement';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoMenuEnComponent }
    ])
  ],
  declarations: [
		NzDemoMenuHorizontalComponent,
		NzDemoMenuSiderCurrentComponent,
		NzDemoMenuVerticalComponent,
		NzDemoMenuEnComponent,
    NzDemoMenuHorizontalPositionComponent
  ]
})
export class NzDemoMenuModule {

}

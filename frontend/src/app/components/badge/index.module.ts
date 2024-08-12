import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoBadgeBasicComponent } from './basic';
import { NzDemoBadgeChangeComponent } from './change';
import { NzDemoBadgeDotComponent } from './dot';
import { NzDemoBadgeLinkComponent } from './link';
import { NzDemoBadgeNoWrapperComponent } from './no-wrapper';
import { NzDemoBadgeOverflowComponent } from './overflow';
import { NzDemoBadgeStatusComponent } from './status';
import { NzDemoBadgeEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoBadgeEnComponent }
    ])
  ],
  declarations: [
		NzDemoBadgeBasicComponent,
		NzDemoBadgeChangeComponent,
		NzDemoBadgeDotComponent,
		NzDemoBadgeLinkComponent,
		NzDemoBadgeNoWrapperComponent,
		NzDemoBadgeOverflowComponent,
		NzDemoBadgeStatusComponent,
		NzDemoBadgeEnComponent

  ]
})
export class NzDemoBadgeModule {

}

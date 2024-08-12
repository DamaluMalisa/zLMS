import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoRateBasicComponent } from './basic';
import { NzDemoRateCharacterComponent } from './character';
import { NzDemoRateClearComponent } from './clear';
import { NzDemoRateDisabledComponent } from './disabled';
import { NzDemoRateHalfComponent } from './half';
import { NzDemoRateTextComponent } from './text';
import { NzDemoRateEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoRateEnComponent }
    ])
  ],
  declarations: [
		NzDemoRateBasicComponent,
		NzDemoRateCharacterComponent,
		NzDemoRateClearComponent,
		NzDemoRateDisabledComponent,
		NzDemoRateHalfComponent,
		NzDemoRateTextComponent,
		NzDemoRateEnComponent,

  ]
})
export class NzDemoRateModule {

}

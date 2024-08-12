import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoAlertBasicComponent } from './basic';
import { NzDemoAlertClosableComponent } from './closable';
import { NzDemoAlertCloseTextComponent } from './close-text';
import { NzDemoAlertDescriptionComponent } from './description';
import { NzDemoAlertIconComponent } from './icon';
import { NzDemoAlertEnComponent } from './en.component';
import { NzDemoAlertMoreTypesComponent } from './more-types';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoAlertEnComponent }
    ])
  ],
  declarations: [
		NzDemoAlertBasicComponent,
		NzDemoAlertClosableComponent,
		NzDemoAlertCloseTextComponent,
		NzDemoAlertDescriptionComponent,
		NzDemoAlertIconComponent,
		NzDemoAlertEnComponent,
    NzDemoAlertMoreTypesComponent

  ]
})
export class NzDemoAlertModule {

}

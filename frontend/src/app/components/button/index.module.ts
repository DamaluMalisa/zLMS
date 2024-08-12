import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoButtonBasicComponent } from './basic';
import { NzDemoButtonButtonGroupComponent } from './button-group';
import { NzDemoButtonDisabledComponent } from './disabled';
import { NzDemoButtonGhostComponent } from './ghost';
import { NzDemoButtonIconComponent } from './icon';
import { NzDemoButtonLoadingComponent } from './loading';
import { NzDemoButtonMultipleComponent } from './multiple';
import { NzDemoButtonSizeComponent } from './size';
import { NzDemoButtonEnComponent } from './en.component';
import { NzDemoButtonLightComponent } from './light';
import { NzDemoButtonOutlineComponent } from './outline';
import { NzDemoButtonRaisedComponent } from './raised';
import { NzDemoButtonRoundedComponent } from './rounded';
import { NzDemoButtonRoundedOutlineComponent } from './rounded-outline';
import { NzDemoButtonIconRoundedComponent } from './icon-rounded';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoButtonEnComponent }
    ])
  ],
  declarations: [
		NzDemoButtonBasicComponent,
		NzDemoButtonButtonGroupComponent,
		NzDemoButtonDisabledComponent,
		NzDemoButtonGhostComponent,
		NzDemoButtonIconComponent,
		NzDemoButtonLoadingComponent,
		NzDemoButtonMultipleComponent,
		NzDemoButtonSizeComponent,
		NzDemoButtonEnComponent,
    NzDemoButtonOutlineComponent,
    NzDemoButtonRaisedComponent,
    NzDemoButtonLightComponent,
    NzDemoButtonRoundedComponent,
    NzDemoButtonRoundedOutlineComponent,
    NzDemoButtonIconComponent,
    NzDemoButtonIconRoundedComponent
  ]
})
export class NzDemoButtonModule {

}

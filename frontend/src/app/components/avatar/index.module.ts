import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoAvatarBadgeComponent } from './badge';
import { NzDemoAvatarBasicComponent } from './basic';
import { NzDemoAvatarDynamicComponent } from './dynamic';
import { NzDemoAvatarTypeComponent } from './type';
import { NzDemoAvatarEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoAvatarEnComponent }
    ])
  ],
  declarations: [
		NzDemoAvatarBadgeComponent,
		NzDemoAvatarBasicComponent,
		NzDemoAvatarDynamicComponent,
		NzDemoAvatarTypeComponent,
		NzDemoAvatarEnComponent,
  ]
})
export class NzDemoAvatarModule {

}

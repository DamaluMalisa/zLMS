import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';


import { NzDemoFormHorizontalLoginComponent } from './horizontal-login';
import { NzDemoFormLayoutComponent } from './layout';
import { NzDemoFormNormalLoginComponent } from './normal-login';
import { NzDemoFormRegisterComponent } from './register';
import { NzDemoFormEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoFormEnComponent }
    ])
  ],
  declarations: [
		NzDemoFormHorizontalLoginComponent,
		NzDemoFormLayoutComponent,
		NzDemoFormNormalLoginComponent,
		NzDemoFormRegisterComponent,
		NzDemoFormEnComponent,

  ]
})
export class NzDemoFormModule {

}

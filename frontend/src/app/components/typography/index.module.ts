import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';
import { NzDemoTypographyEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoTypographyEnComponent },
    ])
  ],
  declarations: [
		NzDemoTypographyEnComponent,

  ]
})
export class NzDemoTypographyModule {

}

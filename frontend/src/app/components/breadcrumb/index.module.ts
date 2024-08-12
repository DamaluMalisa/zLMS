import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoBreadcrumbBasicComponent } from './basic';
import { NzDemoBreadcrumbDropdownComponent } from './dropdown';
import { NzDemoBreadcrumbSeparatorComponent } from './separator';
import { NzDemoBreadcrumbWithIconComponent } from './with-icon';
import { NzDemoBreadcrumbEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoBreadcrumbEnComponent }
    ])
  ],
  declarations: [
		NzDemoBreadcrumbBasicComponent,
		NzDemoBreadcrumbDropdownComponent,
		NzDemoBreadcrumbSeparatorComponent,
		NzDemoBreadcrumbWithIconComponent,
		NzDemoBreadcrumbEnComponent,

  ]
})
export class NzDemoBreadcrumbModule {

}

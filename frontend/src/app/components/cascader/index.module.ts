import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoCascaderBasicComponent } from './basic';
import { NzDemoCascaderCustomRenderComponent } from './custom-render';
import { NzDemoCascaderDisabledComponent } from './disabled';
import { NzDemoCascaderHoverComponent } from './hover';
import { NzDemoCascaderLazyComponent } from './lazy';
import { NzDemoCascaderEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoCascaderEnComponent }
    ])
  ],
  declarations: [
		NzDemoCascaderBasicComponent,
		NzDemoCascaderCustomRenderComponent,
		NzDemoCascaderDisabledComponent,
		NzDemoCascaderHoverComponent,
		NzDemoCascaderLazyComponent,
		NzDemoCascaderEnComponent,

  ]
})
export class NzDemoCascaderModule {

}

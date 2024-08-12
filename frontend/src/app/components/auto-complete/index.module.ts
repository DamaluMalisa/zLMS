import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoAutoCompleteBasicComponent } from './basic';
import { NzDemoAutoCompleteCertainCategoryComponent } from './certain-category';
import { NzDemoAutoCompleteCustomComponent } from './custom';
import { NzDemoAutoCompleteOptionsComponent } from './options';
import { NzDemoAutoCompleteUncertainCategoryComponent } from './uncertain-category';
import { NzDemoAutoCompleteEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoAutoCompleteEnComponent }
    ])
  ],
  declarations: [
		NzDemoAutoCompleteBasicComponent,
		NzDemoAutoCompleteCertainCategoryComponent,
		NzDemoAutoCompleteCustomComponent,
		NzDemoAutoCompleteOptionsComponent,
		NzDemoAutoCompleteUncertainCategoryComponent,
		NzDemoAutoCompleteEnComponent,

  ]
})
export class NzDemoAutoCompleteModule {

}

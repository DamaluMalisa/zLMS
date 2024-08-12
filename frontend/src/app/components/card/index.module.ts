import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoCardBasicComponent } from './basic';
import { NzDemoCardBorderLessComponent } from './border-less';
import { NzDemoCardGridCardComponent } from './grid-card';
import { NzDemoCardInColumnComponent } from './in-column';
import { NzDemoCardInnerComponent } from './inner';
import { NzDemoCardLoadingComponent } from './loading';
import { NzDemoCardEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoCardEnComponent }
    ])
  ],
  declarations: [
		NzDemoCardBasicComponent,
		NzDemoCardBorderLessComponent,
		NzDemoCardGridCardComponent,
		NzDemoCardInColumnComponent,
		NzDemoCardInnerComponent,
		NzDemoCardLoadingComponent,
		NzDemoCardEnComponent,

  ]
})
export class NzDemoCardModule {

}

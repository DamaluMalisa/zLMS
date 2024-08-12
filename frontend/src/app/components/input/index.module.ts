import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';
import { NzDemoInputBasicComponent } from './basic';
import { NzDemoInputSizeComponent } from './size';
import { NzDemoInputTextareaComponent } from './textarea';
import { NzDemoInputEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoInputEnComponent }
    ])
  ],
  declarations: [
		NzDemoInputBasicComponent,
		NzDemoInputSizeComponent,
		NzDemoInputTextareaComponent,
		NzDemoInputEnComponent,

  ]
})
export class NzDemoInputModule {

}

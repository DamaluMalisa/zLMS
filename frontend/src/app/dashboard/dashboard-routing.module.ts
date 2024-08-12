import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoOneDashboardComponent } from './demo-one/demo-one.component';
import { DemoTwoDashboardComponent } from './demo-two/demo-two.component';
import { DemoThreeComponent } from './demo-three/demo-three.component';
import { DemoFourComponent } from './demo-four/demo-four.component';
import { DemoFiveComponent } from './demo-five/demo-five.component';
import { DemoSixComponent } from './demo-six/demo-six.component';
import { DemoSevenComponent } from './demo-seven/demo-seven.component';
import { DemoEightComponent } from './demo-eight/demo-eight.component';
import { DemoNineComponent } from './demo-nine/demo-nine.component';
import { DemoTenComponent } from './demo-ten/demo-ten.component';

const routes: Routes = [
    {
        path: 'demo-one',
        component: DemoOneDashboardComponent,
        data: {
            title: 'Demo One ',
        }
    },
    {
        path: 'demo-two',
        component: DemoTwoDashboardComponent,
        data: {
            title: 'Demo Two',
        }
    },
    {
        path: 'demo-three',
        component: DemoThreeComponent,
        data: {
            title: 'Demo Three',
        }
    },
    {
        path: 'demo-four',
        component: DemoFourComponent,
        data: {
            title: 'Demo Four',
        }
    },
    {
      path: 'demo-five',
      component: DemoFiveComponent,
      data: {
          title: 'Demo Five',
      }
    },
    {
      path: 'demo-six',
      component: DemoSixComponent,
      data: {
          title: 'Demo six',
      }
    },
    {
      path: 'demo-seven',
      component: DemoSevenComponent,
      data: {
          title: 'Demo seven',
      }
    },
    {
      path: 'demo-eight',
      component: DemoEightComponent,
      data: {
          title: 'Demo eight',
      }
    },
    {
      path: 'demo-nine',
      component: DemoNineComponent,
      data: {
          title: 'Demo nine',
      }
    },
    {
      path: 'demo-ten',
      component: DemoTenComponent,
      data: {
          title: 'Demo ten',
      }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {

}

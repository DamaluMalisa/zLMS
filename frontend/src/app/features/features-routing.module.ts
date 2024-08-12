import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartjsComponent } from './charts/chartjs/chartjs.component';
import { ApexChartComponent } from './charts//apexchart/apexchart.component';
import { AntIconComponent } from './icons/ant-icons/ant-icon.component';
import { UniIconComponent } from './icons/uni-icon/uni-icon.component';
import { FeatherIconComponent } from './icons/feather-icon/feather-icon.component';
import { LayoutComponent } from './forms/layouts/layouts.component';
import { ElementsComponent } from './forms/elements/elements.component';
import { ValidationsComponent } from './forms/validations/validations.component';
import { FormsComponentsComponent } from './forms/components/components.component';
import { BasicTableComponent } from './tables/basic-table/basic-table.component';
import { DataTableComponent } from './tables/data-table/data-table.component';
import { ChartsComponent } from './widgets/charts/charts.component';
import { CardsComponent } from './widgets/cards/cards.component';
import { WizardOneComponent } from './wizards/wizard-one/wizard-one.component';
import { GoogleMapsComponent } from './maps/google-maps/google-maps.component';

const routes: Routes = [
  {
    path: 'chartjs',
    component: ChartjsComponent,
    data: {
      title: 'Chart Js'
    }
  },
  {
    path: 'apexchart',
    component: ApexChartComponent,
    data: {
      title: 'Apex Chart',
    }
  },
  {
    path: 'ant-icons',
    component: AntIconComponent,
    data: {
      title: 'Ant Icons',
    }
  },
  {
    path: 'uni-icons',
    component: UniIconComponent,
    data: {
      title: 'Uni Icons',
    }
  },
  {
    path: 'feather-icons',
    component: FeatherIconComponent,
    data: {
      title: 'Feather Icons',
    }
  },
  {
    path: 'layouts',
    component: LayoutComponent,
    data: {
      title: 'Layouts',
    }
  },
  {
    path: 'elements',
    component: ElementsComponent,
    data: {
      title: 'Elements',
    }
  },
  {
    path: 'components',
    component: FormsComponentsComponent,
    data: {
      title: 'Components',
    }
  },
  {
    path: 'validations',
    component: ValidationsComponent,
    data: {
      title: 'Validations',
    }
  },
  {
    path: 'basic-table',
    component: BasicTableComponent,
    data: {
      title: 'Basic Table',
    }
  },
  {
    path: 'data-table',
    component: DataTableComponent,
    data: {
      title: 'All courses',
    }
  },
  {
    path: 'charts',
    component: ChartsComponent,
    data: {
      title: 'Charts',
    }
  },
  {
    path: 'cards',
    component: CardsComponent,
    data: {
      title: 'Cards',
    }
  },
  {
    path: 'wizard-one',
    component:WizardOneComponent ,
    data: {
      title: 'Wizard One',
    }
  },
  {
    path: 'google-maps',
    component:GoogleMapsComponent ,
    data: {
      title: 'Google Maps',
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }

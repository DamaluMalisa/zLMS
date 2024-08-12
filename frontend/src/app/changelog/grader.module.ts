import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { GraderRoutingModule } from './grader-routing.module';
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { GraderComponent } from './changelog/grader.component';
import { DemoComponentsShareModule } from '../components/demo-components-share/demo-components-share.module';
import {SvgIconComponent} from 'angular-svg-icon';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {AppsModule} from '../apps/apps.module';
import {NzRadioModule} from 'ng-zorro-antd/radio';
import {DashboardModule} from '../dashboard/dashboard.module';
import {SaleOverviewComponent} from './changelog/performanceOverview';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NgApexchartsModule} from 'ng-apexcharts';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import {EditorComponent} from '@tinymce/tinymce-angular';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GraderRoutingModule,
    NzCardModule,
    DemoComponentsShareModule,
    NzCollapseModule,
    NzSkeletonModule,
    SvgIconComponent,
    NzInputModule,
    NzFormModule,
    NzButtonModule,
    NzSelectModule,
    AppsModule,
    NzRadioModule,
    DashboardModule,
    NzDropDownModule,
    NgApexchartsModule,
    NgxExtendedPdfViewerModule,
    EditorComponent
  ],
    declarations: [
      GraderComponent,
      SaleOverviewComponent
    ],
    providers: [
        ThemeConstantService
    ]
})

export class GraderModule {}

import { PaymentMethodComponent } from './wizards/wizard-one/payment-method';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';

import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from '../dashboard/dashboard.module';
import { AppsModule } from '../apps/apps.module';

import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { GoogleMapsService } from '../shared/services/google-map-service';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgChartsModule  } from 'ng2-charts';
import { NgApexchartsModule } from "ng-apexcharts";
import { EditorModule } from '@tinymce/tinymce-angular';
import { GoogleMapsModule } from '@angular/google-maps';

import { FeaturesRoutingModule } from './features-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzStepsModule } from 'ng-zorro-antd/steps';


import { ChartjsComponent } from './charts/chartjs/chartjs.component';
import { LineChartComponent } from './charts/chartjs/line-chart';
import { BarChartComponent } from './charts/chartjs/bar-chart';
import { DoughnutChartComponent } from './charts/chartjs/doughnut-chart';
import { RadarChartComponent } from './charts/chartjs/radar-chart';
import { PieChartComponent } from './charts/chartjs/pie-chart';
import { ApexChartComponent } from './charts/apexchart/apexchart.component';
import { BarApexComponent } from './charts/apexchart/bar-apex';
import { BasicBarComponent } from './charts/apexchart/basic-bar';
import { AreaChartComponent } from './charts/apexchart/area-chart';
import { CandlestickComponent } from './charts/apexchart/candlestick';
import { AntIconComponent } from './icons/ant-icons/ant-icon.component';
import { UniIconComponent } from './icons/uni-icon/uni-icon.component';
import { FeatherIconComponent } from './icons/feather-icon/feather-icon.component';
import { LayoutComponent } from './forms/layouts/layouts.component';
import { ValidationsComponent } from './forms/validations/validations.component';
import { ElementsComponent } from './forms/elements/elements.component';
import { FormsComponentsComponent } from './forms/components/components.component';
import { InputGroupComponent } from './forms/components/input-group';
import { TagsComponent } from './forms/components/tag';
import { SwitchComponent } from './forms/components/switch';
import { SliderComponent } from './forms/components/slider';
import { DropzoneComponent } from './forms/components/dropzone';
import { DatepickerComponent } from './forms/components/datepicker';
import { DropdownComponent } from './forms/components/dropdown';
import { EditorComponent } from './forms/components/editors';
import { FormRegisterComponent } from './forms/validations/custom-validations';
import { BasicTableComponent } from './tables/basic-table/basic-table.component';
import { DataTableComponent } from './tables/data-table/data-table.component';
import { BasicComponent } from './tables/basic-table/basic';
import { DynamicComponent } from './tables/data-table/dynamic';
import { TableRowSelectionCustomComponent } from './tables/data-table/selection-operation';
import { TableMultipleSorterComponent } from './tables/data-table/sorter';
import { ChartsComponent } from './widgets/charts/charts.component';
import { CardsComponent } from './widgets/cards/cards.component';
import { DashboardUIComponent } from './widgets/cards/dashboard-ui';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { FeaturesContactComponent } from './widgets/cards/contact';
import { WizardOneComponent } from './wizards/wizard-one/wizard-one.component';
import { CreateAccountComponent } from './wizards/wizard-one/create-accout';
import { ShippingAddressComponent } from './wizards/wizard-one/shipping-address';
import { ReviewComponent } from './wizards/wizard-one/review';
import { GoogleMapsComponent } from './maps/google-maps/google-maps.component';
import { BasicGoogleMapsComponent } from './maps/google-maps/basic-map';
import { BasicGoogleMapsLightComponent } from './maps/google-maps/basic-map-light';
import { ThemeGoogleMapsComponent } from './maps/google-maps/google-map-theme';
import { DarkGoogleMapsComponent } from './maps/google-maps/google-map-dark';


const antdModule = [
  NzDropDownModule,
  AngularSvgIconModule.forRoot(),
  NgChartsModule,
  NgApexchartsModule,
  NzLayoutModule,
  NzGridModule,
  NzSkeletonModule,
  FeaturesRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  NzInputModule,
  NzFormModule,
  NzInputNumberModule,
  NzDatePickerModule,
  NzTimePickerModule,
  NzSelectModule,
  NzUploadModule,
  NzCheckboxModule,
  NzRadioModule,
  NzTagModule,
  NzSwitchModule,
  NzSliderModule,
  NzTableModule,
  EditorModule,
  DashboardModule,
  AppsModule,
  NzProgressModule,
  NzAvatarModule,
  NzToolTipModule,
  NzStepsModule,
  GoogleMapsModule

]
@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        NzCardModule,
        HttpClientModule,
        ...antdModule
    ],
    declarations: [
        ChartjsComponent,
        LineChartComponent,
        BarChartComponent,
        DoughnutChartComponent,
        RadarChartComponent,
        PieChartComponent,
        ApexChartComponent,
        BarApexComponent,
        BasicBarComponent,
        AreaChartComponent,
        CandlestickComponent,
        AntIconComponent,
        UniIconComponent,
        FeatherIconComponent,
        LayoutComponent,
        FormsComponentsComponent,
        ElementsComponent,
        ValidationsComponent,
        InputGroupComponent,
        TagsComponent,
        SwitchComponent,
        SliderComponent,
        DropzoneComponent,
        DatepickerComponent,
        DropdownComponent,
        EditorComponent,
        FormRegisterComponent,
        BasicTableComponent,
        DataTableComponent,
        BasicComponent,
        DynamicComponent,
        TableRowSelectionCustomComponent,
        TableMultipleSorterComponent,
        ChartsComponent,
        CardsComponent,
        DashboardUIComponent,
        FeaturesContactComponent,
        WizardOneComponent,
        CreateAccountComponent,
        ShippingAddressComponent,
        PaymentMethodComponent,
        ReviewComponent,
        GoogleMapsComponent,
        BasicGoogleMapsComponent,
        BasicGoogleMapsLightComponent,
        DarkGoogleMapsComponent,
        ThemeGoogleMapsComponent
    ],
    providers: [
        ThemeConstantService,
        NzMessageService,
        GoogleMapsService
    ]
})

export class FeaturesModule {}

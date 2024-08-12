import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterModule  } from '@angular/router';
import { SharedModule } from '../shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { PerfectScrollbarModule } from 'ngx-om-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-om-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-om-perfect-scrollbar';
import { DatePipe } from '@angular/common'; // Import DatePipe

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { HeaderComponent } from './header/header.component';
import { QuickViewComponent } from './quick-view/quick-view.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';

import { SideNavDirective } from '../directives/side-nav.directive';
import { ThemeConstantService } from '../services/theme-constant.service';
import { MenuComponent } from './header/top-menu';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const antdModule = [
    NzAvatarModule,
    NzBadgeModule,
    NzRadioModule,
    NzDropDownModule,
    NzListModule,
    NzDrawerModule,
    NzDividerModule,
    NzSwitchModule,
    NzInputModule,
    NzButtonModule,
    NzToolTipModule,
    BrowserAnimationsModule,
    AngularSvgIconModule.forRoot(),
    PerfectScrollbarModule,
    NzMenuModule,
    NzLayoutModule,
    NzIconModule,
];

@NgModule({
    exports: [
        CommonModule,
        HeaderComponent,
        QuickViewComponent,
        SideNavComponent,
        SideNavDirective,
        FooterComponent,
        MenuComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        SharedModule,
        ...antdModule,
        NgOptimizedImage
    ],
    declarations: [
        HeaderComponent,
        QuickViewComponent,
        SideNavComponent,
        SideNavDirective,
        FooterComponent,
        MenuComponent
    ],
    providers: [
        ThemeConstantService,
        DatePipe,
        {
          provide: PERFECT_SCROLLBAR_CONFIG,
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ]
})


export class TemplateModule {}

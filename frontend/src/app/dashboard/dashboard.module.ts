import { BlogCardsComponent } from '../container/dashboard/demoFive/blog-card';
import { TimeLineComponent } from '../container/dashboard/demoFive/timeline';
import { KnowledgeBaseComponent } from '../container/dashboard/demoFive/knowledge-base.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common'; // Import DatePipe
import { DecimalPipe } from '@angular/common';

import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgChartsModule  } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PerfectScrollbarModule } from 'ngx-om-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-om-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-om-perfect-scrollbar';
import { FullCalendarModule } from '@fullcalendar/angular';

import { DemoOneDashboardComponent } from './demo-one/demo-one.component';
import { OverviewComponent } from '../container/dashboard/demoOne/overview.component';
import { SaleReportComponent } from '../container/dashboard/demoOne/salesReport.component';
import { SaleGrowthComponent } from '../container/dashboard/demoOne/salesGrowth.component';
import { TopSellingComponent } from '../container/dashboard/demoOne/topSelling.component';
import { BrowserStatesComponent } from '../container/dashboard/demoOne/browserStates.component';

import { DemoTwoDashboardComponent } from './demo-two/demo-two.component';
import { OverviewListComponent } from '../container/dashboard/demoTwo/overviewList.component';
import { SaleRevenueComponent } from '../container/dashboard/demoTwo/salesRevenue.component';
import { SourceRevenueGenerated } from '../container/dashboard/demoTwo/sourceRevenueGenerated.component';
import { NewProductComponent } from '../container/dashboard/demoTwo/newProduct.component';
import { BestSellerComponent } from '../container/dashboard/demoTwo/bestSeller.component';
import { SaleLocationComponent } from '../container/dashboard/demoOne/salesLocation.component';

import { DemoThreeComponent } from './demo-three/demo-three.component';
import { MoneyEarningComponent } from '../container/dashboard/demoThree/moneyEarning.component';
import { ProfitGrowthComponent } from '../container/dashboard/demoThree/profitGrowth.component';
import { OverviewListVerticalComponent } from '../container/dashboard/demoThree/overviewListVertical.component';
import { SalesOverviewComponent } from '../container/dashboard/demoThree/salesOverview.component';
import { TopProductComponent } from '../container/dashboard/demoThree/topProduct.component';
import { RecentDealsComponent } from '../container/dashboard/demoThree/recentDeals.component';
import { ActiveUserComponent } from '../container/dashboard/demoThree/activeUser.component';

import { DemoFourComponent } from './demo-four/demo-four.component';
import { DanialComponent } from '../container/dashboard/demoFour/danial.component';
import { PerformanceComponent } from '../container/dashboard/demoFour/performanceOverview.component';
import { NewsComponent } from '../container/dashboard/demoFour/news.component';
import { TaskListComponent } from '../container/dashboard/demoFour/tasklist.component';
import { MarketingCampaignsComponent } from '../container/dashboard/demoFour/marketingCampaigns.component';
import { ProfileCardComponent } from '../container/dashboard/demoFour/profileCard.component';
import { TeamListComponent } from '../container/dashboard/demoFour/teamMember.component';
import { socialMediaTrafficComponent } from '../container/dashboard/demoFour/socialMediaTraffic.component';
import { userChatComponent } from '../container/dashboard/demoFour/userChat.component';
import { DemoFiveComponent } from './demo-five/demo-five.component';
import { DanialFullComponent } from '../container/dashboard/demoFive/danial.component';
import { UserOverviewComponent } from '../container/dashboard/demoFive/userOverview.component';
import { AppCalendarComponent } from '../container/dashboard/demoFive/calendar-mini';
import { MemberProgress } from '../container/dashboard/demoFive/member-progress';
import { UpcomingEvent } from '../container/dashboard/demoFive/upcoming-event';
import { EditModalComponent } from '../container/dashboard/demoFive/EditModalComponent';
import { MiniInboxComponent } from '../container/dashboard/demoFive/min-inbox';
import { DemoSixComponent } from './demo-six/demo-six.component';
import { DemoSevenComponent } from './demo-seven/demo-seven.component';
import { DemoEightComponent } from './demo-eight/demo-eight.component';
import { DemoNineComponent } from './demo-nine/demo-nine.component';
import { DemoTenComponent } from './demo-ten/demo-ten.component';
import { OverviewSixComponent } from '../container/dashboard/demoSix/overviewSix.component';
import { SaleGrowthStatusComponent } from '../container/dashboard/demoSix/salesGrowthStatus.component';
import { SaleOverviewComponent } from '../container/dashboard/demoSix/salesOverview';
import { OverviewSevenComponent } from '../container/dashboard/demoSeven/overview.component';
import { SourceRevenueTable } from '../container/dashboard/demoSeven/source-revenue';
import { JohnComponent as JohnComponent } from '../container/dashboard/demoNine/John.component';
import { Performance2Component } from '../container/dashboard/demoNine/performanceOverview2.component';
import { News2Component } from '../container/dashboard/demoNine/news2.component';
import { TaskList2Component } from '../container/dashboard/demoNine/tasklist2.component';
import { EditModalComponent2 } from '../container/dashboard/demoNine/EditModal2.component';
import { TodoComponent2 } from '../container/dashboard/demoNine/todolist.component';
import { socialMediaTrafficComponent2 } from '../container/dashboard/demoNine/socialMediaTraffic.Component';
import { googleMapMiniComponent } from '../container/dashboard/demoNine/googleMap';
import { DanialFullComponent2 } from '../container/dashboard/demoTen/danial.component';
import { AppCalendarTwoComponent } from '../container/dashboard/demoNine/calendar-mini';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const antdModule = [

    NzLayoutModule,
    NzButtonModule,
    NzCardModule,
    NzAvatarModule,
    NzRateModule,
    NzBadgeModule,
    NzProgressModule,
    NzRadioModule,
    NzTableModule,
    NzDropDownModule,
    NzTimelineModule,
    NzTabsModule,
    NzTagModule,
    NzListModule,
    NzCalendarModule,
    NzToolTipModule,
    NzCheckboxModule,
    NzBreadCrumbModule,
    NzGridModule,
    NzSkeletonModule,
    NzSpaceModule,
    NzFormModule,
    FormsModule,
    NzSelectModule,
    NzDatePickerModule,
    NzModalModule,
    NzInputModule,
    AngularSvgIconModule.forRoot(),
    NgChartsModule,
    NgApexchartsModule,
    PerfectScrollbarModule,
    FullCalendarModule,
    NzMessageModule
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        DashboardRoutingModule,
        ...antdModule
    ],
  exports: [
    SaleLocationComponent,
    BestSellerComponent,
    TopSellingComponent,
    BrowserStatesComponent,
    SaleReportComponent,
    SaleGrowthComponent,
    SaleRevenueComponent,
    SourceRevenueGenerated,
    SalesOverviewComponent,
    PerformanceComponent,
    SaleOverviewComponent,
  ],
    declarations: [
        DemoOneDashboardComponent,
        OverviewComponent,
        SaleReportComponent,
        SaleGrowthComponent,
        SaleLocationComponent,
        TopSellingComponent,
        BrowserStatesComponent,
        DemoTwoDashboardComponent,
        OverviewListComponent,
        SaleRevenueComponent,
        SourceRevenueGenerated,
        NewProductComponent,
        BestSellerComponent,
        DemoThreeComponent,
        MoneyEarningComponent,
        ProfitGrowthComponent,
        OverviewListVerticalComponent,
        SalesOverviewComponent,
        TopProductComponent,
        RecentDealsComponent,
        ActiveUserComponent,
        DemoFourComponent,
        DanialComponent,
        PerformanceComponent,
        NewsComponent,
        TaskListComponent,
        MarketingCampaignsComponent,
        ProfileCardComponent,
        TeamListComponent,
        socialMediaTrafficComponent,
        userChatComponent,
        DemoFiveComponent,
        DanialFullComponent,
        DanialFullComponent2,
        UserOverviewComponent,
        AppCalendarComponent,
        MemberProgress,
        UpcomingEvent,
        EditModalComponent,
        KnowledgeBaseComponent,
        TimeLineComponent,
        MiniInboxComponent,
        BlogCardsComponent,
        DemoSixComponent,
        DemoSevenComponent,
        DemoEightComponent,
        DemoNineComponent,
        DemoTenComponent,
        OverviewSixComponent,
        SaleGrowthStatusComponent,
        SaleOverviewComponent,
        OverviewSevenComponent,
        SourceRevenueTable,
        JohnComponent,
        Performance2Component,
        News2Component,
        TaskList2Component,
        EditModalComponent2,
        TodoComponent2,
        socialMediaTrafficComponent2,
        googleMapMiniComponent,
        AppCalendarTwoComponent
    ],
    providers: [
        ThemeConstantService,
        DatePipe,
        DecimalPipe,
        {
          provide: PERFECT_SCROLLBAR_CONFIG,
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ],
})

export class DashboardModule {

 }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const DEMO_COMPONENT_ROUTES = [
    {path: 'components/alert', loadChildren: () => import('./alert/index.module').then(m => m.NzDemoAlertModule)},
    {path: 'components/auto-complete', loadChildren: () => import('./auto-complete/index.module').then(m => m.NzDemoAutoCompleteModule)},
    {path: 'components/avatar', loadChildren: () => import('./avatar/index.module').then(m => m.NzDemoAvatarModule)},
    {path: 'components/badge', loadChildren: () => import('./badge/index.module').then(m => m.NzDemoBadgeModule)},
    {path: 'components/breadcrumb', loadChildren: () => import('./breadcrumb/index.module').then(m => m.NzDemoBreadcrumbModule)},
    {path: 'components/button', loadChildren: () => import('./button/index.module').then(m => m.NzDemoButtonModule)},
    {path: 'components/calendar', loadChildren: () => import('./calendar/index.module').then(m => m.NzDemoCalendarModule)},
    {path: 'components/card', loadChildren: () => import('./card/index.module').then(m => m.NzDemoCardModule)},
    {path: 'components/carousel', loadChildren: () => import('./carousel/index.module').then(m => m.NzDemoCarouselModule)},
    {path: 'components/cascader', loadChildren: () => import('./cascader/index.module').then(m => m.NzDemoCascaderModule)},
    {path: 'components/checkbox', loadChildren: () => import('./checkbox/index.module').then(m => m.NzDemoCheckboxModule)},
    {path: 'components/collapse', loadChildren: () => import('./collapse/index.module').then(m => m.NzDemoCollapseModule)},
    {path: 'components/comment', loadChildren: () => import('./comment/index.module').then(m => m.NzDemoCommentModule)},
    {path: 'components/date-picker', loadChildren: () => import('./date-picker/index.module').then(m => m.NzDemoDatePickerModule)},
    {path: 'components/drawer', loadChildren: () => import('./drawer/index.module').then(m => m.NzDemoDrawerModule)},
    {path: 'components/dropdown', loadChildren: () => import('./dropdown/index.module').then(m => m.NzDemoDropdownModule)},
    {path: 'components/empty', loadChildren: () => import('./empty/index.module').then(m => m.NzDemoEmptyModule)},
    {path: 'components/form', loadChildren: () => import('./form/index.module').then(m => m.NzDemoFormModule)},
    {path: 'components/grid', loadChildren: () => import('./grid/index.module').then(m => m.NzDemoGridModule)},
    {path: 'components/input', loadChildren: () => import('./input/index.module').then(m => m.NzDemoInputModule)},
    {path: 'components/list', loadChildren: () => import('./list/index.module').then(m => m.NzDemoListModule)},
    {path: 'components/menu', loadChildren: () => import('./menu/index.module').then(m => m.NzDemoMenuModule)},
    {path: 'components/message', loadChildren: () => import('./message/index.module').then(m => m.NzDemoMessageModule)},
    {path: 'components/modal', loadChildren: () => import('./modal/index.module').then(m => m.NzDemoModalModule)},
    {path: 'components/notification', loadChildren: () => import('./notification/index.module').then(m => m.NzDemoNotificationModule)},
    {path: 'components/radio', loadChildren: () => import('./radio/index.module').then(m => m.NzDemoRadioModule)},
    {path: 'components/progress', loadChildren: () => import('./progress/index.module').then(m => m.NzDemoProgressModule)},
    {path: 'components/rate', loadChildren: () => import('./rate/index.module').then(m => m.NzDemoRateModule)},
    {path: 'components/skeleton', loadChildren: () => import('./skeleton/index.module').then(m => m.NzDemoSkeletonModule)},
    {path: 'components/typography', loadChildren: () => import('./typography/index.module').then(m => m.NzDemoTypographyModule)},
];

const routes: Routes = [
    ...DEMO_COMPONENT_ROUTES,
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ComponentsRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraderComponent } from './changelog/grader.component';

const routes: Routes = [
    {
        path: 'grader/:id',
        component: GraderComponent,
        data: {
            title: 'Grader'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GraderRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ThemeConstantService } from './services/theme-constant.service';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        NzIconModule,
        SearchPipe
    ],
    imports: [
        RouterModule,
        CommonModule,
        NzIconModule,
        NzToolTipModule,
    ],
    declarations: [
        SearchPipe
    ],
    providers: [
        ThemeConstantService
    ]
})

export class SharedModule { }

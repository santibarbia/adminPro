import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

const RUTAS: Routes = [
    { path: '', component: PagesComponent,children:[
        {path:'dashboard',component:DashboardComponent},
        {path:'progress',component:ProgressComponent},
        {path:'graficas',component:Graficas1Component},
        {path:'',pathMatch:'full',redirectTo:'/dashboard'},
    ] },
    

];

@NgModule({
    imports: [RouterModule.forChild(RUTAS)],
    exports: [RouterModule]
})
export class PagesRoutes {}

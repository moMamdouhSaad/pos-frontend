import { NgModule, Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TablesComponent } from './containers/tables/tables.component';
import { PosScreenComponent } from './containers/pos-screen/pos-screen.component';

const dineInRoutes : Routes =  [
    {
    path:"",
    component:TablesComponent
    },
    {
    path:"table_no/:table_no",
    component:PosScreenComponent
    }
]

@NgModule({
    declarations:[],
    imports:[CommonModule,
    RouterModule.forChild(dineInRoutes)
    ],
    exports:[],

})

export class DineInRoutingModule{}
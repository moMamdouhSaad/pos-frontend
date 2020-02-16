import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosScreenComponent } from './containers/pos-screen/pos-screen.component';
import { TablesComponent } from './containers/tables/tables.component';
import { DineInRoutingModule } from './dine-in-routing-module';
import { MaterialModule } from '../material.module';
import { TableBtnComponent } from './components/table-btn/table-btn.component';
import { PosScreenModule } from '../pos-screen/pos-screen.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PosScreenComponent, TablesComponent, TableBtnComponent],
  imports: [
    CommonModule,
    DineInRoutingModule,
    RouterModule,
    MaterialModule,
    PosScreenModule
  ]
})
export class DineInModule { }

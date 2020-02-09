import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillComponent } from './containers/bill/bill.component';
import { BillHeaderComponent } from './components/bill/bill-header/bill-header.component';
import { BillFooterComponent } from './components/bill/bill-footer/bill-footer.component';
import { BillBodyComponent } from './components/bill/bill-body/bill-body.component';
import { BillOptionComponent } from './components/bill/bill-option/bill-option.component';
import { MaterialModule } from '../material.module';
import { BillBodyItemComponent } from './components/bill/bill-body-item/bill-body-item.component';
import { ItemsCategoriesComponent } from './containers/items-categories/items-categories.component';
import { ItemsComponent } from './components/items/items.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PosScreenComponent } from './containers/pos-screen/pos-screen.component';



@NgModule({
  declarations: [BillComponent, ItemsComponent, CategoriesComponent, BillHeaderComponent, BillFooterComponent, BillBodyComponent, BillOptionComponent, BillBodyItemComponent, ItemsCategoriesComponent, PosScreenComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[PosScreenComponent]
})
export class PosScreenModule { }

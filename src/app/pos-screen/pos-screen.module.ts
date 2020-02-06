import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillComponent } from './containers/bill/bill.component';
import { ItemsComponent } from './containers/items/items.component';
import { CategoriesComponent } from './containers/categories/categories.component';
import { BillHeaderComponent } from './components/bill/bill-header/bill-header.component';
import { BillFooterComponent } from './components/bill/bill-footer/bill-footer.component';
import { BillBodyComponent } from './components/bill/bill-body/bill-body.component';
import { BillOptionComponent } from './components/bill/bill-option/bill-option.component';
import { MaterialModule } from '../material.module';
import { BillBodyItemComponent } from './components/bill/bill-body-item/bill-body-item.component';



@NgModule({
  declarations: [BillComponent, ItemsComponent, CategoriesComponent, BillHeaderComponent, BillFooterComponent, BillBodyComponent, BillOptionComponent, BillBodyItemComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[BillComponent,ItemsComponent,CategoriesComponent]
})
export class PosScreenModule { }

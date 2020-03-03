import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './containers/customer-form/customer-form.component';
import { DeliveryRoutingModule } from './delivery-routing-module'
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PosScreenModule } from '../pos-screen/pos-screen.module';
import { PosScreenComponent } from './containers/pos-screen/pos-screen.component';


@NgModule({
  declarations: [CustomerFormComponent, PosScreenComponent],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PosScreenModule
  ]
})
export class DeliveryModule { }

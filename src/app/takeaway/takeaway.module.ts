import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakeawayComponent } from './containers/takeaway/takeaway.component';
import { TakeawayRoutingModule } from './takeaway-routing.module';
import { PosScreenModule } from '../pos-screen/pos-screen.module';


@NgModule({
  declarations: [TakeawayComponent],
  imports: [
    CommonModule,
    TakeawayRoutingModule,
    PosScreenModule
  ],
})
export class TakeawayModule { }

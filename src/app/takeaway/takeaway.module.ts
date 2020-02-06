import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakeawayComponent } from './containers/takeaway/takeaway.component';
import { TakeawayRoutingModule } from './takeaway-routing.module';


@NgModule({
  declarations: [TakeawayComponent],
  imports: [
    CommonModule,
    TakeawayRoutingModule
  ],
})
export class TakeawayModule { }

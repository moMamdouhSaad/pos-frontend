import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TakeawayComponent } from './containers/takeaway/takeaway.component';


const takeawayRoutes : Routes = [
  {
    path: '',
    component: TakeawayComponent
  } 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(takeawayRoutes)
  ],
  exports:[RouterModule]

})
export class TakeawayRoutingModule { }

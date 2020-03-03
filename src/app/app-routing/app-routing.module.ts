import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  } ,
  {
    path:'takeaway',
    loadChildren:'../takeaway/takeaway.module#TakeawayModule'
  },
  {
    path:"dine-in",
    loadChildren:'../dine-in/dine-in.module#DineInModule'
  },
  {
  path:'delivery',
  loadChildren:'../delivery/delivery.module#DeliveryModule'
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

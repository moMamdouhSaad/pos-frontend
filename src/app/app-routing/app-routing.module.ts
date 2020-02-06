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
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

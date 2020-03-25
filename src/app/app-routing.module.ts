import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/auth.guard';

const routes : Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full' } ,
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'takeaway',
    loadChildren:'./takeaway/takeaway.module#TakeawayModule',
    canActivate: [AuthGuard]

  },
  {
    path:"dine-in",
    loadChildren:'./dine-in/dine-in.module#DineInModule',
    canActivate: [AuthGuard]
  },
  {
  path:'delivery',
  loadChildren:'./delivery/delivery.module#DeliveryModule',
  canActivate: [AuthGuard]
  },
  { 
    path: 'admin-panel', loadChildren: () => import('./admin-panel/admin-panel.module').then(m => m.AdminPanelModule),
    canActivate: [AuthGuard]

   }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

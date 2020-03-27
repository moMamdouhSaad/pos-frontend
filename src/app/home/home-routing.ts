import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../home/containers/home-page/home-page.component';

const homeRoutes : Routes = [
  {
    path: 'home',
    component: HomePageComponent
  } ,
  {
    path:'',
    component: HomePageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(homeRoutes)],
  exports:[RouterModule]
})
// export const homeRouting =  RouterModule;
export class HomeRoutingModule { }

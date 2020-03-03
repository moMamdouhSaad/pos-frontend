import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './containers/customer-form/customer-form.component';
import { PosScreenComponent } from './containers/pos-screen/pos-screen.component';


const deliveryRoutes : Routes = [
{
path:'',
component:CustomerFormComponent
},
{
path:'delivery/order',
component:PosScreenComponent
}
]

@NgModule({
    imports:[RouterModule.forChild(deliveryRoutes)]
})

export class DeliveryRoutingModule{}
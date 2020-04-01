import { Injectable } from "@angular/core";
import { CustomerApi } from '../api/customer-api';
import { DeliveryState } from '../states/delivery-state';
import { Customer } from 'src/app/models/customer';
import { BillFacade } from 'src/app/pos-screen/bill-facade';
import { Observable } from 'rxjs';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';


@Injectable({
    providedIn:"root"
})

export class DeliveryFacade{

    constructor(private cutsomerApi: CustomerApi, private deliveryState: DeliveryState,
         private billFacade: BillFacade, public errHandlerService: ErrorHandlerService){}
    
    search(customerPhone){
      return this.cutsomerApi.search(customerPhone)
    }

    setCustomerInfo(customerInfo: Customer){
        this.billFacade.setCustomerInfo(customerInfo);
    }
    getCustomerInfo$():Observable<any>{
       return this.billFacade.getCustomerInfo$();
    }

}
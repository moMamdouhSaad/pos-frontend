import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { Customer } from 'src/app/models/customer';

@Injectable({
    providedIn:"root"
})

export class DeliveryState{
private customerInfoSubject = new Subject();

setCustomerInfo(customerInfo: Customer){
    this.customerInfoSubject.next(customerInfo)
}
getCustomerInfo(){
    return this.customerInfoSubject.asObservable();
}


}
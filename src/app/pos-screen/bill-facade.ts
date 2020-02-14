import { Injectable } from '@angular/core';
import { BillStateService } from './state/bill-state.service';
import { BillApi } from './services/bill-api';
import { tap, map, flatMap, concatMap } from "rxjs/operators"
import { of, BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn:"root" //TODO : provide posScreenModule
})

export class BillFacade {
billItems = [];
    constructor(private billState:BillStateService ,private billApi:BillApi){
        // this.billState.billItemsTest$.pipeq(tap(x=>this.billItems.push(x))).subscribe();
        
       
        
        billApi.getTaxRate().pipe(
            map(data=>data.response),
            map(data=>data.tax_rate),
            tap((data:number)=>{
            this.billState.setTaxRate(data)
        })

    ).subscribe();
}
    addItemToBill(item){
        this.billState.addItem(item);
        this.getBillSubTotal$();
        this.billState.setItemPriceToSubTotal(item.product_price);
        this.billState.setItemPriceToTotal(item.product_price)
    }

    getBillItems$(){
        return this.billState.getBillItems$();
    }
    setOrderType(orderType:string){
        this.billState.setOrderType(orderType)
    }
    getOrderType$(){
        return this.billState.getOrderType$();
    }
    getTaxRate$(){
        return this.billState.getTaxRate();
    }
    getBillSubTotal$(){
        return this.billState.getBillSubTotal$();
    }
    getBillTotal$(){
        return this.billState.getBillTotal$();
    }

}
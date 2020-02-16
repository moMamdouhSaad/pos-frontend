import { Injectable } from '@angular/core';
import { BillStateService } from './state/bill-state.service';
import { BillApi } from './services/bill-api';
import { tap, map, flatMap, concatMap } from "rxjs/operators"
import { BillModel } from './models/Bill-model';
import { ServerResponse } from '../models/ServerResponse';


@Injectable({
    providedIn:"root" //TODO : provide posScreenModule
})

export class BillFacade {
billItems = [];
    constructor(private billState:BillStateService ,private billApi:BillApi){
        // this.billState.billItemsTest$.pipeq(tap(x=>this.billItems.push(x))).subscribe()
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
    setBillSubtTotal(subTotal:number){
        this.billState.setBillSubTotal(subTotal)
    }
    getBillSubTotal$(){
        return this.billState.getBillSubTotal$();
    }
    getBillTotal$(){
        return this.billState.getBillTotal$();
    }

    cashBill(bill:BillModel){
      return  this.billApi.cash(bill)
    }
    setTableNumber(tableNo:number){
        this.billState.setTableNumber(tableNo);
    }
    getTableNumber$(){
        return this.billState.getTableNumber$();
    }
    resetBillStates(){
        this.billState.resetBillStates();
    }
    setItemsToBillByTableNo(tableNo:number){
        this.billApi.getBillByTableNo(tableNo).pipe(map((x:any)=>x.response)).subscribe(data=>{
            console.log(data)
            console.log(data[0].lines)
            this.billState.setBillItems(data[0].lines);
            console.log(data.subtotal)
            this.billState.setBillSubTotal(data[0].subtotal)
            this.billState.setBillTotal(data[0].total)
        })
    }
}
import { Injectable } from '@angular/core';
import { BillStateService } from './state/bill-state.service';


@Injectable({
    providedIn:"root" //TODO : provide posScreenModule
})

export class BillFacade {

    constructor(private billState:BillStateService ){}
    
    addItemToBill(item){
        this.billState.addItem(item)
    }

    getBillItems$(){
        return this.billState.getBillItems$();
    }


}
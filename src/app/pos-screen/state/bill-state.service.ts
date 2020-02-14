import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillStateService {
  private billItems$ = new BehaviorSubject<{product_name:string,product_price:number}[]>(null);
  private orderType$ = new BehaviorSubject<string>(null);
  private taxRate$ = new BehaviorSubject<number>(null);
  private billSubTotal$ = new BehaviorSubject<number>(0);
  private billTotal$ = new BehaviorSubject<number>(0);

  constructor() { }

   addItem(item){
     const currentValue = this.billItems$.getValue();
     if(!currentValue){
      this.billItems$.next([item]) // first item in the bill body
     }
     else{
      this.billItems$.next([...currentValue, item])
     }
 
   } 
   getBillItems$(){
     return this.billItems$;
   }

   setOrderType(orderType:string){
     this.orderType$.next(orderType)
   }

   getOrderType$():Observable<string>{
     return this.orderType$.asObservable();
   }

   setTaxRate(taxRate:number){
     this.taxRate$.next(taxRate);
   } 
   getTaxRate():Observable<number>{
     return this.taxRate$.asObservable();
   }
   setItemPriceToSubTotal(itemPrice:number){
    const currentSubTotalValue = this.billSubTotal$.getValue()
    let subTotal = currentSubTotalValue + itemPrice ;
    this.billSubTotal$.next(subTotal)
   }   
   getBillSubTotal$(){
     return this.billSubTotal$.asObservable();
   }
   setItemPriceToTotal(itemPrice:number){
    const currentTotalValue =this.billSubTotal$.getValue() + this.billSubTotal$.getValue() * this.taxRate$.getValue();
    this.billTotal$.next(currentTotalValue)
   }   
   getBillTotal$(){
     return this.billTotal$.asObservable();
   }

}

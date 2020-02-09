import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillStateService {

  private billItems$ = new BehaviorSubject<{product_name:string,product_price:number}[]>(null);

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
     return this.billItems$.asObservable();
   }

}

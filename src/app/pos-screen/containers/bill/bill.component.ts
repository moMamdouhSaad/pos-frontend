import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BillFacade } from '../../bill-facade';
import { Observable, pipe, BehaviorSubject, Subject } from 'rxjs';
import { map, exhaust, share, filter, takeUntil } from 'rxjs/operators';
import { BillModel } from '../../models/Bill-model';
import { ServerResponse } from 'src/app/models/ServerResponse';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit, OnDestroy {
  @Input() orderType:Observable<string>
  cashedBill:BillModel;
  sendBillToServer = new BehaviorSubject<any>(null);
  _destroy = new Subject();
  constructor(public billFacade:BillFacade,private router:Router) { }

  ngOnInit() {
    this.billFacade.getCustomerInfo$().pipe(takeUntil(this._destroy)).subscribe(data=>console.log(data))
  }
  saveBill(billStatus:string){
      let orderType: string;
      let lines: any;
      let subTotal: number;
      let total: number;
      let taxRate: number;
      let tableNo: number;
      let customerInfo: Customer;
      this.billFacade.getCustomerInfo$().pipe(takeUntil(this._destroy)).subscribe(data=>{console.log(data);customerInfo = data})
      this.billFacade.getOrderType$().pipe(takeUntil(this._destroy)).subscribe(data=>{console.log(data);orderType = data});
      this.billFacade.getTaxRate$().pipe(takeUntil(this._destroy)).subscribe(data=>taxRate = data);
      this.billFacade.getBillSubTotal$().pipe(takeUntil(this._destroy)).subscribe(data=>subTotal = data);
      this.billFacade.getBillTotal$().pipe(takeUntil(this._destroy)).subscribe(data=>total = data);
      this.billFacade.getTableNumber$().pipe(takeUntil(this._destroy)).subscribe(data=>tableNo = data)
      this.billFacade.getBillItems$().pipe(takeUntil(this._destroy)).pipe(
        filter(data=>data!=null),
        map((data:any)=>{
        return data.map(a=>{
          if(a){
            return {
              product:a.product_id,
              qty:1,
              total:a.product_price
            } 
          }
            
            })
        }
      ))
      .subscribe(data=>{
        lines = data})

let sentBillObject :BillModel = {bill_status:billStatus,bill_type:orderType,lines:lines,subtotal:subTotal,
  tax_rate:taxRate,total:total,table_number:tableNo,customerInfo:customerInfo};
        console.log(sentBillObject)
this.billFacade.cashBill(sentBillObject).subscribe((data:ServerResponse)=>{
  if(data.success == true){
    this.router.navigate(["/"])
    this.billFacade.resetBillStates()
  }
})
console.log(customerInfo)
  }


ngOnDestroy(){
  this._destroy.next();
  this._destroy.unsubscribe();
}
}

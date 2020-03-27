import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BillFacade } from '../../bill-facade';
import { Observable, pipe, BehaviorSubject, Subject } from 'rxjs';
import { map, exhaust, share, filter, takeUntil, tap } from 'rxjs/operators';
import { BillModel } from '../../models/Bill-model';
import { ServerResponse } from 'src/app/models/ServerResponse';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

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
  constructor(public billFacade: BillFacade,private router: Router, public errHandlerService: ErrorHandlerService) { }

  ngOnInit() {
    this.billFacade.getCustomerInfo$().pipe(takeUntil(this._destroy)).subscribe(data=>console.log(data));
    this.billFacade.getBillItems$().pipe(takeUntil(this._destroy)).subscribe(data=>{
      //determine if there is a lines in bill or not
      // to hide an show cash and store btns
      if(data){
        this.billFacade.setLineState(false)
        return
      }
      this.billFacade.setLineState(true)
    })
  }
  saveBill(billStatus:string){
      this.billFacade.setLineState(true) // to hide cash btn when cash clicked
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
      filter(data=>data!=null),map((data:any)=>{return data.map(a=>{if(a){return {
              product:a.product_id,
              qty:1,
              total:a.product_price }}})})).subscribe(data=>{lines = data})
let sentBillObject :BillModel = {bill_status:billStatus,bill_type:orderType,lines:lines,subtotal:subTotal,
tax_rate:taxRate,total:total,table_number:tableNo,customerInfo:customerInfo};
    this.billFacade.cashBill(sentBillObject).pipe(tap(data=>console.log("clicked"))).subscribe((data:ServerResponse)=>{
      if(data.success == true){
        this.router.navigate(["/"])
        this.billFacade.resetBillStates()
      }
    },err=>{
      console.log("err in connection with server")
      this.errHandlerService.showDialog();
    })
    
  }


ngOnDestroy(){
  this._destroy.next();
  this._destroy.unsubscribe();
}
}

import { Component, OnInit, Input } from '@angular/core';
import { BillFacade } from '../../bill-facade';
import { Observable, pipe, BehaviorSubject } from 'rxjs';
import { map, exhaust, share, filter } from 'rxjs/operators';
import { BillModel } from '../../models/Bill-model';
import { ServerResponse } from 'src/app/models/ServerResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  @Input() orderType:Observable<string>
  cashedBill:BillModel;
  sendBillToServer = new BehaviorSubject<any>(null);
  constructor(private billFacade:BillFacade,private router:Router) { }

  ngOnInit() {
  }
  saveBill(billStatus:string){
      let orderType : string;
      let lines : any ;
      let subTotal : number;
      let total : number;
      let taxRate : number;
      let tableNo:number;
      this.billFacade.getOrderType$().subscribe(data=>orderType = data);
      this.billFacade.getTaxRate$().subscribe(data=>taxRate = data);
      this.billFacade.getBillSubTotal$().subscribe(data=>subTotal = data);
      this.billFacade.getBillTotal$().subscribe(data=>total = data);
      this.billFacade.getTableNumber$().subscribe(data=>tableNo = data)
      this.billFacade.getBillItems$().pipe(
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

let sentBillObject :BillModel = {bill_status:billStatus,bill_type:orderType,lines:lines,subtotal:subTotal,tax_rate:taxRate,total:total,table_number:tableNo};
        console.log(sentBillObject)
this.billFacade.cashBill(sentBillObject).subscribe((data:ServerResponse)=>{
  if(data.success == true){
    this.router.navigate(["/"])
    this.billFacade.resetBillStates()
  }
})

  }



}

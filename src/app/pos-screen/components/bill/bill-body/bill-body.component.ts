import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, concatMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-bill-body',
  templateUrl: './bill-body.component.html',
  styleUrls: ['./bill-body.component.css']
})
export class BillBodyComponent implements OnInit {
  @Input("billItems") billItems$:Observable<{product_name:string,product_price:number}[]>
  start:number = 0;
  billItemsSlicer$:BehaviorSubject<number> = new BehaviorSubject<number>(2);

  constructor() { 
  }

  ngOnInit() {

    this.billItemsSlicer$.pipe(
      tap(val=>this.billItems$.pipe(filter(data=>data !=null) ,
       map(data=>{
      console.log(data)
      console.log(val)
      data.slice(val,val+2)
    }
      )).subscribe(data=>{console.log(data)})
      )
      ).subscribe(data=>console.log(data));
  }
  downBtnClicked(){
    this.start += 5;
  }
  upBtnClicked(){
    this.billItemsSlicer$.next(this.billItemsSlicer$.getValue() + 2);
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, concatMap, filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-bill-body',
  templateUrl: './bill-body.component.html',
  styleUrls: ['./bill-body.component.css']
})
export class BillBodyComponent implements OnInit {
  @Input("billItems") billItems$:Observable<{product_name:string,product_price:number}[]>;
  start:number = 0;
  constructor() { 
  }

  ngOnInit() {
    this.billItems$.subscribe(data=>{console.log(data)})
  }
  downBtnClicked(){
    this.start += 5;
  }
  upBtnClicked(){
    this.start -= 5;
  }

}

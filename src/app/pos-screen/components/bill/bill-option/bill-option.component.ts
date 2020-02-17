import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bill-option',
  templateUrl: './bill-option.component.html',
  styleUrls: ['./bill-option.component.css']
})
export class BillOptionComponent implements OnInit {
@Output() onStoreOrCashClicked = new EventEmitter<any>();
isBtnDisabled:boolean = false;
 
constructor() { }

ngOnInit() {
  }

saveBill(billStatus:string){
  this.isBtnDisabled = true;
  this.onStoreOrCashClicked.emit(billStatus)
}

}

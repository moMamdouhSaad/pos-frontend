import { Component, OnInit, Input } from '@angular/core';
import { BillFacade } from '../../bill-facade';

@Component({
  selector: 'app-pos-screen',
  templateUrl: './pos-screen.component.html',
  styleUrls: ['./pos-screen.component.css']
})
export class PosScreenComponent implements OnInit {
@Input() orderType:string;

  constructor(public billFacade:BillFacade) { }

  ngOnInit() {
    this.billFacade.setOrderType(this.orderType);
  }

  

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bill-body-item',
  templateUrl: './bill-body-item.component.html',
  styleUrls: ['./bill-body-item.component.css']
})
export class BillBodyItemComponent implements OnInit {
@Input() item:{product_name:string,product_price:string};
  constructor() { }

  ngOnInit() {
  }

}

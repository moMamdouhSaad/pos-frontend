import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bill-body',
  templateUrl: './bill-body.component.html',
  styleUrls: ['./bill-body.component.css']
})
export class BillBodyComponent implements OnInit {
  @Input("billItems") billItems$:Observable<{product_name:string,product_price:number}[]>
  constructor() { }

  ngOnInit() {
    
  }

}

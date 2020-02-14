import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bill-footer',
  templateUrl: './bill-footer.component.html',
  styleUrls: ['./bill-footer.component.css']
})
export class BillFooterComponent implements OnInit {
  @Input("taxRate")  taxRate$:Observable<number>;
  @Input("subTotal") subTotal$:Observable<number>;
  @Input("total") total$:Observable<number>;  

  constructor() { }

  ngOnInit() {
  }

}

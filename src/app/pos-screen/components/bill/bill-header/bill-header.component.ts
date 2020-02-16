import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bill-header',
  templateUrl: './bill-header.component.html',
  styleUrls: ['./bill-header.component.css']
})
export class BillHeaderComponent implements OnInit {
  @Input() orderType:Observable<string>
  @Input() tableNo:Observable<number>


  
  constructor() { }

  ngOnInit() {
  }

}

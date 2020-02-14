import { Component, OnInit, Input } from '@angular/core';
import { BillFacade } from '../../bill-facade';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  @Input() orderType:Observable<string>
  constructor(private billFacade:BillFacade) { }

  ngOnInit() {
  }


}

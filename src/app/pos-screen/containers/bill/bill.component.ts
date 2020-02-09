import { Component, OnInit } from '@angular/core';
import { BillFacade } from '../../bill-facade';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor(private billFacade:BillFacade) { }

  ngOnInit() {
  }

}

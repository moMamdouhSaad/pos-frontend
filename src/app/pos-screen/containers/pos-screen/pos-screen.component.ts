import { Component, OnInit } from '@angular/core';
import { BillFacade } from '../../bill-facade';

@Component({
  selector: 'app-pos-screen',
  templateUrl: './pos-screen.component.html',
  styleUrls: ['./pos-screen.component.css']
})
export class PosScreenComponent implements OnInit {

  constructor(private billFacade:BillFacade) { }

  ngOnInit() {
  }

  addItemToBill($event){
    console.log($event)
  }

}

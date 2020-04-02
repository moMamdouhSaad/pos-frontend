import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/header.service';
import { BillStateService } from 'src/app/pos-screen/state/bill-state.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private headerService: HeaderService, private billService: BillStateService) { }

  ngOnInit() {
   this.headerService.setAdminPanelChoice(null);
    this.billService.setLinesState(null);
    this.billService.setTableNumber(null);
    this.billService.setBillItems(null);
  }

}

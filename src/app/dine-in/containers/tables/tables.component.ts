import { Component, OnInit } from '@angular/core';
import { TableFacade } from '../../facades/table-facade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor(private tableFacade:TableFacade,private router:Router) { 
    this.tableFacade.loadAllTables()
  }

  ngOnInit() {
  }

tableClicked(tableNo:number){
  this.router.navigate(['/dine-in/table_no', tableNo])
  this.tableFacade.setTableStates(tableNo);
}

}


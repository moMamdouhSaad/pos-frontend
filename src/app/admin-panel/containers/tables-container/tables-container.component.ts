import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TablesFacade } from './tables-facades';

@Component({
  selector: 'app-tables-container',
  templateUrl: './tables-container.component.html',
  styleUrls: ['./tables-container.component.css']
})
export class TablesContainerComponent implements OnInit {
  addFormGroup: FormGroup = new FormGroup({
    tablesNu: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(20), Validators.max(100)]),
  })
  constructor(public tablesFacade: TablesFacade) {}

  ngOnInit() {
  }
  addNewTables(){
    if(this.addFormGroup.invalid){
      return
    }
    this.tablesFacade.addNewTables(parseInt(this.addFormGroup.get("tablesNu").value))
  }

}

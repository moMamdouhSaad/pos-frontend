import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-btn',
  templateUrl: './table-btn.component.html',
  styleUrls: ['./table-btn.component.css']
})
export class TableBtnComponent implements OnInit {
  @Input('table') table:any;
  @Output() onTableClicked = new EventEmitter<any>();
  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToTable(tableNo:number) {
    this.onTableClicked.emit(tableNo)
  }

}

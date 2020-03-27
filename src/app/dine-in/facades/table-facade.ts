import { Injectable } from "@angular/core";
import { TableApi } from '../api/table-api';
import { tap,map } from 'rxjs/operators';
import { TableState } from '../states/table-state';
import { BillFacade } from 'src/app/pos-screen/bill-facade';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Injectable({
    providedIn:"root"
})

export class TableFacade{
    constructor(private tableApi:TableApi, private tableState:TableState, private billFacade:BillFacade,
        private errHandlerService: ErrorHandlerService){}

    loadAllTables(){
      return this.tableApi.getAllTables().pipe(map(x=>x.response),
      map(data=>data.map(x=>{return{status:x.table_status,table_number:x.table_number,table_id:x._id}})),
      tap(tables=>{
        this.tableState.setAllTablesStates(tables)
    }
        )).subscribe(()=>{},err=>{
            this.errHandlerService.showDialog();
        });
  }  

  getAllTables$(){
      return this.tableState.getAllTableStates();
  }

  setTableStates(tableNo:number){
      this.billFacade.setTableNumber(tableNo);
      this.billFacade.setItemsToBillByTableNo(tableNo)
  }
  
}
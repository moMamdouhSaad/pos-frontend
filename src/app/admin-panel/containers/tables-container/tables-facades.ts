import { Injectable } from '@angular/core';
// import { TablesApi } from '../../api/tablesApi'
import { TablesState } from './tables-state';
import { TablesApi } from '../../api/tablesApi';
import { map } from 'rxjs/operators';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
@Injectable({providedIn:"root"})

export class TablesFacade{

    constructor(private tablesApi: TablesApi, private tablesState: TablesState,
        private errHandlerService: ErrorHandlerService  ){
    }

    setTablesNums(){
         this.tablesApi.getAllTables().pipe(map(data=>data.response)).subscribe(data=>{
             this.tablesState.setNumsOfTables(data.length)
         }
         ,err=>{
            this.errHandlerService.showDialog();
        })
    }

    
    getTablesNums$(){
        return this.tablesState.getNumsOfTables$();
    }

    addNewTables(nums: number){
        this.tablesApi.addTables(nums).subscribe(data=>console.log(data))
        this.tablesState.addNewTables(nums);

    }

}
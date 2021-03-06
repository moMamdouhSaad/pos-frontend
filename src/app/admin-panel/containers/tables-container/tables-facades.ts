import { Injectable } from '@angular/core';
// import { TablesApi } from '../../api/tablesApi'
import { TablesState } from './tables-state';
import { TablesApi } from '../../api/tablesApi';
import { map } from 'rxjs/operators';
@Injectable({providedIn:"root"})

export class TablesFacade{

    constructor(private tablesApi: TablesApi, private tablesState: TablesState  ){
       this.setTablesNums()
    }

    setTablesNums(){
         this.tablesApi.getAllTables().pipe(map(data=>data.response)).subscribe(data=>{
             this.tablesState.setNumsOfTables(data.length)
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
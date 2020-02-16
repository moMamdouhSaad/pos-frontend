import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({providedIn:"root"})

export class TableState{
    allTablesStates = new BehaviorSubject<any>(null);


    setAllTablesStates(tables:any){
        this.allTablesStates.next(tables)
    }

    getAllTableStates():Observable<any>{
        return this.allTablesStates.asObservable();
    }
}
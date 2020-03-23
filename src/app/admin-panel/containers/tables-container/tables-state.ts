import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({providedIn:"root"})
export class TablesState{

    numsOfTables  = new BehaviorSubject<number>(null); 

    setNumsOfTables(numOfTables: number):void{
        this.numsOfTables.next(numOfTables)
    }
    getNumsOfTables$():Observable<number>{
        return this.numsOfTables.asObservable();
    }

    addNewTables(numsOfAdded: number){
        const currentNums = this.numsOfTables.getValue();
        this.numsOfTables.next(currentNums + numsOfAdded)
    }


}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn:"root"})

export class TablesApi{
readonly tableAPI = 'http://192.168.1.10:80/api/table/';
constructor(private http: HttpClient){}

addTables(numsOfTables: number):Observable<any>{
    return this.http.post(this.tableAPI, {tablesAdded:numsOfTables})
}
getAllTables():Observable<any>{
    return this.http.get(this.tableAPI)
}

}
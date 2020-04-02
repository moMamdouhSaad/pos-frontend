import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:"root"
})

export class TableApi{
    readonly tableAPI = 'http://192.168.1.10:80/api/table';
    constructor(private http:HttpClient){}

    getAllTables():Observable<any>{
        return this.http.get(this.tableAPI);
    }
}
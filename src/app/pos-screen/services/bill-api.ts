import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn:"root"
})

export class BillApi{
    constructor(private http:HttpClient){}
    readonly taxRateAPI = 'http://localhost:5000/api/taxrate';

    getTaxRate():Observable<any>{
        return this.http.get<any>(`${this.taxRateAPI}/currentTaxRate`);
    }
    
}
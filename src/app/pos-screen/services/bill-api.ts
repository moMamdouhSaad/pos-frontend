import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BillModel } from '../models/Bill-model';
import { ServerResponse } from 'src/app/models/ServerResponse';


@Injectable({
    providedIn:"root"
})

export class BillApi{
    constructor(private http:HttpClient){}
    readonly taxRateAPI = 'http://localhost:5000/api/taxrate';
    readonly billAPI = 'http://localhost:5000/api/bill';

    getTaxRate():Observable<any>{
        return this.http.get<any>(`${this.taxRateAPI}/currentTaxRate`);
    }
    cash(bill:BillModel){
        console.log(bill)
        return this.http.post<ServerResponse>(`${this.billAPI}/`,bill);
    }
    getBillByTableNo(tableNo:number){
        return this.http.get<ServerResponse>(`${this.billAPI}/${tableNo}`);
    }
    
}
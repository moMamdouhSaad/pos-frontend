import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:'root'})

export class CustomerApi{

constructor(private http:HttpClient){}
readonly tableAPI = 'http://192.168.1.10:80/api/customer';
   
search(customerPhone){
return this.http.post(`${this.tableAPI}/search`,{customerPhone:customerPhone})
}



}
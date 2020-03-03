import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:'root'})

export class CustomerApi{

constructor(private http:HttpClient){}
readonly tableAPI = 'http://localhost:5000/api/customer';
   
search(customerPhone){
return this.http.post(`${this.tableAPI}/search`,{customerPhone:customerPhone})
}



}
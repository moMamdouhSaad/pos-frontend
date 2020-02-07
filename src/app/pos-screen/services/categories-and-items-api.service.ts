import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CategoriesAndItemsApiService {

  readonly categoryAPI = 'http://localhost:5000/api/category/';
  readonly productAPI = 'http://localhost:5000/api/product/';

  constructor(private http :HttpClient) { }

  getAllCategories():Observable<any[]>{   // TODO : make an interface to categories 
    return this.http.get<any[]>(this.productAPI)
  }


}

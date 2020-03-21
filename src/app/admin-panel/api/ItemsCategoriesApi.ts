import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriesResponse } from 'src/app/models/category';
import { ItemsResponse, Item } from 'src/app/models/item';


@Injectable({"providedIn":"root"})

export class ItemCategoriesApi{
    readonly categoryAPI = 'http://localhost:5000/api/category/';
    readonly itemAPI = 'http://localhost:5000/api/product/';

    constructor(private http :HttpClient) { }

    getAllCategories():Observable<CategoriesResponse>{   
        return this.http.get<CategoriesResponse>(this.categoryAPI)
      }
    
    getAllProducts():Observable<ItemsResponse>{
        return this.http.get<ItemsResponse>(this.itemAPI)
      }

    saveEditedItem(item: Item):Observable<any>{
        return this.http.patch<any>(this.itemAPI+item._id,item)
    }  


    
}
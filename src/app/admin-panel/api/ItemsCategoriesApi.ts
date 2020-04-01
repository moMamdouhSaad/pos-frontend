import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriesResponse, Category } from 'src/app/models/category';
import { ItemsResponse, Item } from 'src/app/models/item';


@Injectable({"providedIn":"root"})

export class ItemCategoriesApi{
    readonly categoryAPI = 'http://localhost:80/api/category/';
    readonly itemAPI = 'http://localhost:80/api/product/';

    constructor(private http :HttpClient) { }

    getAllCategories():Observable<CategoriesResponse>{   
        return this.http.get<CategoriesResponse>(this.categoryAPI)
      }
    
    getAllProducts():Observable<ItemsResponse>{
        return this.http.get<ItemsResponse>(this.itemAPI)
      }

    saveEditedItem(item: Item):Observable<any>{
        return this.http.patch<any>(this.itemAPI+item._id, item)
    }  

    addNewItem(item: Item):Observable<any>{
      return this.http.post<any>(this.itemAPI, item)
    }

    saveEditedCategory(category: Category):Observable<any>{
      return this.http.patch<any>(this.categoryAPI+category._id, category)
  } 
    addNewCategory(category: Category):Observable<any>{
      return this.http.post<any>(this.categoryAPI, category)
    } 
    
}
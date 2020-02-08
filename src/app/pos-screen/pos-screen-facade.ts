import { Injectable } from "@angular/core";
import { CategoriesAndItemsApiService } from './services/categories-and-items-api.service';
import { tap,map, pluck } from 'rxjs/operators';
import { CategoriesAndItemsStateService } from './state/categories-and-items-state.service';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
    providedIn:"root" // provide posScreenModule
})

export class PosScreenFacade{
    constructor(private categoryAndItemsApi:CategoriesAndItemsApiService,private posScreenState:CategoriesAndItemsStateService){}

    loadCategories(){
        return this.categoryAndItemsApi.getAllCategories().pipe(map(categories=>categories.response),
            map(categories=>{
                return  categories.map(({__v,...keepProps})=>keepProps)
            }),
            tap(categories=>{
               this.posScreenState.setCategories(categories)})
                ).subscribe(); 
    }
     getCategories$():Observable<Category[]>{
         return this.posScreenState.getCategories$();
    }               
}
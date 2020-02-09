import { Injectable } from "@angular/core";
import { CategoriesAndItemsApiService } from './services/categories-and-items-api.service';
import { tap,map, pluck } from 'rxjs/operators';
import { CategoriesAndItemsStateService } from './state/categories-and-items-state.service';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { Item } from '../models/item';

@Injectable({
    providedIn:"root" //TODO : provide posScreenModule
})

export class CategoriesAndItemsFacade{
    constructor(private categoryAndItemsApi:CategoriesAndItemsApiService,private posScreenState:CategoriesAndItemsStateService){}

    loadCategories(){
        return this.categoryAndItemsApi.getAllCategories().pipe(
            map(categories=>categories.response),
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

    loadProducts(){
        return this.categoryAndItemsApi.getAllProducts().pipe(
        map(products=>products.response),
        map(products=>
            {
                return  products.map(({__v,...keepProps})=>keepProps)
            }),
        tap(products=>{
            this.posScreenState.setProducts(products)
        })      
        ).subscribe()
    }
    getProducts$():Observable<Item[]>{
        return this.posScreenState.getProducts$();
    }

   getProductsByCategoryId(category_id:string){
    return this.getProducts$().pipe(map(products=>{
    return products.filter(product=>product.category_id == category_id)
    }),
    tap(products=>{
        this.posScreenState.setCurrentProducts(products);
        this.posScreenState.setSelectedCategory(category_id);
    })
    ).subscribe()
   }
   getCurrentProducts$():Observable<Item[]>{
       return this.posScreenState.getCurrentProducts$();
   } 
   getSelectedCategory$():Observable<string>{
       return this.posScreenState.getSelectedCategory$();
   }

}
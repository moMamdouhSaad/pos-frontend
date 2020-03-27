import { Injectable } from '@angular/core';
import { ItemCategoriesApi } from '../../api/ItemsCategoriesApi';
import { map, tap } from 'rxjs/operators';
import { ItemsState } from './items-state';
import { Category } from 'src/app/models/category';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Injectable({providedIn:"root"})

export class ItemsFacade{

    constructor(private itemsApi: ItemCategoriesApi, private itemsState: ItemsState ,
        public errHandlerService: ErrorHandlerService){
        // this.loadCategories();
        // this.loadProducts();
        // this.getItemsByCategory$().subscribe(data=>console.log(data))
    }
loadCategories(){
        return this.itemsApi.getAllCategories().pipe(
            map(categories=>categories.response),
            map(categories=>{
                return  categories.map(({__v,...keepProps})=>keepProps)
            }),
            tap(categories=>{
               this.itemsState.setCategories(categories)})
                ).subscribe(()=>{},err=>{
                    this.errHandlerService.showDialog();
                });
    }

getCategories$():Observable<Category[]>{
        return this.itemsState.getCategories$();
        }
        
loadProducts(){
            return this.itemsApi.getAllProducts().pipe(
            map(products=>products.response),
            map(products=>
                {
                    return  products.map(({__v,...keepProps})=>keepProps)
                }),
            tap(products=>{
                this.itemsState.setItems(products)
            })      
            ).subscribe()
}

getItems$():Observable<Item[]>{
            return this.itemsState.getItems$();
}
    
setItemsByCategoryId(categoryId: String){
return this.itemsState.getItems$().pipe(map(data=>{
return data.filter(x=>x.category_id == categoryId)
}),tap(data=>{
    this.itemsState.setItemsByCategoryId(data);
})).subscribe()
}   

getItemsByCategory$(){
    return this.itemsState.getItemsByCategory$();
}

saveEditedItem(item: Item){
    this.itemsState.updateItem(item)
    return this.itemsApi.saveEditedItem(item)
}

addNewItem(item: Item){
    this.itemsState.addItem(item)
    return this.itemsApi.addNewItem(item)
}
removeItem(item: Item){
    this.itemsState.removeItem(item)
}

}

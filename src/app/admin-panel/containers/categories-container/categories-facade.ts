import { Injectable } from '@angular/core';
import { ItemCategoriesApi } from '../../api/ItemsCategoriesApi';
import { CategoriesState } from './categories-state';
import { map, tap } from 'rxjs/operators';
import { Category } from 'src/app/models/category';
import { Observable } from 'rxjs';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';



@Injectable({providedIn:"root"})

export class CategoriesFacade{

    constructor(private categoriesApi: ItemCategoriesApi, private categoriesState: CategoriesState,
        public errHandlerService: ErrorHandlerService){
    }

    loadCategories(){
        return this.categoriesApi.getAllCategories().pipe(
            map(categories=>categories.response),
            map(categories=>{
                return  categories.map(({__v,...keepProps})=>keepProps)
            }),
            tap(categories=>{
               this.categoriesState.setCategories(categories)})
                ).subscribe(()=>{},err=>{
                    this.errHandlerService.showDialog();
                });
    }

    getCategories$():Observable<Category[]>{
        return this.categoriesState.getCategories$();
        }

    saveEditedCategory(category: Category){
        this.categoriesState.updateCategory(category)
         return this.categoriesApi.saveEditedCategory(category);
     }   

    addCategory(category: Category){
        this.categoriesState.addNewCategory(category)
        return this.categoriesApi.addNewCategory(category)
    }
    removeCategory(categoryRemoved: Category){
        this.categoriesState.removeCategory(categoryRemoved)
    }
}
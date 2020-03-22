import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category';
import { BehaviorSubject } from 'rxjs';


@Injectable({providedIn:"root"})
export class CategoriesState{
    private categories$ = new BehaviorSubject<Category[]>(null); 

    setCategories(categories :Category[]){
        this.categories$.next(categories)
    }
    getCategories$(){
        return this.categories$.asObservable();
    }
    updateCategory(updatedCategory: Category){
        const categories = this.categories$.getValue();
        const indexOfUpdated = categories.findIndex(category=>category._id===updatedCategory._id);
        categories[indexOfUpdated] = updatedCategory;
        this.setCategories(categories)
    }
    addNewCategory(category: Category){
        const categories = this.categories$.getValue();
        this.categories$.next([...categories,category])
    }
      

}
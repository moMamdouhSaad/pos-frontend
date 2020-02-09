import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Item } from 'src/app/models/item';


@Injectable({
  providedIn: 'root'
})
export class CategoriesAndItemsStateService {

  private categories$ = new BehaviorSubject<Category[]>(null); 
  private selectedCategory$ = new BehaviorSubject<string>(null);
  private products$ = new BehaviorSubject<Item[]>(null); // all products in db
  private currentProducts$ = new BehaviorSubject<Item[]>(null); // current products on the view ( when specefic category clicked)

  constructor() { }

  setCategories(categories :Category[]){
    this.categories$.next(categories)
  }
  getCategories$(){
    return this.categories$.asObservable();
  }
  setProducts(products :Item[]){
    this.products$.next(products);
  }
  getProducts$(){
    return this.products$.asObservable();
  }
  setCurrentProducts(currentProducts:Item[]){
    this.currentProducts$.next(currentProducts)
  }
  getCurrentProducts$(){
    return this.currentProducts$.asObservable();
  }
  setSelectedCategory(categoryID:string){
    this.selectedCategory$.next(categoryID)
  }
  getSelectedCategory$(){
    return this.selectedCategory$.asObservable();
  }
}

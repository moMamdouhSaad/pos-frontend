import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesAndItemsStateService {

  private categories$ = new BehaviorSubject<any>(null); // TODO : make an model to categories
  constructor() { }

  setCategories(categories){
    this.categories$.next(categories)
  }
  getCategories$(){
    return this.categories$.asObservable();
  }

}

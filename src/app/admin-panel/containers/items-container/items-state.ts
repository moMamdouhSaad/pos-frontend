import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category';
import { BehaviorSubject } from 'rxjs';
import { Item } from 'src/app/models/item';


@Injectable({providedIn:"root"})
export class ItemsState{
    private categories$ = new BehaviorSubject<Category[]>(null); 
    private items$ = new BehaviorSubject<Item[]>(null); // all products in db
    private selectedItems$ = new BehaviorSubject<Item[]>(null); // all products in db

     setCategories(categories :Category[]){
        this.categories$.next(categories)
      }
      getCategories$(){
        return this.categories$.asObservable();
      }               

      setItems(products :Item[]){
        this.items$.next(products);
      }
      getItems$(){
        return this.items$.asObservable();
      }
      setItemsByCategoryId(items: Item[]){
        this.selectedItems$.next(items)
      }
      getItemsByCategory$(){
          return this.selectedItems$.asObservable();
      }

      updateItem(updatedItem: Item){
          const items = this.items$.getValue();
          const indexOfUpdated = items.findIndex(item => item._id === updatedItem._id);
          items[indexOfUpdated] = updatedItem;
          this.items$.next([...items])
      }

      addItem(addedItem: Item){
        const items = this.items$.getValue();
        this.items$.next([...items, addedItem])

      }

}
import { Component, OnInit } from '@angular/core';
import { ItemsFacade } from './items-facade';
import { Item } from 'src/app/models/item';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.css']
})
export class ItemsContainerComponent implements OnInit {
itemList: Item[];
  constructor(private itemsFacade: ItemsFacade) { }

  ngOnInit() {
    // this.itemsFacade.getCategories$();
    // this.itemsFacade.getItems$().subscribe(data=>console.log(data))
    // this.itemsFacade.getItemsByCategory$().subscribe(data=>{
    // console.log(this.itemList)  
    // this.itemList = data})
    // this.itemsFacade.getCategories$().subscribe(data=>console.log(data))
    }

    setItems(categoryId){
     this.itemsFacade.setItemsByCategoryId(categoryId);
    }
    getItems$(){
      return this.itemsFacade.getItems$();
    }

    saveEditedItem($event){
      this.itemsFacade.saveEditedItem($event).subscribe(data=>
        {console.log(data)
      });
    }
}

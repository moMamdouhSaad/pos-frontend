import { Component, OnInit } from '@angular/core';
import { ItemsFacade } from './items-facade';
import { Item } from 'src/app/models/item';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AddItemDialogsComponent } from '../../views/dialogs/add-item-dialogs/add-item-dialogs.component';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.css']
})
export class ItemsContainerComponent implements OnInit {
itemList: Item[];
  constructor(public itemsFacade: ItemsFacade, public dialog: MatDialog) { 
  }

  ngOnInit() {
    this.itemsFacade.loadCategories();
    this.itemsFacade.loadProducts();
    }

    setItems(categoryId){
     this.itemsFacade.setItemsByCategoryId(categoryId);
    }
    getItems$(){
      return this.itemsFacade.getItems$();
    }

    saveEditedItem($event){
      this.itemsFacade.saveEditedItem($event).subscribe(data=>
        {
          console.log(data)
        });
    }

   openAddItemDialog(){
     const dialogRef = this.dialog.open(AddItemDialogsComponent,{
      width: '60%',
      data:{categoryList:this.itemsFacade.getCategories$()}
     })
     dialogRef.componentInstance.onSave.subscribe((data: Item)=>{
       this.itemsFacade.addNewItem(data).subscribe(data=>{         
         console.log(data)
       },
       err=>{
         this.itemsFacade.errHandlerService.showDialog();
         this.itemsFacade.removeItem(data)
       }
       )
     })
   } 
}

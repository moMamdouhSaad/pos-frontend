import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EditItemDialogsComponent } from '../dialogs/edit-item-dialogs/edit-item-dialogs.component';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  @Input()  itemList: Observable<Item[]>;
  @Input()  categoryList: Observable<Category[]>;
  @Output() saveEditedItem =  new EventEmitter<any>();
              
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openEditDialog(itemId, itemName, itemPrice, itemCategory){
    const dialogRef = this.dialog.open(EditItemDialogsComponent, {
      width: '60%',
      data: {itemName: itemName, itemPrice: itemPrice, itemCategory: itemCategory, categoryList: this.categoryList, itemId: itemId}
    });
    
    const sub = dialogRef.componentInstance.onSave.subscribe(data=>{
      this.saveEditedItem.emit(data)
      console.log(data)})

  }
  
}

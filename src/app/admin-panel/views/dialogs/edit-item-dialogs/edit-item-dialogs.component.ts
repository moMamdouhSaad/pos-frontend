import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-edit-item-dialogs',
  templateUrl: './edit-item-dialogs.component.html',
  styleUrls: ['./edit-item-dialogs.component.css']
})
export class EditItemDialogsComponent implements OnInit {
public selected;
onSave = new EventEmitter(null);


editFormGroup: FormGroup = new FormGroup({
  itemName: new FormControl(" ", [Validators.required, Validators.maxLength(20)]),
  itemPrice: new FormControl(" ", [Validators.required, Validators.maxLength(5)]),
  itemCategory: new FormControl(" ", [Validators.required]),
})
  constructor(public dialogRef: MatDialogRef<EditItemDialogsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
  
    ngOnInit() {
      this.selected = this.data.itemCategory;
      this.editFormGroup.setValue({
        itemName: this.data.itemName,
        itemPrice: this.data.itemPrice,
        itemCategory: this.data.itemCategory
      })
  }

 saveEditedItem(){
    if(this.editFormGroup.invalid){
      return
    } 
    const item: Item  ={
      _id:this.data.itemId,
      product_name: this.editFormGroup.get("itemName").value,
      product_price: this.editFormGroup.get("itemPrice").value,
      category_id: this.editFormGroup.get("itemCategory").value
      } 
      this.onSave.emit(item);

    this.dialogRef.close();
  } 
}

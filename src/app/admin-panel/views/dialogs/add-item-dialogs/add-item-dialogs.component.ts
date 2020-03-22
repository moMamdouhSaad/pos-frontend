import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-add-item-dialogs',
  templateUrl: './add-item-dialogs.component.html',
  styleUrls: ['./add-item-dialogs.component.css']
})
export class AddItemDialogsComponent implements OnInit {
  onSave = new EventEmitter(null);

  addFormGroup: FormGroup = new FormGroup({
    itemName: new FormControl("", [Validators.required, Validators.maxLength(20)]),
    itemPrice: new FormControl("", [Validators.required, Validators.maxLength(5)]),
    itemCategory: new FormControl("", [Validators.required]),
  })
  constructor(public dialogRef: MatDialogRef<AddItemDialogsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  addItem(){
    if(this.addFormGroup.invalid){
      return
    }
    const item: Item = {
      product_name: this.addFormGroup.get("itemName").value,
      product_price: this.addFormGroup.get("itemPrice").value,
      category_id: this.addFormGroup.get("itemCategory").value
    }
    this.onSave.emit(item)
    this.dialogRef.close();

  }
}

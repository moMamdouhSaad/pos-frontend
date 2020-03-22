import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-edit-category-dialog',
  templateUrl: './edit-category-dialog.component.html',
  styleUrls: ['./edit-category-dialog.component.css']
})
export class EditCategoryDialogComponent implements OnInit {
  onSave = new EventEmitter(null);

  editFormGroup: FormGroup = new FormGroup({
    categoryName: new FormControl("", [Validators.required, Validators.maxLength(20)]),
  })
  constructor(public dialogRef: MatDialogRef<EditCategoryDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.editFormGroup.setValue({
      categoryName: this.data.categoryName,
  });
}

saveEditedCategory(){
  if(this.editFormGroup.invalid){
    return
  }
  const category :Category = {
    _id:this.data.categoryId,
    category_name: this.editFormGroup.get("categoryName").value
  }
  this.onSave.emit(category);
  this.dialogRef.close();

}

}

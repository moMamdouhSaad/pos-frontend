import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.css']
})
export class AddCategoryDialogComponent implements OnInit {
  onSave = new EventEmitter(null);
  addFormGroup: FormGroup = new FormGroup({
    categoryName: new FormControl("", [Validators.required, Validators.maxLength(20)]),
  })
  constructor(public dialogRef: MatDialogRef<AddCategoryDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  addCategory(){
    if(this.addFormGroup.invalid){
      return
    }
    const category: Category = {
      category_name: this.addFormGroup.get("categoryName").value,
    }
    this.onSave.emit(category)
    this.dialogRef.close();

  }
}

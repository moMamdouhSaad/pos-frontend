import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { MatDialog } from '@angular/material/dialog';
import { EditCategoryDialogComponent } from '../dialogs/edit-category-dialog/edit-category-dialog.component';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  @Input()  categoryList: Observable<Category[]>;
  @Output() savedEditedCategory = new EventEmitter<any>();
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openEditDialog(categoryId, categoryName){
    const dialogRef = this.dialog.open(EditCategoryDialogComponent,{
      width: '60%',
      data: {categoryId: categoryId, categoryName: categoryName}
    })
    const sub = dialogRef.componentInstance.onSave.subscribe(data=>{
      this.savedEditedCategory.emit(data);
      console.log(data)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { CategoriesFacade } from './categories-facade';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryDialogComponent } from '../../views/dialogs/add-category-dialog/add-category-dialog.component';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-categories-container',
  templateUrl: './categories-container.component.html',
  styleUrls: ['./categories-container.component.css']
})
export class CategoriesContainerComponent implements OnInit {

  constructor(public categoriesFacade: CategoriesFacade, public dialog: MatDialog) { }

  ngOnInit() {
    this.categoriesFacade.loadCategories();
  }

  savedEditedCategory($event){
    this.categoriesFacade.saveEditedCategory($event).subscribe(data=>{
      console.log(data)
    })
  }

  openAddCategoryDialog(){
    const dialogRef = this.dialog.open(AddCategoryDialogComponent,{
     width: '60%',
    })
    dialogRef.componentInstance.onSave.subscribe((data: Category)=>{
      this.categoriesFacade.addCategory(data).subscribe(data=>{         
        console.log(data)
      },err=>{
        this.categoriesFacade.removeCategory(data)
        this.categoriesFacade.errHandlerService.showDialog();

      })
    })
  } 
}

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrDialogComponent } from './components/dialogs/err-dialog/err-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(public dialog: MatDialog) { }

  test(){
alert("asd");
  }
  showDialog(){
    const dialogRef = this.dialog.open(ErrDialogComponent,{
      width: '60%',
      data: {categoryId: "categoryId", categoryName: "categoryName"}
    })
  }
}

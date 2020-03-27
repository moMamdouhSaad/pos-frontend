import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { ErrDialogComponent } from './components/dialogs/err-dialog/err-dialog.component';



@NgModule({
  declarations: [HeaderComponent, ErrDialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports:[HeaderComponent, MaterialModule, ErrDialogComponent],
  entryComponents:[ErrDialogComponent]
})
export class CoreModule { }

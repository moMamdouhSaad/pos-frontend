import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';


 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatFormFieldModule,MatInputModule,MatAutocompleteModule,MatSelectModule,MatDialogModule
  ],
  exports:[MatButtonModule,MatToolbarModule,
    MatDividerModule,MatFormFieldModule,
    MatInputModule,MatAutocompleteModule,
    MatSelectModule,MatDialogModule]
})
export class MaterialModule { }

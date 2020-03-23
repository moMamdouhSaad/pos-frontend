import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-edit-user-dialogs',
  templateUrl: './edit-user-dialogs.component.html',
  styleUrls: ['./edit-user-dialogs.component.css']
})
export class EditUserDialogsComponent implements OnInit {
  onSave = new EventEmitter(null);
  editFormGroup: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.maxLength(20)]),
    role: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")]),
  })
  constructor(public dialogRef: MatDialogRef<EditUserDialogsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.editFormGroup.setValue({
      username: this.data.username,
      role: this.data.role
  });

  }
  saveEditedUser(){
    if(this.editFormGroup.invalid){
      return
    }
    const user: User  ={
      _id:this.data.userId,
      username: this.editFormGroup.get("username").value,
      role: this.editFormGroup.get("role").value,
      } 
      this.onSave.emit(user);

    this.dialogRef.close();

  }
}

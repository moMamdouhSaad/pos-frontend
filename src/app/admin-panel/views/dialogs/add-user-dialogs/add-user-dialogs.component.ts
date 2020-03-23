import { Component, OnInit, EventEmitter, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add-user-dialogs',
  templateUrl: './add-user-dialogs.component.html',
  styleUrls: ['./add-user-dialogs.component.css']
})
export class AddUserDialogsComponent implements OnInit {
  onSave = new EventEmitter(null);

  addFormGroup: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.maxLength(20)]),
    password: new FormControl("", [Validators.required, Validators.maxLength(20)]),
    role: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")]),
  })
  constructor(public dialogRef: MatDialogRef<AddUserDialogsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }


  addUser(){
    if(this.addFormGroup.invalid){
      return
    }
    const user: User = {
      username: this.addFormGroup.get("username").value,
      password: this.addFormGroup.get("password").value,
      role: this.addFormGroup.get("role").value
    }
    this.onSave.emit(user)
    this.dialogRef.close();
  }
}

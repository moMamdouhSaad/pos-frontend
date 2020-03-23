import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogsComponent } from '../dialogs/edit-user-dialogs/edit-user-dialogs.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
@Input() userList: Observable<User[]>
@Output() savedEditedUser = new EventEmitter<any>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openEditDialog(userId, username, role){
    const dialogRef = this.dialog.open(EditUserDialogsComponent,{
      width: '60%',
      data: {userId: userId, username: username, role: role}
    })
    const sub = dialogRef.componentInstance.onSave.subscribe(data=>{
      this.savedEditedUser.emit(data);
      console.log(data)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { UsersFacade } from './users-facade';
import { MatDialog } from '@angular/material/dialog';
import { AddUserDialogsComponent } from '../../views/dialogs/add-user-dialogs/add-user-dialogs.component';
import { User } from 'src/app/models/user';
import { UsersApi } from '../../api/usersApi';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.css']
})
export class UsersContainerComponent implements OnInit {

  constructor(private userFacade: UsersFacade, public dialog : MatDialog) { }

  ngOnInit() {
    this.userFacade.getAllUsers$().subscribe(data=>{
      console.log(data)
    })
  }


  openAddUserDialog(){
    const dialogRef = this.dialog.open(AddUserDialogsComponent,{
      width: '60%',
     })
     dialogRef.componentInstance.onSave.subscribe((data: User)=>{
       this.userFacade.addUser(data).subscribe(data=>{         
         console.log(data)
       })
       console.log(data)
     })
 
  }

  updateUser(user: User){
    this.userFacade.updateUser(user).subscribe(data=>{
      console.log(data)
    })
  }
}

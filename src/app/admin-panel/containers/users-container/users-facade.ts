import { Injectable } from "@angular/core";
import { UsersState } from './users-state';
import { UsersApi } from '../../api/usersApi';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';


@Injectable({providedIn:"root"})

export class UsersFacade{

    constructor(private usersApi: UsersApi, private usersState: UsersState){
        this.loadUsers();
    }


    loadUsers():void{
        this.usersApi.getAllUsers().pipe(map(x=>x.response),tap((x=>this.usersState.setUsers(x)))).subscribe();
    }

    getAllUsers$():Observable<User[]>{
        return this.usersState.getUsers$();
    }

    addUser(user):Observable<any>{
     this.usersState.addUser(user)   
    return this.usersApi.addNewUser(user);
    }
    updateUser(user: User){
        this.usersState.updateUser(user)
        return this.usersApi.updateUser(user);
     }  
}
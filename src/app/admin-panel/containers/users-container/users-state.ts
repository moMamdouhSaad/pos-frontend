import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({providedIn:"root"})

export class UsersState{

    users = new BehaviorSubject<User[]>(null);
    
    setUsers(users: User[]){
        this.users.next(users);
    }
    getUsers$(){
        return this.users.asObservable();
    }
    addUser(user: User){
        const users = this.users.getValue();
        this.setUsers([...users, user])
    }
    updateUser(updatedUser: User){
        const users = this.users.getValue();
        const indexOfUpdated = users.findIndex(user=>user._id===updatedUser._id);
        users[indexOfUpdated] = updatedUser;
        console.log(users)
        this.setUsers(users)
    }

}
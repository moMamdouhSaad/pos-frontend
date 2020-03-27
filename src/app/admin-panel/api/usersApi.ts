import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({providedIn:"root"})
export class UsersApi{
    readonly userAPI = 'http://192.168.1.3:80/api/user/';
    constructor(private http: HttpClient){}

    getAllUsers():Observable<any>{
        return this.http.get(this.userAPI)
    }

    addNewUser(user: User){
        return this.http.post(this.userAPI, user)
    }
    updateUser(user: User){
        return this.http.patch(this.userAPI+user._id, user);
    }

}
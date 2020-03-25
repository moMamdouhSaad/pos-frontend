import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly authAPI = 'http://localhost:5000/auth';

  constructor(private http: HttpClient) { }

  login(username: string, password: string){
    return this.http.post<{token: string}>(this.authAPI, {username: username, password: password})
    .pipe(map(result=>{
      localStorage.setItem('access_token',result.token);
      return true
    }))
  }

  logout() {
    localStorage.removeItem('access_token');
  }
  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}

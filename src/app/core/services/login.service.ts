import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

//const baseUrl = "http://localhost:8080/login"

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API_URL = 'http://localhost:8080/'
  private readonly LOGGED_USER = 'user-logged'

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  login(user: User): Observable<User> {
    return this.http.post<User>(this.API_URL+'login', user);
  }

  setLoggedUser(user: User) : void {
    sessionStorage.setItem(this.LOGGED_USER, JSON.stringify(user));
  } 

  logout(): void {
    sessionStorage.removeItem(this.LOGGED_USER);
    this.router.navigate(['/login']);
  }

  getLoggedUser(): User {
    return JSON.parse(<string> sessionStorage.getItem(this.LOGGED_USER));
  }
}

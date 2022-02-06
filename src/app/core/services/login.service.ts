import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Player } from '../models/player.model';

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

  login(player: Player): Observable<Player> {
    return this.http.post<Player>(this.API_URL+'login', player);
  }

  setLoggedUser(player: Player) : void {
    sessionStorage.setItem(this.LOGGED_USER, JSON.stringify(player));
  } 

  logout(): void {
    sessionStorage.removeItem(this.LOGGED_USER);
    this.router.navigate(['/login']);
  }

  getLoggedUser(): Player {
    return JSON.parse(<string> sessionStorage.getItem(this.LOGGED_USER));
  }
}

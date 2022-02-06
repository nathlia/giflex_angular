import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../../models/player.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  player: Player = new Player();
  url: string = '';

  constructor(
    private loginService: LoginService,
    private router: Router
    ) { 
      this.url = router.url;
      this.player = this.loginService.getLoggedUser();
    }

  ngOnInit(): void {
  }

  logout() {
    this.loginService.logout();
  }

}

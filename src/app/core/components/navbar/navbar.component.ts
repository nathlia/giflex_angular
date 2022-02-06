import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User = new User();
  url: string = '';

  constructor(
    private loginService: LoginService,
    private router: Router
    ) { 
      this.url = router.url;
      this.user = this.loginService.getLoggedUser();
    }

  ngOnInit(): void {
  }

  logout() {
    this.loginService.logout();
  }

}

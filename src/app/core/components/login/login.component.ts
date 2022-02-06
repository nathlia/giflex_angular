import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = this.formBuilder.group(
   { 
    username: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
    password: this.formBuilder.control('', [Validators.required, Validators.minLength(3)])
  });  

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
  }

  login() {
    if (this.formLogin.valid) {
      let username = this.formLogin.value.username;
      let password = this.formLogin.value.password;

      this.loginService.login(new User(username, '', password, '')).subscribe(
        next => {
          this.loginService.setLoggedUser(next)
          this.router.navigate(['/characters'])
        })     
    } 
    else {
      alert('Wrong Username or Password!')
    }
  }

}

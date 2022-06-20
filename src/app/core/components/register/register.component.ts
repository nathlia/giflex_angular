import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserAccount } from '../../models/user-account.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userAccount: UserAccount = {
    username: '',
    name: '',
    password: '',    
    // isAdmin: false,    
  };

  constructor(
    private userAccountService: UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {    
  }

  register(): void {
    console.log('Register was successful:');
    console.log(this.userAccount);

    const data = {
      username: this.userAccount.username,
      name: this.userAccount.name,
      password: this.userAccount.password
    };

    this.userAccountService.create(data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e),
    });
  }

}

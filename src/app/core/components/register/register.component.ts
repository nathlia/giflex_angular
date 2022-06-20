import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
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
    private router: Router
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
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            color: 'var(--primary)',
            background: 'var(--main)',
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Registered successfully'
          })          
          this.router.navigate(['/login'])

        },
        error: (e) => console.error(e),
      });    
  }
}

import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { fn } from '@angular/compiler/src/output/output_ast';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlerService implements ErrorHandler {

  constructor(
    private loginService: LoginService,
    private zone: NgZone
  ) { }

  handleError(error: HttpErrorResponse | any): void {

    if (error instanceof HttpErrorResponse) {
      console.log(error.status)
      console.log(error.error)
      // console.log(error.message)
      // console.log(error.url);  
          
      switch (error.status) {
        case 400:
          alert(error.error)
          break;      
        case 401:
          alert('Session expired')
          this.zone.run(() => {
            this.loginService.logout();
          })          
          break;      
        case 403:
          alert('Access denied!')
          break;      
        default:
          break;
      }            
    }    
  }
}

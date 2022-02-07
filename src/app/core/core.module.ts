import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
     NavbarComponent,
     LoginComponent,
     RegisterComponent
     
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    AppRoutingModule
  ],
  providers: [
    AuthGuardService
  ],
  exports: [
    NavbarComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        `${parentModule} has already been loaded. Import Core module in the AppModule only.`
      );
    }
  }
}

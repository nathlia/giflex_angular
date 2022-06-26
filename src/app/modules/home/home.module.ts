import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersComponent } from './components/characters/characters.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { CharactersService } from './services/characters.service';
import { SelectImageService } from './services/select-image.service';
import { CoreModule } from 'src/app/core/core.module';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';
import { ErrorhandlerService } from 'src/app/core/services/errorhandler.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtinterceptorService } from 'src/app/core/services/jwtinterceptor.service';
import { RegisterArtifactComponent } from './pages/admin/register-artifact/register-artifact.component';
import { RegisterCharacterComponent } from './pages/admin/register-character/register-character.component';

@NgModule({
  declarations: [
    CharactersComponent,
  ],
  imports: [ 
    RouterModule,
    HomeRoutingModule, 
    CommonModule,
    SharedModule,  
    CoreModule  
  ],
  exports: [
  ],
  providers: [
    CharactersService,
    SelectImageService,
    AuthGuardService,
    {provide: ErrorHandler, useClass: ErrorhandlerService},
    {provide: HTTP_INTERCEPTORS, useClass: JwtinterceptorService, multi: true}
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './modules/home/home.module';

import { AppRoutingModule } from './app-routing.module';
import { CoreRoutingModule } from './core/core-routing.module';
import { HomeRoutingModule } from './modules/home/home-routing.module';
import { RouterModule } from '@angular/router';
import { CharactersService } from './modules/home/services/characters.service';
import { SelectImageService } from './modules/home/services/select-image.service';
import { ArtifactsService } from './modules/home/services/artifacts.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    NgbModule,
    HomeModule,

    RouterModule,
    AppRoutingModule,
    CoreRoutingModule,
    HomeRoutingModule,
    
  ],
  providers: [CharactersService, SelectImageService, ArtifactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

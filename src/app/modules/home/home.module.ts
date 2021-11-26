import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersComponent } from './components/characters/characters.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharactersTrayComponent } from './components/characters-tray/characters-tray.component';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { CharactersService } from './services/characters.service';
import { SelectImageService } from './services/select-image.service';

@NgModule({
  declarations: [
    CharactersComponent,
    CharactersTrayComponent,
  ],
  imports: [ 
    RouterModule,
    HomeRoutingModule, 
    CommonModule,
    SharedModule
   
      
  ],
  exports: [
  ],
  providers: [CharactersService, SelectImageService]
})
export class HomeModule { }

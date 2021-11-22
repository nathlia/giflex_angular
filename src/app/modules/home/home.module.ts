import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersComponent } from './components/characters/characters.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharactersTrayComponent } from './components/characters-tray/characters-tray.component';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CharactersComponent,
    CharactersTrayComponent,
    CharactersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule,
    HomeRoutingModule,    
  ],
  exports: [
  ]
})
export class HomeModule { }

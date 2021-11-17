import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersTrayComponent } from './components/characters-tray/characters-tray.component';
import { CharactersComponent } from './components/characters/characters.component';



@NgModule({
  declarations: [
    CharactersTrayComponent,
    CharactersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersTrayComponent } from './components/characters-tray/characters-tray.component';
import { CharactersComponent } from './components/characters/characters.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddCharacterComponent } from './pages/add-character/add-character.component';
import { AddCharacterFormComponent } from './pages/add-character-form/add-character-form.component';


@NgModule({
  declarations: [
    CharactersTrayComponent,
    CharactersComponent,
    AddCharacterComponent,
    AddCharacterFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CharactersComponent,
    CharactersTrayComponent
  ]
})
export class HomeModule { }
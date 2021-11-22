import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCharactersRoutingModule } from './add-characters-routing.module';
import { FormsModule } from '@angular/forms';
import { AddCharacterFormComponent } from './add-character-form/add-character-form.component';
import { CharactersComponent } from '../../components/characters/characters.component';
import { CharactersTrayComponent } from '../../components/characters-tray/characters-tray.component';


@NgModule({
  declarations: [
    AddCharacterFormComponent,
    CharactersComponent,
    CharactersTrayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    AddCharactersRoutingModule    
  ]
})
export class AddCharactersModule { }

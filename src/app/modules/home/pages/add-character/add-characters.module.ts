import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCharactersRoutingModule } from './add-characters-routing.module';
import { FormsModule } from '@angular/forms';
import { AddCharacterFormComponent } from './add-character-form/add-character-form.component';
import { CharactersService } from '../../services/characters.service';
import { AddCharacterComponent } from './add-character.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AddCharacterComponent,
    AddCharacterFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    // CharactersModule,

    RouterModule,
    AddCharactersRoutingModule    
  ],
  providers: [CharactersService]
})
export class AddCharactersModule { }

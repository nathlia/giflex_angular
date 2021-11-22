import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCharactersRoutingModule } from './add-characters-routing.module';
import { FormsModule } from '@angular/forms';
import { AddCharacterFormComponent } from './add-character-form/add-character-form.component';


@NgModule({
  declarations: [
    AddCharacterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    AddCharactersRoutingModule    
  ]
})
export class AddCharactersModule { }

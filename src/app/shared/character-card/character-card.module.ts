import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './character-card.component';
import { CharactersService } from 'src/app/modules/home/services/characters.service';

@NgModule({
  declarations: [
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [CharactersService]
})
export class CharacterCardModule { }

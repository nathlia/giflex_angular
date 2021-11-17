import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CharacterCardComponent } from './character-card/character-card.component';



@NgModule({
  declarations: [
    ButtonComponent,
    CharacterCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    CharacterCardComponent
  ]
})
export class SharedModule { }

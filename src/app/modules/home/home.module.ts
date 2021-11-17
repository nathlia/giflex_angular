import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersTrayComponent } from './components/characters-tray/characters-tray.component';
import { CharactersComponent } from './components/characters/characters.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CharactersTrayComponent,
    CharactersComponent,
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

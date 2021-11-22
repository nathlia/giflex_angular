import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersComponent } from './components/characters/characters.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharactersTrayComponent } from './components/characters-tray/characters-tray.component';
import { SelectImageShowcaseComponent } from './pages/select-image-showcase/select-image-showcase.component';
import { ShowcaseComponent } from './pages/showcase/showcase.component';


@NgModule({
  declarations: [
    CharactersTrayComponent,
    CharactersComponent,
    SelectImageShowcaseComponent,
    ShowcaseComponent,
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

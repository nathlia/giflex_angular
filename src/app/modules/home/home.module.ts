import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersComponent } from './components/characters/characters.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddCharacterComponent } from './pages/add-character/add-character.component';
import { AddCharacterFormComponent } from './pages/add-character-form/add-character-form.component';
import { CharactersTrayComponent } from './components/characters-tray/characters-tray.component';
import { ArtifactsComponent } from './pages/artifacts/artifacts.component';
import { AddArtifactFormComponent } from './pages/artifacts/add-artifact-form/add-artifact-form.component';
import { AddSubstatsComponent } from './pages/artifacts/add-substats/add-substats.component';
import { ArtifactSetShowComponent } from './pages/artifact-set-show/artifact-set-show.component';
import { ArtifactsTrayComponent } from './pages/artifact-set-show/artifacts-tray/artifacts-tray.component';
import { CharacterStatsCardComponent } from './pages/artifact-set-show/character-stats-card/character-stats-card.component';
import { SelectImageShowcaseComponent } from './pages/select-image-showcase/select-image-showcase.component';
import { ShowcaseComponent } from './pages/showcase/showcase.component';


@NgModule({
  declarations: [
    CharactersTrayComponent,
    CharactersComponent,
    AddCharacterComponent,
    AddCharacterFormComponent,
    ArtifactsComponent,
    AddArtifactFormComponent,
    AddSubstatsComponent,
    ArtifactSetShowComponent,
    ArtifactsTrayComponent,
    CharacterStatsCardComponent,
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

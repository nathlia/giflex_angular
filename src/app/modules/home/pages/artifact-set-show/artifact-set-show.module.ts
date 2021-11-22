import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtifactSetShowRoutingModule } from './artifact-set-show-routing.module';
import { CharactersRoutingModule } from '../../components/characters/characters-routing.module';
import { ArtifactsTrayComponent } from './artifacts-tray/artifacts-tray.component';
import { CharacterStatsCardComponent } from './character-stats-card/character-stats-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArtifactsTrayComponent,
    CharacterStatsCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    ArtifactSetShowRoutingModule
  ]
})
export class ArtifactSetShowModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtifactSetShowRoutingModule } from './artifact-set-show-routing.module';
import { ArtifactsTrayComponent } from './artifacts-tray/artifacts-tray.component';
import { CharacterStatsCardComponent } from './character-stats-card/character-stats-card.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArtifactSetShowComponent } from './artifact-set-show.component';

@NgModule({
  declarations: [
    ArtifactsTrayComponent,
    CharacterStatsCardComponent,
    ArtifactSetShowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    RouterModule,
    ArtifactSetShowRoutingModule
  ]
})
export class ArtifactSetShowModule { }

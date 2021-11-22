import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersService } from './characters.service';
import { RouterModule } from '@angular/router';
import { ArtifactSetShowModule } from '../../pages/artifact-set-show/artifact-set-show.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ArtifactSetShowModule,

    RouterModule,
    CharactersRoutingModule
  ],
  providers: [CharactersService]
})
export class CharactersModule { }

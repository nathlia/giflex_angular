import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtifactSetShowRoutingModule } from './artifact-set-show-routing.module';
import { ArtifactsTrayComponent } from './artifacts-tray/artifacts-tray.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArtifactSetShowComponent } from './artifact-set-show.component';
import { CharactersService } from '../../services/characters.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ArtifactsTrayComponent,
    ArtifactSetShowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,

    RouterModule,
    ArtifactSetShowRoutingModule
  ]  
})
export class ArtifactSetShowModule { }

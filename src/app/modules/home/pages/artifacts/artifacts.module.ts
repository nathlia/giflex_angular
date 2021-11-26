import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtifactsRoutingModule } from './artifacts-routing.module';
import { AddArtifactFormComponent } from './add-artifact-form/add-artifact-form.component';
import { AddSubstatsComponent } from './add-substats/add-substats.component';
import { ArtifactsComponent } from './artifacts.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AddArtifactFormComponent,
    AddSubstatsComponent,
    ArtifactsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ArtifactsRoutingModule
  ]
})
export class ArtifactsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtifactsRoutingModule } from './artifacts-routing.module';
import { AddArtifactFormComponent } from './add-artifact-form/add-artifact-form.component';
import { AddSubstatsComponent } from './add-substats/add-substats.component';
import { ArtifactsComponent } from './artifacts.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddArtifactFormComponent,
    AddSubstatsComponent,
    ArtifactsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ArtifactsRoutingModule
  ]
})
export class ArtifactsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtifactsRoutingModule } from './artifacts-routing.module';
import { AddArtifactFormComponent } from './add-artifact-form/add-artifact-form.component';
import { AddSubstatsComponent } from './add-substats/add-substats.component';
import { ArtifactsComponent } from './artifacts.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditArtifactComponent } from './edit-artifact/edit-artifact.component';


@NgModule({
  declarations: [
    AddArtifactFormComponent,
    AddSubstatsComponent,
    ArtifactsComponent,
    EditArtifactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ArtifactsRoutingModule
  ]
})
export class ArtifactsModule { }

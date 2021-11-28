import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcaseRoutingModule } from './showcase-routing.module';
import { ShowcaseComponent } from './showcase.component';
import { RouterModule } from '@angular/router';
import { ShowcaseArtifactComponent } from './showcase-artifact/showcase-artifact.component';
import { ShowcaseSubstatsComponent } from './showcase-substats/showcase-substats.component';


@NgModule({
  declarations: [
    ShowcaseComponent,
    ShowcaseArtifactComponent,
    ShowcaseSubstatsComponent,    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ShowcaseRoutingModule
  ],  
})
export class ShowcaseModule { }

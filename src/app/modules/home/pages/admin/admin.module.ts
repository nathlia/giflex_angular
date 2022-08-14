import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArtifactSetTypeService } from '../../services/artifact-set-type.service';
import { RegisterArtifactComponent } from './register-artifact/register-artifact.component';
import { RegisterCharacterComponent } from './register-character/register-character.component';
import { ListarArtifactSetTypesComponent } from './listar-artifact-set-types/listar-artifact-set-types.component';
import { ArtifactListComponent } from './register-artifact/list/artifact-list/artifact-list.component';
import { AddSetComponent } from './register-artifact/add-set/add-set.component';


@NgModule({
  declarations: [
    AdminComponent,
    RegisterArtifactComponent,
    RegisterCharacterComponent,
    ListarArtifactSetTypesComponent,
    ArtifactListComponent,
    AddSetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule,    
    AdminRoutingModule
  ],
  providers: [ArtifactSetTypeService]
})
export class AdminModule { }

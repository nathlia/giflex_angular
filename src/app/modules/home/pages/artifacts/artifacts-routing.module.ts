import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArtifactFormComponent } from './add-artifact-form/add-artifact-form.component';
import { ArtifactsComponent } from './artifacts.component';
import { EditArtifactComponent } from './edit-artifact/edit-artifact.component';

const routes: Routes = [
  {
    path: '', 
    component: ArtifactsComponent,
    children: [
      { path: ':charaId/:name/add', component: AddArtifactFormComponent },
      { path: ':charaId/:name/:artId/edit', component: EditArtifactComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtifactsRoutingModule { }

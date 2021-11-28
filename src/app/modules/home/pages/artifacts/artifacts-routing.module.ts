import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArtifactFormComponent } from './add-artifact-form/add-artifact-form.component';
import { ArtifactsComponent } from './artifacts.component';

const routes: Routes = [
  {
    path: '', 
    component: ArtifactsComponent,
    children: [
      { path: ':id/add', component: AddArtifactFormComponent },
      { path: ':id/edit', component: AddArtifactFormComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtifactsRoutingModule { }

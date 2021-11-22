import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtifactsComponent } from '../artifacts/artifacts.component';
import { ArtifactSetShowComponent } from './artifact-set-show.component';

const routes: Routes = [
  {
    path: 'artifacts-set/:name', component: ArtifactSetShowComponent,
    children: [
      { path: ':id/add', component: ArtifactsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtifactSetShowRoutingModule {}

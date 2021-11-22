import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtifactsComponent } from '../artifacts/artifacts.component';
import { ArtifactSetShowComponent } from './artifact-set-show.component';

const routes: Routes = [
  {
    path: '/artifact-set', component: ArtifactSetShowComponent,
    children: [
      { path: ':id', component: ArtifactsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtifactSetShowRoutingModule {}

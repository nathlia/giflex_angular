import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCharacterComponent } from '../add-character/add-character.component';
import { ArtifactsComponent } from '../artifacts/artifacts.component';
import { ArtifactSetShowComponent } from './artifact-set-show.component';

const routes: Routes = [
  {
    path: 'artifacts-set/:id/:name', component: ArtifactSetShowComponent,
    // children: [
    //   { path: '/artifact/edit', component: ArtifactsComponent },
    //   { path: '/artifact/add', component: ArtifactsComponent },
    //   { path: '/character/edit', component: AddCharacterComponent }
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtifactSetShowRoutingModule {}

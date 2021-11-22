import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtifactSetShowComponent } from '../../pages/artifact-set-show/artifact-set-show.component';
import { CharactersComponent } from './characters.component';

const routes: Routes = [
  {
    path: '', 
    component: CharactersComponent,
    children: [
      { path: ':name/artifacts-set', component: ArtifactSetShowComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }

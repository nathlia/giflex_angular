import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/characters/characters.module').then(
        (m) => m.CharactersModule
      ),
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./components/characters/characters.module').then(
        (m) => m.CharactersModule
      ),
  },
  {
    path: 'artifact-set',
    loadChildren: () =>
      import('./pages/artifact-set-show/artifact-set-show.module').then(
        (m) => m.ArtifactSetShowModule
      ),
  },
  {
    path: 'add-artifact',
    loadChildren: () =>
      import('./pages/artifacts/artifacts.module').then(
        (m) => m.ArtifactsModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

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
    path: 'add-character',
    loadChildren: () =>
      import('./pages/add-character/add-characters.module').then(
        (m) => m.AddCharactersModule
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
    path: 'artifact',
    loadChildren: () =>
      import('./pages/artifacts/artifacts.module').then(
        (m) => m.ArtifactsModule
      ),
  },
  {
    path: 'select-image',
    loadChildren: () =>
      import('./pages/select-image-showcase/select-image-showcase.module').then(
        (m) => m.SelectImageShowcaseModule
      ),
  },
  {
    path: 'showcase',
    loadChildren: () =>
      import('./pages/showcase/showcase.module').then(
        (m) => m.ShowcaseModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

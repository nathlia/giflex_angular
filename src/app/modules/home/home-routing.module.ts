import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { ArtifactSetShowComponent } from './pages/artifact-set-show/artifact-set-show.component';

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
      import('./components/characters/characters.module').then(
        (m) => m.CharactersModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

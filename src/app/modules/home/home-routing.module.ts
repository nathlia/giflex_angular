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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

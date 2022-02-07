import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/core/components/login/login.component';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';

const routes: Routes = [
  {
    path: 'characters',
    canLoad:[AuthGuardService],
    canActivate:[AuthGuardService],
    loadChildren: () =>
      import('./components/characters/characters.module').then(
        (m) => m.CharactersModule
      ),
      
  },
  {
    path: 'add-character',
    canLoad:[AuthGuardService],
    canActivate:[AuthGuardService],
    loadChildren: () =>
      import('./pages/add-character/add-characters.module').then(
        (m) => m.AddCharactersModule
      ),
  },
  {
    path: 'artifact-set',
    canLoad:[AuthGuardService],
    canActivate:[AuthGuardService],
    loadChildren: () =>
      import('./pages/artifact-set-show/artifact-set-show.module').then(
        (m) => m.ArtifactSetShowModule
      ),
  },
  {
    path: 'artifact',
    canLoad:[AuthGuardService],
    canActivate:[AuthGuardService],
    loadChildren: () =>
      import('./pages/artifacts/artifacts.module').then(
        (m) => m.ArtifactsModule
      ),
  },
  {
    path: 'select-image',
    canLoad:[AuthGuardService],
    canActivate:[AuthGuardService],
    loadChildren: () =>
      import('./pages/select-image-showcase/select-image-showcase.module').then(
        (m) => m.SelectImageShowcaseModule
      ),
  },
  {
    path: 'showcase',
    canLoad:[AuthGuardService],
    canActivate:[AuthGuardService],
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

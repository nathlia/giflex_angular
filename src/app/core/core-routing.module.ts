import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: 'characters', 
        loadChildren: () => import('../modules/home/components/characters/characters.module').then(m => m.CharactersModule)
    },
    {
        path: 'artifact-set-show', 
        loadChildren: () => import('../modules/home/pages/artifact-set-show/artifact-set-show.module').then(m => m.ArtifactSetShowModule)
    },
    {
        path: 'add-characters', 
        loadChildren: () => import('../modules/home/pages/add-character/add-characters.module').then(m => m.AddCharactersModule)
    },
    {
        path: 'artifacts', 
        loadChildren: () => import('../modules/home/pages/artifacts/artifacts.module').then(m => m.ArtifactsModule)
    },
    {
        path: 'selectImage', 
        loadChildren: () => import('../modules/home/pages/select-image-showcase/select-image-showcase.module').then(m => m.SelectImageShowcaseModule)
    },
    {
        path: 'showcase', 
        loadChildren: () => import('../modules/home/pages/showcase/showcase.module').then(m => m.ShowcaseModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

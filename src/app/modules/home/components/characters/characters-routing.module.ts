import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCharacterComponent } from '../../pages/add-character/add-character.component';
import { CharactersComponent } from './characters.component';

const routes: Routes = [
  {
    path: '', 
    component: CharactersComponent,
    children: [
      { path: ':id/:name/edit', component: AddCharacterComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }

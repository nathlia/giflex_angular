import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from '../../components/characters/characters.component';
import { AddCharacterFormComponent } from './add-character-form/add-character-form.component';
import { AddCharacterComponent } from './add-character.component';

const routes: Routes = [
  {
    path: '', 
    component: AddCharacterComponent,
    children: [
      { path: ':name/edit', component: AddCharacterFormComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCharactersRoutingModule { }

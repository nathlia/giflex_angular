import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from '../modules/home/components/characters/characters.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    { path: '', component: CharactersComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

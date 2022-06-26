import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RegisterArtifactComponent } from './register-artifact/register-artifact.component';
import { RegisterCharacterComponent } from './register-character/register-character.component';


const routes: Routes = [
  {
    path: '', 
    component: AdminComponent,
    children: [
      { path: 'register_artifact', component:  RegisterArtifactComponent},
      { path: 'register_character', component: RegisterCharacterComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './showcase.component';

const routes: Routes = [
  {
    path: '', 
    component: ShowcaseComponent,
    // children: [
    //   { path: 'childpath', component: ChildComponent }
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowcaseRoutingModule { }

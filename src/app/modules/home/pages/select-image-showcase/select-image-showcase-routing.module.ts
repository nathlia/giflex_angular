import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectImageShowcaseComponent } from './select-image-showcase.component';

const routes: Routes = [
  {
    path: '', 
    component: SelectImageShowcaseComponent,
    // children: [
    //   { path: '', component: ChildComponent }
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectImageShowcaseRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcaseRoutingModule } from './showcase-routing.module';
import { ShowcaseComponent } from './showcase.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ShowcaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ShowcaseRoutingModule
  ]
})
export class ShowcaseModule { }

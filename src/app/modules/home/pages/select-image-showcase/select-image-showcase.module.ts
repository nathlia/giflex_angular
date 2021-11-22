import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectImageShowcaseRoutingModule } from './select-image-showcase-routing.module';
import { SelectImageShowcaseComponent } from './select-image-showcase.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SelectImageShowcaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SelectImageShowcaseRoutingModule
  ]
})
export class SelectImageShowcaseModule { }

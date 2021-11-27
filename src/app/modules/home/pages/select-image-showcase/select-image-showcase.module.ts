import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectImageShowcaseRoutingModule } from './select-image-showcase-routing.module';
import { SelectImageShowcaseComponent } from './select-image-showcase.component';
import { RouterModule } from '@angular/router';
import { ImageCardComponent } from './image-card/image-card.component';

@NgModule({
  declarations: [
    SelectImageShowcaseComponent,
    ImageCardComponent
  ],
  imports: [
    CommonModule,

    RouterModule,
    SelectImageShowcaseRoutingModule
  ], 
})
export class SelectImageShowcaseModule { }

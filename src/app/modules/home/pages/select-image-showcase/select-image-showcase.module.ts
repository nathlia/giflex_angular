import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectImageShowcaseRoutingModule } from './select-image-showcase-routing.module';
import { SelectImageShowcaseComponent } from './select-image-showcase.component';
import { RouterModule } from '@angular/router';
import { SelectImageService } from '../../services/select-image.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharactersService } from '../../services/characters.service';

@NgModule({
  declarations: [
    SelectImageShowcaseComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule,
    SelectImageShowcaseRoutingModule
  ],
  providers: [CharactersService, SelectImageService]
})
export class SelectImageShowcaseModule { }

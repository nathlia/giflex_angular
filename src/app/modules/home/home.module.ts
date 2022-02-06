import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersComponent } from './components/characters/characters.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { CharactersService } from './services/characters.service';
import { SelectImageService } from './services/select-image.service';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [ 
    RouterModule,
    HomeRoutingModule, 
    CommonModule,
    SharedModule,  
    CoreModule  
  ],
  exports: [
  ],
  providers: [CharactersService, SelectImageService]
})
export class HomeModule { }

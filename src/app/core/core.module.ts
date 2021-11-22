import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderTextComponent } from './components/header-text/header-text.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
     NavbarComponent,
     HeaderTextComponent
    ],
  imports: [
    CommonModule,

    AppRoutingModule
  ],
  exports: [
    NavbarComponent, 
    HeaderTextComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        `${parentModule} has already been loaded. Import Core module in the AppModule only.`
      );
    }
  }
}

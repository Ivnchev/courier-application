import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    NavigationComponent,
    SidenavigationComponent,
    CarouselComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    NavigationComponent,
    SidenavigationComponent,
    CarouselComponent,
    FooterComponent
  ]
})
export class CoreModule { }

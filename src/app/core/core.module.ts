import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { NotFound404Component } from './not-found404/not-found404.component';
import { HomeComponent } from './home/home.component';





@NgModule({
  declarations: [
    HomeComponent,
    NavigationComponent,
    SidenavigationComponent,
    CarouselComponent,
    FooterComponent,
    NotFound404Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule,
  ],
  exports: [
    HomeComponent,
    NavigationComponent,
    SidenavigationComponent,
    CarouselComponent,
    FooterComponent,
    NotFound404Component
  ],
  providers: [ ]
})
export class CoreModule { }

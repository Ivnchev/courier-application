import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './guards/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { NotFound404Component } from './not-found404/not-found404.component';
import { AlertService } from './services/alert.service';




@NgModule({
  declarations: [
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
    NavigationComponent,
    SidenavigationComponent,
    CarouselComponent,
    FooterComponent,
    NotFound404Component
  ],
  providers: [
    AuthGuard,
    AlertService
  ]
})
export class CoreModule { }

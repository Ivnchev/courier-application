import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: ''
  },
  {
    path:'',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'client-center',
    loadChildren: () => import('./client-center/client-center.module').then(m => m.ClientCenterModule)
  },
  {
    path: 'shipments',
    loadChildren: () => import('./shipments/shipments.module').then(m => m.ShipmentsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

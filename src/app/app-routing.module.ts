import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { NotFound404Component } from './core/not-found404/not-found404.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
      },
      {
        path: 'home',
        component: HomeComponent,
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
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'admin',
        pathMatch: 'full',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      }
    ]
  },
  {
    path: '404',
    component: NotFound404Component
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

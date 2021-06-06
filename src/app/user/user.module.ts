import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from '../material/material.module';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { EditComponent } from './edit/edit.component';
import { ControlViewDirective } from './control-view.directive';
import { ClientCenterModule } from '../client-center/client-center.module';
import { ShipmentsModule } from '../shipments/shipments.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    EditComponent,
    ControlViewDirective,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    MaterialModule,
    ClientCenterModule,
    ShipmentsModule
  ],
  exports: [
    ControlViewDirective,
  ]
})
export class UserModule { }

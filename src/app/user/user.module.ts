import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from '../material/material.module';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { EditComponent } from './edit/edit.component';
import { ControlViewDirective } from './control-view.directive';
import { ClientCenterModule } from '../client-center/client-center.module';
import { ShipmentsModule } from '../shipments/shipments.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
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
    ShipmentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ControlViewDirective,
  ]
})
export class UserModule { }

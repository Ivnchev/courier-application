import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterClaimComponent } from './register-claim/register-claim.component';
import { MaterialModule } from '../material/material.module';
import { CreateShipmentComponent } from './create-shipment/create-shipment.component';



@NgModule({
  declarations: [
    RegisterClaimComponent,
    CreateShipmentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    RegisterClaimComponent
  ]
})
export class SharedModule { }

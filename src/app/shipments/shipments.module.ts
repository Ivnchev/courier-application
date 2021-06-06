import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentsComponent } from './shipments/shipments.component';
import { ShipmentRoutingModule } from './shipments-routing.module';
import { CreateShipmentComponent } from './create-shipment/create-shipment.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilerPipe } from './search-filer.pipe';


@NgModule({
  declarations: [
    ShipmentsComponent,
    CreateShipmentComponent,
    SearchFilerPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ShipmentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ShipmentsComponent,
    CreateShipmentComponent
  ]
})
export class ShipmentsModule { }

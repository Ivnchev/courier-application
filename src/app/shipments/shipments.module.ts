import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentsComponent } from './shipments/shipments.component';
import { ShipmentRoutingModule } from './shipments-routing.module';
import { CreateEditShipmentComponent } from './create-edit-shipment/create-edit-shipment.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilerPipe } from './search-filer.pipe';


@NgModule({
  declarations: [
    ShipmentsComponent,
    CreateEditShipmentComponent,
    SearchFilerPipe,
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
    CreateEditShipmentComponent
  ]
})
export class ShipmentsModule { }

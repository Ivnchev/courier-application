import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentsComponent } from './shipments/shipments.component';
import { ShipmentRoutingModule } from './shipments-routing.module';
import { CreateEditShipmentComponent } from './create-edit-shipment/create-edit-shipment.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilerPipe } from './search-filer.pipe';
import { SharedModule } from '../shared/shared.module';
import { StatusComponent } from './status/status.component';


@NgModule({
  declarations: [
    ShipmentsComponent,
    CreateEditShipmentComponent,
    SearchFilerPipe,
    StatusComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ShipmentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    ShipmentsComponent,
    CreateEditShipmentComponent
  ]
})
export class ShipmentsModule { }

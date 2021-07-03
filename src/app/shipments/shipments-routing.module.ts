
import { RouterModule, Routes } from '@angular/router';
import { ShipmentsComponent } from './shipments/shipments.component';
import { CreateShipmentComponent } from './create-shipment/create-shipment.component';






const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',  
        component: ShipmentsComponent
    },
    {
        path: 'create',
        component: CreateShipmentComponent
    },
];

export const ShipmentRoutingModule = RouterModule.forChild(routes)

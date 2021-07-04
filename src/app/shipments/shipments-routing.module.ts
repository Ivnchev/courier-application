
import { RouterModule, Routes } from '@angular/router';
import { ShipmentsComponent } from './shipments/shipments.component';
import { CreateEditShipmentComponent } from './create-edit-shipment/create-edit-shipment.component';






const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',  
        component: ShipmentsComponent
    },
    {
        path: 'create',
        component: CreateEditShipmentComponent
    },
    {
        path: ':id/edit',  
        component: CreateEditShipmentComponent
    },
];

export const ShipmentRoutingModule = RouterModule.forChild(routes)

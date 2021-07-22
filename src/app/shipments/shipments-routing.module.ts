
import { RouterModule, Routes } from '@angular/router';
import { ShipmentsComponent } from './shipments/shipments.component';
import { CreateEditShipmentComponent } from './create-edit-shipment/create-edit-shipment.component';






const routes: Routes = [
    {
        path: '',
        pathMatch: 'full', 
        data: {
            isLogged : true
        },
        component: ShipmentsComponent
    },
    {
        path: 'create',
        data: {
            isLogged : true
        },
        component: CreateEditShipmentComponent
    },
    {
        path: ':id/edit',
        data: {
            isLogged : true
        },
        component: CreateEditShipmentComponent
    },
];

export const ShipmentRoutingModule = RouterModule.forChild(routes)

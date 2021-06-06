
import { RouterModule, Routes } from '@angular/router';
import { ShipmentsComponent } from './shipments/shipments.component';
import { CreateShipmentComponent } from './create-shipment/create-shipment.component';






const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',  
        redirectTo: '/shipments/my-shipments'
    },
    {
        path: 'create',
        component: CreateShipmentComponent
    },
    {
        path: 'my-shipments',
        component: ShipmentsComponent
    }
];

export const ShipmentRoutingModule = RouterModule.forChild(routes)

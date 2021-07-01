
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel/panel.component';



const routes: Routes = [

    {
        path: '',
        pathMatch: 'full',
        component: PanelComponent
    }
];

export const AdminRoutingModule = RouterModule.forChild(routes)

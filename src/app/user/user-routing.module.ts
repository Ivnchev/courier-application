
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: ''
    },
    {
        path: 'profile',
        component: ProfileComponent
    }
];

export const UserRoutingModule = RouterModule.forChild(routes)


import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';




const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: ''
    },
    {
        path: 'login',
        data: {
            isLogged : false
        },
        component: LoginComponent
    },
    {
        path: 'register',
        data: {
            isLogged : false
        },
        component: RegisterComponent
    },
];

export const AuthRoutingModule = RouterModule.forChild(routes)


import { RouterModule, Routes } from '@angular/router';
import { ClaimListComponent } from './claim-list/claim-list.component';
import { QuestionsAndAnswersComponent } from './questions-and-answers/questions-and-answers.component';
import { ClientServicesComponent } from './client-services/client-services.component';
import { RegisterClaimComponent } from './register-claim/register-claim.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { OwnerGuard } from '../shared/guards/owner.guard';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/services'
    },
    {
        path: 'claims',
        canActivateChild: [AuthGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                data: {
                    isLogged : true
                },
                component: ClaimListComponent,
            },
            {
                path: 'register',
                pathMatch: 'full',
                data: {
                    isLogged : true
                },
                component: RegisterClaimComponent
            },
            {
                path: ':id/edit',
                canActivate: [OwnerGuard],
                pathMatch: 'full', 
                data: {
                    isLogged : true
                },
                component: RegisterClaimComponent
            },
        ]
    },    
    {
        path: 'q&a',
        canActivate: [AuthGuard],
        component: QuestionsAndAnswersComponent
    },
    {
        path: 'services',
        canActivate: [AuthGuard],
        component: ClientServicesComponent
    }
];

export const ClientCenterRoutingModule = RouterModule.forChild(routes)


import { RouterModule, Routes } from '@angular/router';
import { ClaimListComponent } from './claim-list/claim-list.component';
import { QuestionsAndAnswersComponent } from './questions-and-answers/questions-and-answers.component';
import { ClientServicesComponent } from './client-services/client-services.component';
import { RegisterClaimComponent } from './register-claim/register-claim.component';
import { AuthGuard } from '../shared/guards/auth.guard';


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
                component: ClaimListComponent,
            },
            {
                path: 'register',
                pathMatch: 'full',
                component: RegisterClaimComponent
            },
            {
                path: ':id/edit',
                pathMatch: 'full', 
                component: RegisterClaimComponent
            },
        ]
    },    
    {
        path: 'q&a',
        component: QuestionsAndAnswersComponent
    },
    {
        path: 'services',
        component: ClientServicesComponent
    }
];

export const ClientCenterRoutingModule = RouterModule.forChild(routes)

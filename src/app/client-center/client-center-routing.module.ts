
import { RouterModule, Routes } from '@angular/router';
import { ClaimsComponent } from './claims/claims.component';
import { QuestionsAndAnswersComponent } from './questions-and-answers/questions-and-answers.component';
import { ClientServicesComponent } from './client-services/client-services.component';




const routes: Routes = [
    {
        path: 'claims',
        component: ClaimsComponent
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

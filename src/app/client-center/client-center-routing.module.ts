
import { RouterModule, Routes } from '@angular/router';
import { ClaimsComponent } from './claims/claims.component';
import { QuestionsAndAnswersComponent } from './questions-and-answers/questions-and-answers.component';
import { UserServicesComponent } from './user-services/user-services.component';




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
        component: UserServicesComponent
    }
];

export const ClientCenterRoutingModule = RouterModule.forChild(routes)

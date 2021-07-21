
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { NewsComponent } from './news/news.component';
import { NewsListComponent } from './news-list/news-list.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { AdminGuard } from '../shared/guards/admin.guard';



const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        canActivate: [AdminGuard],
        component: PanelComponent
    },
    {
        path: 'news',
        canActivateChild: [AdminGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: NewsListComponent
            },
            {
                path: 'create',
                pathMatch: 'full',
                component: NewsComponent
            },
            {
                path: ':id/edit',
                pathMatch: 'full',
                component: NewsComponent
            }
        ]
    },
    {
        path: 'q&a',
        canActivateChild: [AdminGuard],
        children: [
            {
                path: 'create',
                pathMatch: 'full',
                component: CreateQuestionComponent
            },
            {
                path: ':id/edit',
                pathMatch: 'full',
                component: CreateQuestionComponent
            }
        ]
    }
];

export const AdminRoutingModule = RouterModule.forChild(routes)

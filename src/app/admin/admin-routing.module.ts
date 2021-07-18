
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { NewsComponent } from './news/news.component';
import { NewsListComponent } from './news-list/news-list.component';



const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: PanelComponent
    },
    {
        path: 'news',
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
];

export const AdminRoutingModule = RouterModule.forChild(routes)

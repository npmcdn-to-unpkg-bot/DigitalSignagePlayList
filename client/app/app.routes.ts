/**
 * Created by Dmitriy Prilutsky on 13.07.2016.
 */

import { provideRouter, RouterConfig } from '@angular/router';


import { MessagesMain } from './messages/messages-main';
import { AssetsMain } from './assets/assets-main';
import { TableComponent } from './table/MyTable';
import { AgentsManager } from './agents/AgentsManager';

import { UploadFiles } from "./assets/UploadFiles";
import { contentmanagerRoutes } from './contentmanager/contentmanager';
import { addRoutes } from "./add/add.routes";

export const routes: RouterConfig = [
    ...contentmanagerRoutes,
/*    ...addRoutes,*/
    { path: '', component: MessagesMain },
   /* { path: 'assets', component: AssetsMain },
    { path: 'assets/upload', component:UploadFiles},
    { path: 'files/upload', component:UploadFiles},*/
    { path: 'messages', component: MessagesMain},
    { path: 'table', component:TableComponent },
    { path: 'agents', component:AgentsManager },
    /*{ path: '**', redirectTo: '/dashboard/messages' }*/
]


export const appRouterProviders = [
    provideRouter(routes)
];
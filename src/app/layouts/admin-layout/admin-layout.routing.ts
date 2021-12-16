import { Routes } from '@angular/router';
import { ListClientComponent } from 'app/client-module/list-client/list-client.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: '',  loadChildren:
            () => import('../../client-module/client-module.module').then(m => m.ClientModuleModule)
    },
    { path: "list", component: ListClientComponent }

];

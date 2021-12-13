import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { ClientComponent } from '../../client/client.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { AddClientComponent } from 'app/add-client/add-client.component';
import { UpdateClientComponent } from 'app/update-client/update-client.component';

export const AdminLayoutRoutes: Routes = [
   
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'client', component: ClientComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'ajouterclient', component: AddClientComponent },
    { path: 'updateclient', component: UpdateClientComponent },
];

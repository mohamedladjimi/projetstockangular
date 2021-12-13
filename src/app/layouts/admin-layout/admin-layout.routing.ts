import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ProductComponent } from 'app/gestion/product/product.component';
import { RayonComponent } from 'app/gestion/rayon/rayon.component';
import { StockComponent } from 'app/gestion/stock/stock.component';
import { AddStockComponent } from 'app/gestion/add-stock/add-stock.component';
import { UpdateStockComponent } from 'app/gestion/update-stock/update-stock.component';
import { AddRayonComponent } from 'app/gestion/add-rayon/add-rayon.component';
import { UpdateRayonComponent } from 'app/gestion/update-rayon/update-rayon.component';
import { AddProductComponent } from 'app/gestion/add-product/add-product.component';
import { UpdateProductComponent } from 'app/gestion/update-product/update-product.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'product',        component: ProductComponent},
    { path: 'rayon',          component: RayonComponent },
    { path: 'stock',          component: StockComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'addStock',        component: AddStockComponent },
    { path: 'updateStock/:id',        component: UpdateStockComponent },
    { path: 'addRayon',        component: AddRayonComponent },
    { path: 'updateRayon/:id',        component: UpdateRayonComponent },
    { path: 'addProduit',        component: AddProductComponent },
    { path: 'updateProduit/:id',        component: UpdateProductComponent },
];

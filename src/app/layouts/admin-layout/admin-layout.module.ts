import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { ProductComponent } from 'app/gestion/product/product.component';
import { RayonComponent } from 'app/gestion/rayon/rayon.component';
import { AddProductComponent } from 'app/gestion/add-product/add-product.component';
import { StockComponent } from 'app/gestion/stock/stock.component';
import { AddRayonComponent } from 'app/gestion/add-rayon/add-rayon.component';
import { AddStockComponent } from 'app/gestion/add-stock/add-stock.component';
import { DetailProductComponent } from 'app/gestion/detail-product/detail-product.component';
import { UpdateProductComponent } from 'app/gestion/update-product/update-product.component';
import { UpdateRayonComponent } from 'app/gestion/update-rayon/update-rayon.component';
import { UpdateStockComponent } from 'app/gestion/update-stock/update-stock.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ProductComponent,
    RayonComponent,
    StockComponent,
    AddProductComponent,
    AddRayonComponent,
    AddStockComponent,
    DetailProductComponent,
    UpdateProductComponent,
    UpdateStockComponent,
    UpdateRayonComponent
  ]
})

export class AdminLayoutModule {}

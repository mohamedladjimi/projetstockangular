import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientComponent } from './client/client.component';
import { ProductComponent } from './gestion/product/product.component';
import { RayonComponent } from './gestion/rayon/rayon.component';
import { StockComponent } from './gestion/stock/stock.component';
import { AddProductComponent } from './gestion/add-product/add-product.component';
import { AddRayonComponent } from './gestion/add-rayon/add-rayon.component';
import { AddStockComponent } from './gestion/add-stock/add-stock.component';
import { DetailProductComponent } from './gestion/detail-product/detail-product.component';
import { UpdateProductComponent } from './gestion/update-product/update-product.component';
import { UpdateStockComponent } from './gestion/update-stock/update-stock.component';
import { UpdateRayonComponent } from './gestion/update-rayon/update-rayon.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ClientComponent,
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

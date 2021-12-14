import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
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
import {AgmCoreModule} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FournisseurService } from './fournisseur.service';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { AddOrEditFournisseurComponent } from './add-or-edit-fournisseur/add-or-edit-fournisseur.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { ReclamationService } from './reclamation.service';
import { MatFormField } from '@angular/material/form-field';
import { ListReclamationComponent } from './list-reclamation/list-reclamation.component';
import { ListReclamationFournisseurComponent } from './list-reclamation-fournisseur/list-reclamation-fournisseur.component';


@NgModule({
  imports: [
    
    BrowserAnimationsModule,
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
    ListReclamationComponent,
    ListReclamationFournisseurComponent,
    
    
    

  ],
  providers: [FournisseurService, ReclamationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientServiceService } from './Services/client-service.service';
import { AddClientComponent } from './add-client/add-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
   
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AddClientComponent,
    UpdateClientComponent,
  ],
  providers: [ClientServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

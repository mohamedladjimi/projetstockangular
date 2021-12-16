import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientModuleRoutingModule } from './client-module-routing.module';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { ListClientComponent } from './list-client/list-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AjoutClientComponent,
    UpdateClientComponent,
    ListClientComponent

  ],
  imports: [
    CommonModule,
    ClientModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientModuleModule { }

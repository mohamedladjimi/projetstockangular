import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { AddOrEditFournisseurComponent } from './add-or-edit-fournisseur/add-or-edit-fournisseur.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { ListReclamationComponent } from './list-reclamation/list-reclamation.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
  {path:"fournisseur", component:FournisseurComponent},
  {path:"addFournisseur", component:AddOrEditFournisseurComponent},
  {path:"addRecalamation", component:AddReclamationComponent},
  {path:"listReclamation", component:ListReclamationComponent},
 
 
];

@NgModule({
  imports: [
    
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

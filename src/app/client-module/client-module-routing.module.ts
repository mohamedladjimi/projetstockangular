import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';
import { ListClientComponent } from './list-client/list-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';

const routes: Routes = [
  { path: 'ajout', component: AjoutClientComponent },
  { path: 'update', component: UpdateClientComponent },
  { path: 'list', component: ListClientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientModuleRoutingModule { }

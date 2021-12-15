import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategorieClient } from 'app/Models/CategorieClient';
import { Client } from 'app/Models/Client';
import { Profession } from 'app/Models/Profession';
import { ClientServiceService } from 'app/Services/client-service.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})
export class UpdateClientComponent implements OnInit, OnChanges {


  //variables
  @Input() data: Client;
  client: Client;
  clientform: FormGroup;
  clientPlaceholder: Client = {
    idClient: 0,
    nom: "placeholder",
    prenom: "placeholder",
    email: "placeholder@gmail.com",
    password: "placeholder",
    dateNaissance: "placeholder",
    profession: Profession.docteur,
    categorieClient: CategorieClient.Fidele
  };

  clientModif: Client;

  //constructor
  constructor(public cs: ClientServiceService) { }


  //functions
  ngOnInit(): void {
    this.clientModif = this.clientPlaceholder;
    this.clientform = new FormGroup({
      nom: new FormControl(),
      prenom: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      dateNaissance: new FormControl(),
      profession: new FormControl(),
      categorieClient: new FormControl(),
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.clientModif = this.data;
  }

  updateClient(client: Client) {
    this.cs.updateClient(client).subscribe();
    console.log(client);
  }

  createClient() {
    this.client = this.clientform.value;
    this.updateClient(this.client);
  }
}

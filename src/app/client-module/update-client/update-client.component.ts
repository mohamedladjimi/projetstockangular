import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  //inputs
  @Input() data: Client;
  @Input() idClient: number;

  //outputs
  @Output() update = new EventEmitter<boolean>();

  //variables
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
      nom: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z]*")]),
      prenom: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z]*")]),
      email: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com")]),
      password: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*")]),
      dateNaissance: new FormControl("", [Validators.required]),
      profession: new FormControl(),
      categorieClient: new FormControl(),
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.clientModif = this.data;
    this.clientform.setValue({
      nom: this.data.nom,
      prenom: this.data.prenom,
      email: this.data.email,
      password: this.data.password,
      dateNaissance: this.data.dateNaissance,
      profession: this.data.profession,
      categorieClient: this.data.categorieClient,
    });
  }

  updateClient(client: Client, idClient) {
    this.cs.updateClient(client, idClient).subscribe();
    this.update.emit(true);
    this.ngOnInit();
  }

  createClient() {
    this.client = this.clientform.value;
    this.updateClient(this.client, this.idClient);
  }

}

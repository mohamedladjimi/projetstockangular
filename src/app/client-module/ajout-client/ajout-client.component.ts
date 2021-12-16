import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from 'app/Models/Client';
import { ClientServiceService } from 'app/Services/client-service.service';

@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.scss']
})
export class AjoutClientComponent implements OnInit {

  //variables
  client: Client;
  clientform: FormGroup;
  professions: string[] = [
    "docteur", "Ingénieur", "Etudiant", "Commercial", "Cadre", "Autre"
  ]

  //constructor
  constructor(public cs: ClientServiceService) { }



  //ngOninit
  ngOnInit(): void {
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


  //fonctions
  ajoutClient(client: Client) {
    this.cs.addClient(client).subscribe();
  }

  createClient() {
    this.client = this.clientform.value;
    this.ajoutClient(this.client);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Client } from 'app/Models/Client';
import { ClientServiceService } from 'app/Services/client-service.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})
export class UpdateClientComponent implements OnInit {
  client: Client;
  clientform: FormGroup;
  constructor(public cs: ClientServiceService) { }

  ngOnInit(): void {
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

  updateClient(client: Client) {
    this.cs.updateClient(client).subscribe();
    console.log(client);
  }

  createClient() {
    this.client = this.clientform.value;
    this.updateClient(this.client);
  }
}

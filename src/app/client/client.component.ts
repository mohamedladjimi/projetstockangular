import { Component, OnInit } from '@angular/core';
import { Client } from 'app/Models/Client';
import { ClientServiceService } from 'app/Services/client-service.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {


  //variables
  list: Client[];
  updateComp: boolean = true;
  currentClient: Client;
  productsUrl: string = "http://localhost:8089/SpringMVC/client";

  //constructor
  constructor(private cs: ClientServiceService) { }

  //ngOnInit
  ngOnInit(): void {
    this.getClients();
    console.log(this.list);
    this.updateComp = this.updateComp;
  }


  //functions
  getCurrentClient(client: Client) {
    this.currentClient = client;
    this.updateComp = !this.updateComp;
  }

  getAchatTotal(idClient: number): number {
    let nbr: number
    this.cs.getAchatTotal(idClient).subscribe(res => nbr = res)
    return nbr
  }

  getPorduitAchete(idClient: number): number {
    let nbr: number;
    this.cs.getPorduitAchete(idClient).subscribe(res => nbr = res);
    return nbr;
  }

  getClients() {
    this.cs.getClients().subscribe(res => {

      this.list = res;

    });
    console.log(this.list);
  }



  deleteClient(idClient: number) {
    this.cs.deleteClient(idClient).subscribe();
    console.log(idClient);
    this.ngOnInit();
  }
}

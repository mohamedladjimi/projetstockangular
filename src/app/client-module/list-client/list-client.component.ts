import { Component, OnInit } from '@angular/core';
import { Client } from 'app/Models/Client';
import { ClientServiceService } from 'app/Services/client-service.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {


  //variables
  list: Client[];
  refresh: boolean = true
  updateComp: boolean = true;
  currentClient: Client;
  id: number;
  productsUrl: string = "http://localhost:8089/SpringMVC/client";

  //constructor
  constructor(private cs: ClientServiceService) { }

  //ngOnInit
  ngOnInit(): void {
    this.getClients();
    this.updateComp = this.updateComp;
  }


  //functions
  getCurrentClient(client: Client, i: number) {
    this.id = i;
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


  getUpdateVal(val: boolean) {
    this.updateComp = val;
  }

  deleteClient(idClient: number) {
    this.cs.deleteClient(idClient).subscribe();
    this.ngOnInit();
  }
}

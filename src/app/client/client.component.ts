import { Component, OnInit } from '@angular/core';
import { Client } from 'app/Models/Client';
import { ClientServiceService } from 'app/Services/client-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  // tutorials: any;
  // currentTutorial = null;
  // currentIndex = -1;
  // title = '';

  // page = 1;
  // count = 0;
  // pageSize = 3;
  // pageSizes = [3, 6, 9];

  list: Client[];
  productsUrl: string = "http://localhost:8089/SpringMVC/client";
  constructor(private cs: ClientServiceService) { }

  ngOnInit(): void {
    this.getClients();
    console.log(this.list);
  }

  // getRequestParams(searchTitle, page, pageSize): any {
  //   // tslint:disable-next-line:prefer-const
  //   let params = {};

  //   if (searchTitle) {
  //     params[`title`] = searchTitle;
  //   }

  //   if (page) {
  //     params[`page`] = page - 1;
  //   }

  //   if (pageSize) {
  //     params[`size`] = pageSize;
  //   }

  //   return params;
  // }

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

  // handlePageChange(event): void {
  //   this.page = event;
  //   this.getClients();
  // }

  deleteClient(idClient: number) {
    this.cs.deleteClient(idClient).subscribe();
    console.log(idClient);
    this.ngOnInit();
  }
}

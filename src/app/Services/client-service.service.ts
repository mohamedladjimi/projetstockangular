import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../Models/Client';

@Injectable()
export class ClientServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  }

  url: string = "http://localhost:8089/SpringMVC/client";
  constructor(private Http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.Http.get<Client[]>(this.url + "/retrieve-all-clients");
  }
  addClient(c: Client): Observable<Client> {
    return this.Http.post<Client>(this.url + "/add-client/", c, this.httpOptions);
  }
  updateClient(c: Client, idClient: number) {
    return this.Http.put<Client>(this.url + "/modify-client/" + idClient, c, this.httpOptions);
  }
  deleteClient(idClient: number): Observable<Client> {
    return this.Http.delete<Client>(this.url + "/remove-client/" + idClient);
  }
  getAchatTotal(idClient: number): Observable<number> {
    return this.Http.get<number>(this.url + "/getAchatTotal/" + idClient);
  }
  getPorduitAchete(idClient: number): Observable<number> {
    return this.Http.get<number>(this.url + "/getPorduitAchete/" + idClient);
  }
  getPorduitAcheteInfDate(idClient: number, date: Date): Observable<number> {
    return this.Http.get<number>(this.url + "/getPorduitAcheteInfDate/" + idClient + "/" + date);
  }
}
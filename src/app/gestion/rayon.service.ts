import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rayon } from './rayon';

@Injectable({
  providedIn: 'root'
})
export class RayonService {

  private baseUrl = 'http://localhost:8088/SpringMVC/rayon';

  constructor(private httpClient: HttpClient) { }

  getRayonList(): Observable<Rayon[]> {
    return this.httpClient.get<Rayon[]>(this.baseUrl + "/retrieve-all-rayons")
  }

  addRayon(rayon: Rayon) {
    return this.httpClient.post(this.baseUrl + "/add-rayon", rayon);
  }

  updateRayon(rayon: Rayon) {
    return this.httpClient.put(this.baseUrl + "/update-rayon", rayon);
  }

  deleteRayon(id: number) {
    return this.httpClient.delete(this.baseUrl + "/remove-stock" + "/" + id);
  }

  getRayon(id: number): Observable<Rayon> {
    return this.httpClient.get<Rayon>(this.baseUrl + "/retrieve-rayon/" + id)
  }
}

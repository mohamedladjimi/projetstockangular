import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamation } from './reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private apiServerUrl ="/api/reclamation";
  host:string ="http://localhost:8089";

constructor(private http:HttpClient) { }

public getReclamations(): Observable<Reclamation>{
  return this.http.get<any>(`${this.apiServerUrl}/retrieve-all-Reclamations`);
}

public addReclamation(reclamation:Reclamation): Observable<Reclamation>{
  console.log(reclamation);
  return this.http.post<Reclamation>(`${this.apiServerUrl}/add-reclamation`,reclamation);
}



public deleteReclamation(reclamtionId:number): Observable<void>{
  return this.http.delete<void>(`${this.apiServerUrl}/remove-Reclamation/${reclamtionId}`);
} 
public getReclamationFournisseur(fournisseurId:number): Observable<Reclamation[]>{
  return this.http.get<Reclamation[]>(`${this.apiServerUrl}/retrieve-ReclamationByIdFournisseur/${fournisseurId}`);
} 
}

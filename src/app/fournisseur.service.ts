import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Fournisseur } from './fournisseur';




@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
    private apiServerUrl ="/api/fournisseur";
    host:string ="http://localhost:8089";

  constructor(private http:HttpClient) { }

  public getFournisseurs(): Observable<Fournisseur>{
    return this.http.get<any>(`${this.apiServerUrl}/retrieve-all-Fournisseurs`);
  }
  public getAllFournisseurs():Observable<Fournisseur[]>{
    return this.http.get<Fournisseur[]>(`${this.apiServerUrl}/retrieve-all-Fournisseurs`);
  }
  public addFournisseur(formData:FormData): Observable<any>{
    return this.http.post<Fournisseur>(`${this.apiServerUrl}/add-Fournisseur`,formData);
  }

  public updateFournisseur(fournisseur:Fournisseur): Observable<Fournisseur>{
    return this.http.put<Fournisseur>(`${this.apiServerUrl}/modify-Fournisseur`,fournisseur);
  }

  public deleteFournisseur(fournisseurId:number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/remove-Fournisseur/${fournisseurId}`);
  } 

  public getFournisseur(fournisseurId:number): Observable<Fournisseur>{
    return this.http.get<Fournisseur>(`${this.apiServerUrl}/retrieve-Fournisseur/${fournisseurId}`);
  } 
  public getImage(fournisseurId:Fournisseur):Observable<any>{
    return this.http.get(`${this.apiServerUrl}/Imgfournisseur/${fournisseurId}`);
  } 


}

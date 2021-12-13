import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8088/SpringMVC/produit';

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl + "/retrieve-all-produits")
  }

  getProductByCat(cat:String): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl + "/getproductsbtcat/" +cat)
  }

  addProduct(formData: FormData , idrayon : number , idstock:number, cat:String) {
    return this.httpClient.post(this.baseUrl + "/add-produit2/"+idrayon+"/"+idstock+"/"+cat, formData);
  }

  updateProduct(product: Product) {
    return this.httpClient.put(this.baseUrl + "/update-produit", product);
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(this.baseUrl + "/remove-produit" + "/" + id);
  }

  getProduit(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.baseUrl + "/retrieve-produit/" + id)
  }
}

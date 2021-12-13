import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseUrl = 'http://localhost:8088/SpringMVC/stock';

  constructor(private httpClient: HttpClient) { }

  getStockList(): Observable<Stock[]> {
    return this.httpClient.get<Stock[]>(this.baseUrl + "/retrieve-all-stocks")
  }

  addStock(stock: Stock) {
    return this.httpClient.post(this.baseUrl + "/add-stock", stock);
  }

  updateStock(stock: Stock) {
    return this.httpClient.put(this.baseUrl + "/update-stock", stock);
  }

  deleteStock(id: number) {
    return this.httpClient.delete(this.baseUrl + "/remove-stock" + "/" + id);
  }

  getStock(id: number): Observable<Stock> {
    return this.httpClient.get<Stock>(this.baseUrl + "/retrieve-stock/" + id)
  }
}

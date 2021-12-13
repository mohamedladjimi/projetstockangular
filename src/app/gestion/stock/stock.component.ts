import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  stocks: Stock[];
  constructor(private stockservice : StockService,
    private router: Router) { }

  ngOnInit(): void {
    this.listStocks();
  }

  listStocks() {
    this.stockservice.getStockList().subscribe(
      data => {
        this.stocks = data;
        console.log(data);
      }
    )
  }

  deleteStock(id: number) {
    this.stockservice.deleteStock(id)
      .subscribe(
        data => {
          console.log(data);
          this.listStocks();
        },
        error => console.log(error));
  }

  addStock(){
    this.router.navigate(['/addStock']);
  }

  updateStock(id:number){
    this.router.navigate(['/updateStock/'+id]);
  }

}

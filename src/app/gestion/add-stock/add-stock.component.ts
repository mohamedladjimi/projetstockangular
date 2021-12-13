import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent implements OnInit {

  stock: Stock = new Stock();
  submitted = false;

  constructor(private router: Router,private stockservice : StockService) { }

  ngOnInit(): void {
  }

  newEmployee(): void {
    this.submitted = false;
    this.stock = new Stock();
  }

  save() {
    this.stockservice
    .addStock(this.stock).subscribe(data => {
      console.log(data)
      this.stock = new Stock();
      this.listStocks();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  listStocks() {
    this.router.navigate(['/stock']);
  }
}
 
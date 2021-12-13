import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.scss']
})
export class UpdateStockComponent implements OnInit {

  stock : Stock ;
  id : number;
  constructor(private router: Router,private stockservice : StockService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.stock = new Stock();
    this.id = this.route.snapshot.params['id'];

    this.stockservice.getStock(this.id).subscribe(data =>{
      console.log(data)
      this.stock = data ;
    }, error=>console.log(error)
    );
  }

  updateStock() {
    this.stockservice.updateStock(this.stock)
      .subscribe(data => {
        console.log(data);
        this.stock = new Stock();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateStock();    
  }

  gotoList() {
    this.router.navigate(['/stock']);
  }

}

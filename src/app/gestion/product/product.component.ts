import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  products: Product[];
  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit(): void {

    this.listProducts();
  }
  listProducts() {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
        console.log(data);
      }
    )
  }

  addProduit(){
    this.router.navigate(['/addProduit']);
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.listProducts();
        },
        error => console.log(error));
  }

  updateStock(id:number){
    this.router.navigate(['/updateProduit/'+id]);
  }

  listelectro(){
    this.productService.getProductByCat("Electromenager").subscribe(
      data => {
        this.products = data;
        console.log(data);
      }
    )
  }

  listalimentaire(){
    this.productService.getProductByCat("Alimentaire").subscribe(
      data => {
        this.products = data;
        console.log(data);
      }
    )
  }

  listquincaillerie(){
    this.productService.getProductByCat("Quincaillerie").subscribe(
      data => {
        this.products = data;
        console.log(data);
      }
    )
  }
}

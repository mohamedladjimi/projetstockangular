import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Rayon } from '../rayon';
import { RayonService } from '../rayon.service';
import { Stock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  produit: Product = new Product();
  submitted = false;
  rayons :Rayon[];
  stocks :Stock[];
  categories : any[];
  image:File;
  imageMin: File;

  cat:String;
  selectedrayon : Rayon ;
  selectedstock : Stock;
  selectedS : number;
  selectedR : number;

  constructor(private router: Router,private produitservice : ProductService,
    private stockservice : StockService,private rayonservice : RayonService) { }

  ngOnInit(): void {
    this.listRayons();
    this.listStocks();
    this.categories=[{value: 'Electromenager', viewValue: 'Electromenager'},
    {value: 'Alimentaire', viewValue: 'Alimentaire'},
    {value: 'Quincaillerie', viewValue: 'Quincaillerie'},]
  }

  newEmployee(): void {
    this.submitted = false;
    this.produit = new Product();
  }

  save() {
    const formData = new FormData();
    formData.append('multipartfile',this.image)
    formData.append('code',this.produit.code)
    formData.append('libelle',this.produit.libelle)
    formData.append('prixUnitaire', this.produit.prixUnitaire.toString())
    //formData.append('produit',JSON.stringify(this.produit))
    console.log(formData)
    this.produitservice
    .addProduct(formData,this.selectedR , this.selectedS, this.cat).subscribe(data => {
      console.log(data)
      this.produit = new Product();
      this.listProduits();
      
    }, 
    error => console.log(error));
  }

  listRayons() {
    this.rayonservice.getRayonList().subscribe(
      data => {
        this.rayons = data;
        console.log(data);
      }
    )
  }

  listStocks() {
    this.stockservice.getStockList().subscribe(
      data => {
        this.stocks = data;
        console.log(data);
      }
    )
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  listProduits() {
    this.router.navigate(['/product']);
  }

  onFileChange(event) {
    this.image = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (event: any) => {
      this.imageMin = event.target.result;
    };
    fr.readAsDataURL(this.image);
  }
}

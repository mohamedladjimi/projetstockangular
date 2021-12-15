import { Component,  OnInit } from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';
import { Client } from 'app/Models/Client';
import { ClientServiceService } from 'app/Services/client-service.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  
  client : Client;
  clientform : FormGroup;
  constructor(public cs :ClientServiceService) { }

  ngOnInit(): void {
    this.clientform = new FormGroup({
    nom: new FormControl(),
    prenom: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    dateNaissance: new FormControl(),
    profession:  new FormControl(),
    categorieClient: new FormControl(), 
     })}

     ajoutClient(client : Client) {
      this.cs.addClient(client).subscribe();
      console.log(client);
    }
    
     createClient() {
       this.client = this.clientform.value;
       this.ajoutClient(this.client);
     }

   

}
// ngOnInit(): void {
//   this.getAllProducts();
//   this.formproduit = this.formbuider.group({

//     libelle: ['', [Validators.required]],
//     code: ['', [Validators.required]],
//     prixUnitaire: ['', [Validators.required]],
    
//    // categorieProduit: ['', [Validators.required]],
    
//   });
// }
// // onSubmit() {
 
// //     this.addData();
// //   }
// getAllProducts() {
//   this.produitservice.getAllProduits().subscribe(res => {
//     this.listeproduit = res;
//   });
// }
// addprod(idStock: any,idRayon:any) {

//   console.log(idStock);
//   console.log(idRayon);
//   //this.submitted = true;
//   let myi=new Produit();
//   myi.libelle=this.formproduit.get('libelle').value;
//   myi.code=this.formproduit.get('code').value;
//   myi.prixUnitaire=this.formproduit.get('prixUnitaire').value;
//    //myi.categorieProduit=this.formproduit.get('categorieProduit').value;
  



//   // stop here if form is invalid
//   if (this.formproduit.invalid) {
//     return;
//   }
  
//   console.log(this.formproduit.value);
//   this.produitservice.addProduct(myi,idRayon,idStock).subscribe((res: any) => {
//     console.log(res);
//    this.getAllProducts();
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fournisseur } from 'app/fournisseur';
import { FournisseurService } from 'app/fournisseur.service';
import { Reclamation } from 'app/reclamation';
import { ReclamationService } from 'app/reclamation.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss']
})
export class FournisseurComponent implements OnInit {

 
  list:any;
  fournisseurModalOpen= false;
   reclamations : Reclamation[]

  constructor(private fournisseurService: FournisseurService, private reclamationServive : ReclamationService ,private router:Router){}
  
  
  ngOnInit():void {
    this.fournisseurService.getFournisseurs().subscribe(
    res=>{
      this.list=res;
    });  
    }
  private getFournisseurs(){
    this.fournisseurService.getFournisseurs().subscribe(
      res=>{
        this.list=res;
      });
  }

    addFournisseur():void{
      this.router.navigate(['/addfournisseur']);

    }
    deleteFournisseur(fournisseurId : number){
      this.fournisseurService.deleteFournisseur(fournisseurId).subscribe(data=>{
        console.log(data);
        this.getFournisseurs();
      })
    }

    reclationFournisseur(fournisseurId : number){
      this.reclamationServive.getReclamationFournisseur(fournisseurId).subscribe(
        res=>{
          this.reclamations=res;
          console.log(this.reclamations);
          this.router.navigate(['ListReclamationFournisseur', {list: this.reclamations }]);
        });  
        
    }

}

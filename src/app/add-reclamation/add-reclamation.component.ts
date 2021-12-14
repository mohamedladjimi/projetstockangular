import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Fournisseur } from 'app/fournisseur';
import { FournisseurService } from 'app/fournisseur.service';
import { Reclamation } from 'app/reclamation';
import { ReclamationService } from 'app/reclamation.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.scss']
})
export class AddReclamationComponent implements OnInit {

  ReclamationForm 
  fournisseurList: Fournisseur[];

  reclamation : Reclamation
  constructor(private fb: FormBuilder ,private fournisseurService :FournisseurService ,private reclamationService:ReclamationService, private router:Router) { 
  this.ReclamationForm = this.fb.group({
     
    objet:this.fb.control('', Validators.required),
    description:this.fb.control('', Validators.required),
    idFournisseur:this.fb.control('',Validators.required),
    
   
 
  })
}

  ngOnInit(): void {
    this.fournisseurService.getAllFournisseurs().subscribe(
      response =>{ this.fournisseurList = response;}
    );
  
  }



  
  save(submitForm:FormGroup){
   this.reclamation = submitForm.value;
     this.fournisseurService.getFournisseur(this.idFournisseur.value).subscribe(res=>{
      this.reclamation.fournisseur = res
       //console.log(res)
       this.reclamationService.addReclamation(this.reclamation).subscribe(data=>{
       // console.log(data);
       //this.router.navigateByUrl('/fournisseur');
     });
     })  
  
    }

   
    get objet() {
      return this.ReclamationForm.get('objet');
    }
    get description() {
      return this.ReclamationForm.get('description');
    }
    get idFournisseur() {
      return this.ReclamationForm.get('idFournisseur');
    }

    changeF(e) {
      this.idFournisseur.setValue(e.target.value, {
        
        onlySelf: true
      })
      console.log(e.target.value)
    }
}

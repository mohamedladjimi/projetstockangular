import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Fournisseur } from 'app/fournisseur';
import { FournisseurService } from 'app/fournisseur.service';
import { FournisseurComponent } from 'app/fournisseur/fournisseur.component';

@Component({
  selector: 'app-add-or-edit-fournisseur',
  templateUrl: './add-or-edit-fournisseur.component.html',
  styleUrls: ['./add-or-edit-fournisseur.component.scss']
})
export class AddOrEditFournisseurComponent implements OnInit {

   // fournisseur: Fournisseur = new Fournisseur();
   //@Output() finish = new  EventEmitter();
  public fournisseurFile: any = File ;
  FournisseurForm
  constructor(private fb: FormBuilder ,private fournisseurService:FournisseurService, private router:Router) { 
    this.FournisseurForm = this.fb.group({
     
        libelle:this.fb.control('', [Validators.required, Validators.minLength(5)]),
        code:this.fb.control('', [Validators.required, Validators.maxLength(7)]),
        adresse:this.fb.control('',Validators.required),
        numtel:this.fb.control('',[Validators.required, Validators.pattern("[0-9]{8}")]),
        email:this.fb.control('', [Validators.required, Validators.email]),
        image:this.fb.control('',Validators.required),
       
     
    })
  }

 

 


 
  close(){
    this.FournisseurForm.reset();
  }

  save(submitForm:FormGroup){
    const fournisseur = submitForm.value;
    const formData = new FormData();
    formData.append('fournisseur',JSON.stringify(fournisseur));
    formData.append('image',this.fournisseurFile);
    this.fournisseurService.addFournisseur(formData).subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl('/fournisseur');
    });
    }

    onSelectFile(event){
      const file = event.target.files[0];
      this.fournisseurFile = file;
      console.log(file);

    }  


  ngOnInit(): void {
  }
  get libelle() {
    return this.FournisseurForm.get('libelle');
  }
  get code() {
    return this.FournisseurForm.get('code');
  }
  get image() {
    return this.FournisseurForm.get('image');
  }
  get numtel() {
    return this.FournisseurForm.get('numtel');
  }
  get adresse() {
    return this.FournisseurForm.get('adresse');
  }
  get email() {
    return this.FournisseurForm.get('email');
  }

}

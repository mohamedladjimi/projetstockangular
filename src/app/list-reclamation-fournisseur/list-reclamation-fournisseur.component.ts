import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamation } from 'app/reclamation';

@Component({
  selector: 'app-list-reclamation-fournisseur',
  templateUrl: './list-reclamation-fournisseur.component.html',
  styleUrls: ['./list-reclamation-fournisseur.component.scss']
})
export class ListReclamationFournisseurComponent implements OnInit {

  constructor(private route:ActivatedRoute ) { }

 @Input() INreclamations: Reclamation[]
  // reclamations : Reclamation[]
    
  
 ngOnInit(): void {
    
  this.route.snapshot.paramMap.get('list');}

}

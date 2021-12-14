import { Component, Input, OnInit } from '@angular/core';
import { Fournisseur } from 'app/fournisseur';

@Component({
  selector: 'app-show-fournisseur',
  templateUrl: './show-fournisseur.component.html',
  styleUrls: ['./show-fournisseur.component.scss']
})
export class ShowFournisseurComponent implements OnInit {

  @Input() fournisseurs: Fournisseur[];
  constructor() { }

  ngOnInit(): void {
  }

}

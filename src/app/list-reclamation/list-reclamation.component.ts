import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reclamation } from 'app/reclamation';
import { ReclamationService } from 'app/reclamation.service';

@Component({
  selector: 'app-list-reclamation',
  templateUrl: './list-reclamation.component.html',
  styleUrls: ['./list-reclamation.component.scss']
})
export class ListReclamationComponent implements OnInit {

  list:any;
  constructor( private reclamationService : ReclamationService , private router:Router) { }

  ngOnInit():void {
    this.reclamationService. getReclamations().subscribe(
    res=>{
      this.list=res;
    });  
    }


  private getReclamations(){
    this.reclamationService.getReclamations().subscribe(
      res=>{
        this.list=res;
      });
  }


  deleteReclamation(reclamationId : number){
    this.reclamationService.deleteReclamation(reclamationId).subscribe(data=>{
      console.log(data);
      this.getReclamations();
    })
  }

}

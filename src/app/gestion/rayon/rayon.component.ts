import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rayon } from '../rayon';
import { RayonService } from '../rayon.service';

@Component({
  selector: 'app-rayon',
  templateUrl: './rayon.component.html',
  styleUrls: ['./rayon.component.scss']
})
export class RayonComponent implements OnInit {

  rayons: Rayon[];
  constructor(private rayonservice : RayonService,
    private router: Router) { }

  ngOnInit(): void {
    this.listRayons();
  }

  listRayons() {
    this.rayonservice.getRayonList().subscribe(
      data => {
        this.rayons = data;
        console.log(data);
      }
    )
  }

  deleteRayon(id: number) {
    this.rayonservice.deleteRayon(id)
      .subscribe(
        data => {
          console.log(data);
          this.listRayons();
        },
        error => console.log(error));
  }

  addRayon(){
    this.router.navigate(['/addRayon']);
  }

  updateRayon(id:number){
    this.router.navigate(['/updateRayon/'+id]);
  }


}

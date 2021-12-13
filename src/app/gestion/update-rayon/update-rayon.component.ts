import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rayon } from '../rayon';
import { RayonService } from '../rayon.service';

@Component({
  selector: 'app-update-rayon',
  templateUrl: './update-rayon.component.html',
  styleUrls: ['./update-rayon.component.scss']
})
export class UpdateRayonComponent implements OnInit {

  rayon : Rayon ;
  id : number;
  constructor(private router: Router,private rayonservice : RayonService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.rayon = new Rayon();
    this.id = this.route.snapshot.params['id'];

    this.rayonservice.getRayon(this.id).subscribe(data =>{
      console.log(data)
      this.rayon = data ;
    }, error=>console.log(error)
    );
  }

  updateRayon() {
    this.rayonservice.updateRayon(this.rayon)
      .subscribe(data => {
        console.log(data);
        this.rayon = new Rayon();
        this.listRayons();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateRayon();    
  }

  listRayons() {
    this.router.navigate(['/rayon']);
  }

}

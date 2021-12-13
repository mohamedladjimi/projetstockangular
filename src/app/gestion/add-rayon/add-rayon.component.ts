import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rayon } from '../rayon';
import { RayonService } from '../rayon.service';

@Component({
  selector: 'app-add-rayon',
  templateUrl: './add-rayon.component.html',
  styleUrls: ['./add-rayon.component.scss']
})
export class AddRayonComponent implements OnInit {

  rayon: Rayon = new Rayon();
  submitted = false;

  constructor(private router: Router,private rayonservice : RayonService) { }

  ngOnInit(): void {
  }

  newEmployee(): void {
    this.submitted = false;
    this.rayon = new Rayon();
  }

  save() {
    this.rayonservice
    .addRayon(this.rayon).subscribe(data => {
      console.log(data)
      this.rayon = new Rayon();
      this.listRayons();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  listRayons() {
    this.router.navigate(['/rayon']);
  }

}

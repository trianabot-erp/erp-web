import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skyzenproducts',
  templateUrl: './skyzenproducts.component.html',
  styleUrls: ['./skyzenproducts.component.css']
})
export class SkyzenproductsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  addproduct(){
    this.router.navigate(['/addproductskyzen']);
  }
}

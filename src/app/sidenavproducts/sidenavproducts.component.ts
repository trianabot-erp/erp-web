import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenavproducts',
  templateUrl: './sidenavproducts.component.html',
  styleUrls: ['./sidenavproducts.component.css']
})
export class SidenavproductsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  productbrand(){
  this.router.navigate(['/productbrand']);
  }
  productcategory(){
    this.router.navigate(['/productcategory']);
  }
  productsubcategory(){
    this.router.navigate(['/productsubcategory']);
  }
  productshsn(){
    this.router.navigate(['/productshsn']);
  }
}

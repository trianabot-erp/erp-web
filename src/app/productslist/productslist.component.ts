import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  addproductslist(){
     this.router.navigate(['/productaddproductslist'])
  }
}

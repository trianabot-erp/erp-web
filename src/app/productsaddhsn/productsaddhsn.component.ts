import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productsaddhsn',
  templateUrl: './productsaddhsn.component.html',
  styleUrls: ['./productsaddhsn.component.css']
})
export class ProductsaddhsnComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  viewproductshsn(){
    this.router.navigate(['/productshsn'])
  }
}

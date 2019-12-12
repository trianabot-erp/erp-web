import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productshsn',
  templateUrl: './productshsn.component.html',
  styleUrls: ['./productshsn.component.css']
})
export class ProductshsnComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  addproductshsn(){
    this.router.navigate(['/productsaddhsn'])
  }
}
